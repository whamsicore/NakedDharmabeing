"use client";
import "../../chunk-FRAKUJWH.mjs";
import {
  processMessageStream
} from "../../chunk-MZ5UN3BY.mjs";
import {
  __async
} from "../../chunk-MRXNTQOX.mjs";

// src/openai-assistants/hooks/use-assistants.ts
import { useState } from "react";
import { parseStreamPart } from "@copilotkit/shared";
function experimental_useAssistant({
  api,
  threadId: threadIdParam
}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [threadId, setThreadId] = useState(void 0);
  const [status, setStatus] = useState("awaiting_message");
  const [error, setError] = useState(void 0);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const submitMessage = (e) => __async(this, null, function* () {
    var _a;
    e.preventDefault();
    if (input === "") {
      return;
    }
    setStatus("in_progress");
    setMessages((messages2) => [...messages2, { id: "", role: "user", content: input }]);
    setInput("");
    const result = yield fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // always use user-provided threadId when available:
        threadId: (_a = threadIdParam != null ? threadIdParam : threadId) != null ? _a : null,
        message: input
      })
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
export {
  experimental_useAssistant
};
//# sourceMappingURL=use-assistants.mjs.map