import {
  processMessageStream
} from "./chunk-MZ5UN3BY.mjs";
import {
  defaultCopilotContextCategories
} from "./chunk-PHK2K7UB.mjs";
import {
  CopilotContext
} from "./chunk-S7ZVOTYK.mjs";
import {
  __async,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/openai-assistants/hooks/use-copilot-chat-v2.ts
import { useContext, useMemo, useState } from "react";
import { parseStreamPart } from "@copilotkit/shared";
function useCopilotChatV2(options) {
  const {
    getContextString,
    getChatCompletionFunctionDescriptions,
    getFunctionCallHandler,
    copilotApiConfig
  } = useContext(CopilotContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [threadId, setThreadId] = useState(void 0);
  const [status, setStatus] = useState("awaiting_message");
  const [error, setError] = useState(void 0);
  const systemMessage = useMemo(() => {
    const systemMessageMaker = options.makeSystemMessage || defaultSystemMessage;
    const contextString = getContextString([], defaultCopilotContextCategories);
    return {
      id: "system",
      content: systemMessageMaker(contextString),
      role: "system"
    };
  }, [getContextString, options.makeSystemMessage]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const submitMessage = (e) => __async(this, null, function* () {
    var _a, _b;
    e.preventDefault();
    if (input === "") {
      return;
    }
    setStatus("in_progress");
    setMessages((messages2) => [...messages2, { id: "", role: "user", content: input }]);
    setInput("");
    const apiUrl = copilotApiConfig.chatApiEndpointV2;
    const functions = getChatCompletionFunctionDescriptions();
    const result = yield fetch(apiUrl, {
      method: "POST",
      headers: __spreadValues(__spreadValues({
        "Content-Type": "application/json"
      }, copilotApiConfig.headers), options.headers),
      body: JSON.stringify(__spreadValues(__spreadValues(__spreadValues({
        // always use user-provided threadId when available:
        threadId: (_b = (_a = options.threadId) != null ? _a : threadId) != null ? _b : null,
        message: input
      }, functions.length > 0 && { functions }), copilotApiConfig.body), options.body))
    });
    if (result.body == null) {
      throw new Error("The response body is empty.");
    }
    yield processMessageStream(result.body.getReader(), (message) => {
      try {
        const { type, value } = parseStreamPart(message);
        switch (type) {
          case "assistant_message": {
            setMessages((messages2) => [
              ...messages2,
              {
                id: value.id,
                role: value.role,
                content: value.content[0].text.value
              }
            ]);
            break;
          }
          case "assistant_control_data": {
            setThreadId(value.threadId);
            setMessages((messages2) => {
              const lastMessage = messages2[messages2.length - 1];
              lastMessage.id = value.messageId;
              return [...messages2.slice(0, messages2.length - 1), lastMessage];
            });
            break;
          }
          case "error": {
            setError(value);
            break;
          }
        }
      } catch (error2) {
        setError(error2);
      }
    });
    setStatus("awaiting_message");
  });
  return {
    messages,
    input,
    handleInputChange,
    submitMessage,
    status,
    error
  };
}
function defaultSystemMessage(contextString) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with functions you can call to initiate actions on their behalf, or functions you can call to receive more information.

Please assist them as best you can.

You can ask them for clarifying questions if needed, but don't be annoying about it. If you can reasonably 'fill in the blanks' yourself, do so.

If you would like to call a function, call it without saying anything else.
`;
}

export {
  useCopilotChatV2,
  defaultSystemMessage
};
//# sourceMappingURL=chunk-6WZFE6II.mjs.map