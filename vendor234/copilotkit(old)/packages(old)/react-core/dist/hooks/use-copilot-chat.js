"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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

// src/hooks/use-copilot-chat.ts
var use_copilot_chat_exports = {};
__export(use_copilot_chat_exports, {
  defaultSystemMessage: () => defaultSystemMessage,
  useCopilotChat: () => useCopilotChat
});
module.exports = __toCommonJS(use_copilot_chat_exports);
var import_react4 = require("react");

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

// src/hooks/use-chat.ts
var import_react2 = require("react");
var import_shared2 = require("@copilotkit/shared");
var import_nanoid = require("nanoid");

// src/utils/fetch-chat-completion.ts
var import_shared = require("@copilotkit/shared");
function fetchChatCompletion(_0) {
  return __async(this, arguments, function* ({
    copilotConfig,
    model,
    messages,
    tools,
    temperature,
    headers,
    body,
    signal
  }) {
    var _a, _b;
    temperature || (temperature = 0.5);
    tools || (tools = []);
    const cleanedMessages = messages.map((message) => {
      const { content, role, name, function_call } = message;
      return { content, role, name, function_call };
    });
    const response = yield fetch(copilotConfig.chatApiEndpoint, {
      method: "POST",
      headers: __spreadValues(__spreadValues({
        "Content-Type": "application/json"
      }, copilotConfig.headers), headers ? __spreadValues({}, headers) : {}),
      body: JSON.stringify(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
        model,
        messages: cleanedMessages,
        stream: true
      }, tools.length ? { tools } : {}), temperature ? { temperature } : {}), tools.length != 0 ? { tool_choice: "auto" } : {}), copilotConfig.body), copilotConfig.backendOnlyProps), Object.keys((_a = copilotConfig["body"]) != null ? _a : {}).length > 0 ? { [import_shared.EXCLUDE_FROM_FORWARD_PROPS_KEYS]: Object.keys((_b = copilotConfig["body"]) != null ? _b : {}) } : {}), body ? __spreadValues({}, body) : {})),
      signal
    });
    return response;
  });
}
function fetchAndDecodeChatCompletion(params) {
  return __async(this, null, function* () {
    const response = yield fetchChatCompletion(params);
    if (!response.ok || !response.body) {
      return __spreadProps(__spreadValues({}, response), { events: null });
    }
    const events = yield (0, import_shared.decodeChatCompletion)((0, import_shared.parseChatCompletion)(response.body));
    return __spreadProps(__spreadValues({}, response), { events });
  });
}

// src/hooks/use-chat.ts
function useChat(options) {
  const [messages, setMessages] = (0, import_react2.useState)([]);
  const [input, setInput] = (0, import_react2.useState)("");
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const abortControllerRef = (0, import_react2.useRef)();
  const runChatCompletion = (messages2) => __async(this, null, function* () {
    setIsLoading(true);
    const newMessages = [
      {
        id: (0, import_nanoid.nanoid)(),
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
              id: (0, import_nanoid.nanoid)(),
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
            id: (0, import_nanoid.nanoid)(),
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
              id: (0, import_nanoid.nanoid)(),
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
                id: (0, import_nanoid.nanoid)(),
                role: "function",
                content: (0, import_shared2.encodeResult)(result),
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

// src/components/copilot-provider/copilotkit.tsx
var import_react3 = require("react");
var import_shared3 = require("@copilotkit/shared");
var import_jsx_runtime = require("react/jsx-runtime");
var defaultCopilotContextCategories = ["global"];

// src/hooks/use-copilot-chat.ts
function useCopilotChat(_a) {
  var _b = _a, {
    makeSystemMessage,
    additionalInstructions
  } = _b, options = __objRest(_b, [
    "makeSystemMessage",
    "additionalInstructions"
  ]);
  const {
    getContextString,
    getChatCompletionFunctionDescriptions,
    getFunctionCallHandler,
    copilotApiConfig
  } = (0, import_react4.useContext)(CopilotContext);
  const systemMessage = (0, import_react4.useMemo)(() => {
    const systemMessageMaker = makeSystemMessage || defaultSystemMessage;
    const contextString = getContextString([], defaultCopilotContextCategories);
    return {
      id: "system",
      content: systemMessageMaker(contextString, additionalInstructions),
      role: "system"
    };
  }, [getContextString, makeSystemMessage]);
  const functionDescriptions = (0, import_react4.useMemo)(() => {
    return getChatCompletionFunctionDescriptions();
  }, [getChatCompletionFunctionDescriptions]);
  const { messages, append, reload, stop, isLoading, input, setInput } = useChat(__spreadProps(__spreadValues({}, options), {
    copilotConfig: copilotApiConfig,
    id: options.id,
    initialMessages: [systemMessage].concat(options.initialMessages || []),
    tools: functionDescriptions,
    onFunctionCall: getFunctionCallHandler(),
    headers: __spreadValues({}, options.headers),
    body: __spreadValues({}, options.body)
  }));
  const visibleMessages = messages.filter(
    (message) => message.role === "user" || message.role === "assistant"
  );
  return {
    visibleMessages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput
  };
}
function defaultSystemMessage(contextString, additionalInstructions) {
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
` + (additionalInstructions ? `

${additionalInstructions}` : "");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultSystemMessage,
  useCopilotChat
});
//# sourceMappingURL=use-copilot-chat.js.map