import {
  fetchAndDecodeChatCompletion
} from "./chunk-BQ5SSV4Z.mjs";
import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/use-chat.ts
import { useRef, useState } from "react";
import { encodeResult } from "@copilotkit/shared";
import { nanoid } from "nanoid";
function useChat(options) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef();
  const runChatCompletion = (messages2) => __async(this, null, function* () {
    setIsLoading(true);
    const newMessages = [
      {
        id: nanoid(),
        createdAt: /* @__PURE__ */ new Date(),
        content: "",
        role: "assistant"
      }
    ];
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setMessages([...messages2, ...newMessages]);
    const messagesWithContext = [...options.initialMessages || [], ...messages2];
    const response = yield fetchAndDecodeChatCompletion({
      copilotConfig: options.copilotConfig,
      messages: messagesWithContext,
      tools: options.tools,
      headers: options.headers,
      signal: abortController.signal
    });
    if (!response.events) {
      throw new Error("Failed to fetch chat completion");
    }
    const reader = response.events.getReader();
    let feedback = false;
    try {
      while (true) {
        const { done, value } = yield reader.read();
        if (done) {
          break;
        }
        let currentMessage = Object.assign({}, newMessages[newMessages.length - 1]);
        if (value.type === "content") {
          if (currentMessage.function_call || currentMessage.role === "function") {
            currentMessage = {
              id: nanoid(),
              createdAt: /* @__PURE__ */ new Date(),
              content: "",
              role: "assistant"
            };
            newMessages.push(currentMessage);
          }
          currentMessage.content += value.content;
          newMessages[newMessages.length - 1] = currentMessage;
          setMessages([...messages2, ...newMessages]);
        } else if (value.type === "result") {
          currentMessage = {
            id: nanoid(),
            role: "function",
            content: value.content,
            name: value.name
          };
          newMessages.push(currentMessage);
          setMessages([...messages2, ...newMessages]);
          feedback = true;
        } else if (value.type === "function") {
          if (currentMessage.content != "" || currentMessage.function_call || currentMessage.role == "function") {
            currentMessage = {
              id: nanoid(),
              createdAt: /* @__PURE__ */ new Date(),
              content: "",
              role: "assistant"
            };
            newMessages.push(currentMessage);
          }
          currentMessage.function_call = {
            name: value.name,
            arguments: JSON.stringify(value.arguments),
            scope: value.scope
          };
          newMessages[newMessages.length - 1] = currentMessage;
          setMessages([...messages2, ...newMessages]);
          try {
            if (options.onFunctionCall && value.scope === "client") {
              const result = yield options.onFunctionCall(messages2, currentMessage.function_call);
              currentMessage = {
                id: nanoid(),
                role: "function",
                content: encodeResult(result),
                name: currentMessage.function_call.name
              };
              newMessages.push(currentMessage);
              setMessages([...messages2, ...newMessages]);
              feedback = true;
            }
          } catch (error) {
            console.error("Failed to execute function call", error);
          }
        }
      }
      if (feedback) {
        return yield runChatCompletion([...messages2, ...newMessages]);
      } else {
        return newMessages.slice();
      }
    } finally {
      setIsLoading(false);
    }
  });
  const runChatCompletionAndHandleFunctionCall = (messages2) => __async(this, null, function* () {
    yield runChatCompletion(messages2);
  });
  const append = (message) => __async(this, null, function* () {
    if (isLoading) {
      return;
    }
    const newMessages = [...messages, message];
    setMessages(newMessages);
    return runChatCompletionAndHandleFunctionCall(newMessages);
  });
  const reload = () => __async(this, null, function* () {
    if (isLoading || messages.length === 0) {
      return;
    }
    let newMessages = [...messages];
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role === "assistant") {
      newMessages = newMessages.slice(0, -1);
    }
    setMessages(newMessages);
    return runChatCompletionAndHandleFunctionCall(newMessages);
  });
  const stop = () => {
    var _a;
    (_a = abortControllerRef.current) == null ? void 0 : _a.abort();
  };
  return {
    messages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput
  };
}

export {
  useChat
};
//# sourceMappingURL=chunk-JFUS5YVO.mjs.map