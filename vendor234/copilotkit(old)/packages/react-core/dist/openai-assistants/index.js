"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/openai-assistants/index.ts
var openai_assistants_exports = {};
__export(openai_assistants_exports, {
  processMessageStream: () => processMessageStream,
  useCopilotChatV2: () => useCopilotChatV2
});
module.exports = __toCommonJS(openai_assistants_exports);

// src/openai-assistants/hooks/use-copilot-chat-v2.ts
var import_react3 = require("react");

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

// src/openai-assistants/hooks/use-copilot-chat-v2.ts
var import_shared2 = require("@copilotkit/shared");

// src/context/copilot-context.tsx
var import_react = __toESM(require("react"));
var emptyCopilotContext = {
  entryPoints: {},
  setEntryPoint: () => {
  },
  removeEntryPoint: () => {
  },
  getChatCompletionFunctionDescriptions: () => returnAndThrowInDebug([]),
  getFunctionCallHandler: () => returnAndThrowInDebug(() => __async(void 0, null, function* () {
  })),
  getContextString: (documents, categories) => returnAndThrowInDebug(""),
  addContext: () => "",
  removeContext: () => {
  },
  getDocumentsContext: (categories) => returnAndThrowInDebug([]),
  addDocumentContext: () => returnAndThrowInDebug(""),
  removeDocumentContext: () => {
  },
  copilotApiConfig: new class {
    get chatApiEndpoint() {
      throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
    }
    get chatApiEndpointV2() {
      throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
    }
    get headers() {
      return {};
    }
    get body() {
      return {};
    }
  }()
};
var CopilotContext = import_react.default.createContext(emptyCopilotContext);
function returnAndThrowInDebug(value) {
  throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
  return value;
}

// src/components/copilot-provider/copilotkit.tsx
var import_react2 = require("react");
var import_shared = require("@copilotkit/shared");
var import_jsx_runtime = require("react/jsx-runtime");
var defaultCopilotContextCategories = ["global"];

// src/openai-assistants/hooks/use-copilot-chat-v2.ts
function useCopilotChatV2(options) {
  const {
    getContextString,
    getChatCompletionFunctionDescriptions,
    getFunctionCallHandler,
    copilotApiConfig
  } = (0, import_react3.useContext)(CopilotContext);
  const [messages, setMessages] = (0, import_react3.useState)([]);
  const [input, setInput] = (0, import_react3.useState)("");
  const [threadId, setThreadId] = (0, import_react3.useState)(void 0);
  const [status, setStatus] = (0, import_react3.useState)("awaiting_message");
  const [error, setError] = (0, import_react3.useState)(void 0);
  const systemMessage = (0, import_react3.useMemo)(() => {
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
        const { type, value } = (0, import_shared2.parseStreamPart)(message);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processMessageStream,
  useCopilotChatV2
});
//# sourceMappingURL=index.js.map