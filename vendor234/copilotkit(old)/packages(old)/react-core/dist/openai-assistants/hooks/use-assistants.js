"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/openai-assistants/hooks/use-assistants.ts
var use_assistants_exports = {};
__export(use_assistants_exports, {
  experimental_useAssistant: () => experimental_useAssistant
});
module.exports = __toCommonJS(use_assistants_exports);
var import_react = require("react");

// src/openai-assistants/utils/process-message-stream.ts
function processMessageStream(reader, processMessage) {
  return __async(this, null, function* () {
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { done, value } = yield reader.read();
      if (done) {
        if (buffer.length > 0) {
          processMessage(buffer);
        }
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      let endIndex;
      while ((endIndex = buffer.indexOf("\n")) !== -1) {
        processMessage(buffer.substring(0, endIndex).trim());
        buffer = buffer.substring(endIndex + 1);
      }
    }
  });
}

// src/openai-assistants/hooks/use-assistants.ts
var import_shared = require("@copilotkit/shared");
function experimental_useAssistant({
  api,
  threadId: threadIdParam
}) {
  const [messages, setMessages] = (0, import_react.useState)([]);
  const [input, setInput] = (0, import_react.useState)("");
  const [threadId, setThreadId] = (0, import_react.useState)(void 0);
  const [status, setStatus] = (0, import_react.useState)("awaiting_message");
  const [error, setError] = (0, import_react.useState)(void 0);
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
        const { type, value } = (0, import_shared.parseStreamPart)(message);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  experimental_useAssistant
});
//# sourceMappingURL=use-assistants.js.map