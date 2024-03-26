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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  CopilotContext: () => CopilotContext,
  CopilotKit: () => CopilotKit,
  CopilotTask: () => CopilotTask,
  defaultCopilotContextCategories: () => defaultCopilotContextCategories,
  fetchAndDecodeChatCompletion: () => fetchAndDecodeChatCompletion,
  fetchAndDecodeChatCompletionAsText: () => fetchAndDecodeChatCompletionAsText,
  fetchChatCompletion: () => fetchChatCompletion,
  processMessageStream: () => processMessageStream,
  useCopilotChat: () => useCopilotChat,
  useCopilotChatV2: () => useCopilotChatV2,
  useCopilotContext: () => useCopilotContext,
  useMakeCopilotActionable: () => useMakeCopilotActionable,
  useMakeCopilotDocumentReadable: () => useMakeCopilotDocumentReadable,
  useMakeCopilotReadable: () => useMakeCopilotReadable
});
module.exports = __toCommonJS(src_exports);

// src/components/copilot-provider/copilotkit.tsx
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
function useCopilotContext() {
  return import_react.default.useContext(CopilotContext);
}
function returnAndThrowInDebug(value) {
  throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
  return value;
}

// src/hooks/use-tree.ts
var import_nanoid = require("nanoid");
var import_react2 = require("react");
var removeNode = (nodes, id) => {
  return nodes.reduce((result, node) => {
    if (node.id !== id) {
      const newNode = __spreadProps(__spreadValues({}, node), { children: removeNode(node.children, id) });
      result.push(newNode);
    }
    return result;
  }, []);
};
var addNode = (nodes, newNode, parentId) => {
  if (!parentId) {
    return [...nodes, newNode];
  }
  return nodes.map((node) => {
    if (node.id === parentId) {
      return __spreadProps(__spreadValues({}, node), { children: [...node.children, newNode] });
    } else if (node.children.length) {
      return __spreadProps(__spreadValues({}, node), { children: addNode(node.children, newNode, parentId) });
    }
    return node;
  });
};
var treeIndentationRepresentation = (index, indentLevel) => {
  if (indentLevel === 0) {
    return (index + 1).toString();
  } else if (indentLevel === 1) {
    return String.fromCharCode(65 + index);
  } else if (indentLevel === 2) {
    return String.fromCharCode(97 + index);
  } else {
    return "-";
  }
};
var printNode = (node, prefix = "", indentLevel = 0) => {
  const indent = " ".repeat(3).repeat(indentLevel);
  const prefixPlusIndentLength = prefix.length + indent.length;
  const subsequentLinesPrefix = " ".repeat(prefixPlusIndentLength);
  const valueLines = node.value.split("\n");
  const outputFirstLine = `${indent}${prefix}${valueLines[0]}`;
  const outputSubsequentLines = valueLines.slice(1).map((line) => `${subsequentLinesPrefix}${line}`).join("\n");
  let output = `${outputFirstLine}
`;
  if (outputSubsequentLines) {
    output += `${outputSubsequentLines}
`;
  }
  const childPrePrefix = " ".repeat(prefix.length);
  node.children.forEach(
    (child, index) => output += printNode(
      child,
      `${childPrePrefix}${treeIndentationRepresentation(index, indentLevel + 1)}. `,
      indentLevel + 1
    )
  );
  return output;
};
function treeReducer(state, action) {
  switch (action.type) {
    case "ADD_NODE": {
      const { value, parentId, id: newNodeId } = action;
      const newNode = {
        id: newNodeId,
        value,
        children: [],
        categories: new Set(action.categories)
      };
      try {
        return addNode(state, newNode, parentId);
      } catch (error) {
        console.error(`Error while adding node with id ${newNodeId}: ${error}`);
        return state;
      }
    }
    case "REMOVE_NODE":
      return removeNode(state, action.id);
    default:
      return state;
  }
}
var useTree = () => {
  const [tree, dispatch] = (0, import_react2.useReducer)(treeReducer, []);
  const addElement = (0, import_react2.useCallback)(
    (value, categories, parentId) => {
      const newNodeId = (0, import_nanoid.nanoid)();
      dispatch({
        type: "ADD_NODE",
        value,
        parentId,
        id: newNodeId,
        categories
      });
      return newNodeId;
    },
    []
  );
  const removeElement = (0, import_react2.useCallback)((id) => {
    dispatch({ type: "REMOVE_NODE", id });
  }, []);
  const printTree = (0, import_react2.useCallback)(
    (categories) => {
      const categoriesSet = new Set(categories);
      let output = "";
      tree.forEach((node, index) => {
        if (!setsHaveIntersection(categoriesSet, node.categories)) {
          return;
        }
        if (index !== 0) {
          output += "\n";
        }
        output += printNode(node, `${treeIndentationRepresentation(index, 0)}. `);
      });
      return output;
    },
    [tree]
  );
  return { tree, addElement, printTree, removeElement };
};
var use_tree_default = useTree;
function setsHaveIntersection(setA, setB) {
  const [smallerSet, largerSet] = setA.size <= setB.size ? [setA, setB] : [setB, setA];
  for (let item of smallerSet) {
    if (largerSet.has(item)) {
      return true;
    }
  }
  return false;
}

// src/components/copilot-provider/copilotkit.tsx
var import_shared = require("@copilotkit/shared");

// src/hooks/use-flat-category-store.ts
var import_nanoid2 = require("nanoid");
var import_react3 = require("react");
var useFlatCategoryStore = () => {
  const [elements, dispatch] = (0, import_react3.useReducer)(flatCategoryStoreReducer, /* @__PURE__ */ new Map());
  const addElement = (0, import_react3.useCallback)((value, categories) => {
    const newId = (0, import_nanoid2.nanoid)();
    dispatch({
      type: "ADD_ELEMENT",
      value,
      id: newId,
      categories
    });
    return newId;
  }, []);
  const removeElement = (0, import_react3.useCallback)((id) => {
    dispatch({ type: "REMOVE_ELEMENT", id });
  }, []);
  const allElements = (0, import_react3.useCallback)(
    (categories) => {
      const categoriesSet = new Set(categories);
      const result = [];
      elements.forEach((element) => {
        if (setsHaveIntersection2(categoriesSet, element.categories)) {
          result.push(element.value);
        }
      });
      return result;
    },
    [elements]
  );
  return { addElement, removeElement, allElements };
};
var use_flat_category_store_default = useFlatCategoryStore;
function flatCategoryStoreReducer(state, action) {
  switch (action.type) {
    case "ADD_ELEMENT": {
      const { value, id, categories } = action;
      const newElement = {
        id,
        value,
        categories: new Set(categories)
      };
      const newState = new Map(state);
      newState.set(id, newElement);
      return newState;
    }
    case "REMOVE_ELEMENT": {
      const newState = new Map(state);
      newState.delete(action.id);
      return newState;
    }
    default:
      return state;
  }
}
function setsHaveIntersection2(setA, setB) {
  const [smallerSet, largerSet] = setA.size <= setB.size ? [setA, setB] : [setB, setA];
  for (let item of smallerSet) {
    if (largerSet.has(item)) {
      return true;
    }
  }
  return false;
}

// src/components/copilot-provider/standard-copilot-api-config.tsx
var StandardCopilotApiConfig = class {
  constructor(chatApiEndpoint, chatApiEndpointV2, headers, body) {
    this.chatApiEndpoint = chatApiEndpoint;
    this.chatApiEndpointV2 = chatApiEndpointV2;
    this.headers = headers;
    this.body = body;
  }
};

// src/components/copilot-provider/copilotkit.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function CopilotKit(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [entryPoints, setEntryPoints] = (0, import_react4.useState)({});
  const { addElement, removeElement, printTree } = use_tree_default();
  const {
    addElement: addDocument,
    removeElement: removeDocument,
    allElements: allDocuments
  } = use_flat_category_store_default();
  const setEntryPoint = (0, import_react4.useCallback)((id, entryPoint) => {
    setEntryPoints((prevPoints) => {
      return __spreadProps(__spreadValues({}, prevPoints), {
        [id]: entryPoint
      });
    });
  }, []);
  const removeEntryPoint = (0, import_react4.useCallback)((id) => {
    setEntryPoints((prevPoints) => {
      const newPoints = __spreadValues({}, prevPoints);
      delete newPoints[id];
      return newPoints;
    });
  }, []);
  const getContextString = (0, import_react4.useCallback)(
    (documents, categories) => {
      const documentsString = documents.map((document) => {
        return `${document.name} (${document.sourceApplication}):
${document.getContents()}`;
      }).join("\n\n");
      const nonDocumentStrings = printTree(categories);
      return `${documentsString}

${nonDocumentStrings}`;
    },
    [printTree]
  );
  const addContext = (0, import_react4.useCallback)(
    (context, parentId, categories = defaultCopilotContextCategories) => {
      return addElement(context, categories, parentId);
    },
    [addElement]
  );
  const removeContext = (0, import_react4.useCallback)(
    (id) => {
      removeElement(id);
    },
    [removeElement]
  );
  const getChatCompletionFunctionDescriptions = (0, import_react4.useCallback)(
    (customEntryPoints) => {
      return entryPointsToChatCompletionFunctions(Object.values(customEntryPoints || entryPoints));
    },
    [entryPoints]
  );
  const getFunctionCallHandler = (0, import_react4.useCallback)(
    (customEntryPoints) => {
      return entryPointsToFunctionCallHandler(Object.values(customEntryPoints || entryPoints));
    },
    [entryPoints]
  );
  const getDocumentsContext = (0, import_react4.useCallback)(
    (categories) => {
      return allDocuments(categories);
    },
    [allDocuments]
  );
  const addDocumentContext = (0, import_react4.useCallback)(
    (documentPointer, categories = defaultCopilotContextCategories) => {
      return addDocument(documentPointer, categories);
    },
    [addDocument]
  );
  const removeDocumentContext = (0, import_react4.useCallback)(
    (documentId) => {
      removeDocument(documentId);
    },
    [removeDocument]
  );
  const copilotApiConfig = new StandardCopilotApiConfig(
    props.url,
    `${props.url}/v2`,
    props.headers || {},
    __spreadValues(__spreadValues({}, props.body), props.backendOnlyProps)
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    CopilotContext.Provider,
    {
      value: {
        entryPoints,
        getChatCompletionFunctionDescriptions,
        getFunctionCallHandler,
        setEntryPoint,
        removeEntryPoint,
        getContextString,
        addContext,
        removeContext,
        getDocumentsContext,
        addDocumentContext,
        removeDocumentContext,
        copilotApiConfig
      },
      children
    }
  );
}
var defaultCopilotContextCategories = ["global"];
function entryPointsToFunctionCallHandler(entryPoints) {
  return (chatMessages, functionCall) => __async(this, null, function* () {
    let entrypointsByFunctionName = {};
    for (let entryPoint of entryPoints) {
      entrypointsByFunctionName[entryPoint.name] = entryPoint;
    }
    const entryPointFunction = entrypointsByFunctionName[functionCall.name || ""];
    if (entryPointFunction) {
      let functionCallArguments = [];
      if (functionCall.arguments) {
        functionCallArguments = JSON.parse(functionCall.arguments);
      }
      const paramsInCorrectOrder = [];
      for (let arg of entryPointFunction.argumentAnnotations) {
        paramsInCorrectOrder.push(
          functionCallArguments[arg.name]
        );
      }
      yield entryPointFunction.implementation(...paramsInCorrectOrder);
    }
  });
}
function entryPointsToChatCompletionFunctions(entryPoints) {
  return entryPoints.map(import_shared.annotatedFunctionToChatCompletionFunction);
}

// src/hooks/use-copilot-chat.ts
var import_react6 = require("react");

// src/hooks/use-chat.ts
var import_react5 = require("react");
var import_shared3 = require("@copilotkit/shared");
var import_nanoid3 = require("nanoid");

// src/utils/fetch-chat-completion.ts
var import_shared2 = require("@copilotkit/shared");
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
      }, tools.length ? { tools } : {}), temperature ? { temperature } : {}), tools.length != 0 ? { tool_choice: "auto" } : {}), copilotConfig.body), copilotConfig.backendOnlyProps), Object.keys((_a = copilotConfig["body"]) != null ? _a : {}).length > 0 ? { [import_shared2.EXCLUDE_FROM_FORWARD_PROPS_KEYS]: Object.keys((_b = copilotConfig["body"]) != null ? _b : {}) } : {}), body ? __spreadValues({}, body) : {})),
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
    const events = yield (0, import_shared2.decodeChatCompletion)((0, import_shared2.parseChatCompletion)(response.body));
    return __spreadProps(__spreadValues({}, response), { events });
  });
}
function fetchAndDecodeChatCompletionAsText(params) {
  return __async(this, null, function* () {
    const response = yield fetchChatCompletion(params);
    if (!response.ok || !response.body) {
      return __spreadProps(__spreadValues({}, response), { events: null });
    }
    const events = yield (0, import_shared2.decodeChatCompletionAsText)(
      (0, import_shared2.decodeChatCompletion)((0, import_shared2.parseChatCompletion)(response.body))
    );
    return __spreadProps(__spreadValues({}, response), { events });
  });
}

// src/hooks/use-chat.ts
function useChat(options) {
  const [messages, setMessages] = (0, import_react5.useState)([]);
  const [input, setInput] = (0, import_react5.useState)("");
  const [isLoading, setIsLoading] = (0, import_react5.useState)(false);
  const abortControllerRef = (0, import_react5.useRef)();
  const runChatCompletion = (messages2) => __async(this, null, function* () {
    setIsLoading(true);
    const newMessages = [
      {
        id: (0, import_nanoid3.nanoid)(),
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
              id: (0, import_nanoid3.nanoid)(),
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
            id: (0, import_nanoid3.nanoid)(),
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
              id: (0, import_nanoid3.nanoid)(),
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
                id: (0, import_nanoid3.nanoid)(),
                role: "function",
                content: (0, import_shared3.encodeResult)(result),
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
  } = (0, import_react6.useContext)(CopilotContext);
  const systemMessage = (0, import_react6.useMemo)(() => {
    const systemMessageMaker = makeSystemMessage || defaultSystemMessage;
    const contextString = getContextString([], defaultCopilotContextCategories);
    return {
      id: "system",
      content: systemMessageMaker(contextString, additionalInstructions),
      role: "system"
    };
  }, [getContextString, makeSystemMessage]);
  const functionDescriptions = (0, import_react6.useMemo)(() => {
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

// src/hooks/use-make-copilot-actionable.ts
var import_react7 = require("react");
var import_nanoid4 = require("nanoid");
function useMakeCopilotActionable(annotatedFunction, dependencies) {
  const idRef = (0, import_react7.useRef)((0, import_nanoid4.nanoid)());
  const { setEntryPoint, removeEntryPoint } = (0, import_react7.useContext)(CopilotContext);
  const memoizedAnnotatedFunction = (0, import_react7.useMemo)(
    () => ({
      name: annotatedFunction.name,
      description: annotatedFunction.description,
      argumentAnnotations: annotatedFunction.argumentAnnotations,
      implementation: annotatedFunction.implementation
    }),
    dependencies
  );
  (0, import_react7.useEffect)(() => {
    setEntryPoint(idRef.current, memoizedAnnotatedFunction);
    return () => {
      removeEntryPoint(idRef.current);
    };
  }, [memoizedAnnotatedFunction, setEntryPoint, removeEntryPoint]);
}

// src/hooks/use-make-copilot-readable.ts
var import_react8 = require("react");
function useMakeCopilotReadable(information, parentId, categories) {
  const { addContext, removeContext } = (0, import_react8.useContext)(CopilotContext);
  const idRef = (0, import_react8.useRef)();
  (0, import_react8.useEffect)(() => {
    const id = addContext(information, parentId, categories);
    idRef.current = id;
    return () => {
      removeContext(id);
    };
  }, [information, parentId, addContext, removeContext]);
  return idRef.current;
}

// src/hooks/use-make-copilot-document-readable.ts
var import_react9 = require("react");
function useMakeCopilotDocumentReadable(document, categories, dependencies = []) {
  const { addDocumentContext, removeDocumentContext } = (0, import_react9.useContext)(CopilotContext);
  const idRef = (0, import_react9.useRef)();
  (0, import_react9.useEffect)(() => {
    const id = addDocumentContext(document, categories);
    idRef.current = id;
    return () => {
      removeDocumentContext(id);
    };
  }, [addDocumentContext, removeDocumentContext, ...dependencies]);
  return idRef.current;
}

// src/openai-assistants/hooks/use-copilot-chat-v2.ts
var import_react10 = require("react");

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
var import_shared4 = require("@copilotkit/shared");
function useCopilotChatV2(options) {
  const {
    getContextString,
    getChatCompletionFunctionDescriptions,
    getFunctionCallHandler,
    copilotApiConfig
  } = (0, import_react10.useContext)(CopilotContext);
  const [messages, setMessages] = (0, import_react10.useState)([]);
  const [input, setInput] = (0, import_react10.useState)("");
  const [threadId, setThreadId] = (0, import_react10.useState)(void 0);
  const [status, setStatus] = (0, import_react10.useState)("awaiting_message");
  const [error, setError] = (0, import_react10.useState)(void 0);
  const systemMessage = (0, import_react10.useMemo)(() => {
    const systemMessageMaker = options.makeSystemMessage || defaultSystemMessage2;
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
        const { type, value } = (0, import_shared4.parseStreamPart)(message);
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
function defaultSystemMessage2(contextString) {
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

// src/lib/copilot-task.ts
var CopilotTask = class {
  constructor(config) {
    this.instructions = config.instructions;
    this.functions = config.actions || [];
    this.includeCopilotReadable = config.includeCopilotReadable || true;
    this.includeCopilotActionable = config.includeCopilotActionable || true;
  }
  run(context, data) {
    return __async(this, null, function* () {
      const entryPoints = this.includeCopilotActionable ? Object.assign({}, context.entryPoints) : {};
      for (const fn of this.functions) {
        entryPoints[fn.name] = fn;
      }
      let contextString = "";
      if (data) {
        contextString = (typeof data === "string" ? data : JSON.stringify(data)) + "\n\n";
      }
      if (this.includeCopilotReadable) {
        contextString += context.getContextString([], defaultCopilotContextCategories);
      }
      const systemMessage = {
        id: "system",
        content: taskSystemMessage(contextString, this.instructions),
        role: "system"
      };
      const messages = [systemMessage];
      const response = yield fetchAndDecodeChatCompletion({
        copilotConfig: context.copilotApiConfig,
        messages,
        tools: context.getChatCompletionFunctionDescriptions(entryPoints),
        headers: context.copilotApiConfig.headers,
        body: context.copilotApiConfig.body
      });
      if (!response.events) {
        throw new Error("Failed to execute task");
      }
      const reader = response.events.getReader();
      let functionCalls = [];
      while (true) {
        const { done, value } = yield reader.read();
        if (done) {
          break;
        }
        if (value.type === "function") {
          functionCalls.push({
            name: value.name,
            arguments: JSON.stringify(value.arguments)
          });
          break;
        }
      }
      if (!functionCalls.length) {
        throw new Error("No function call occurred");
      }
      const functionCallHandler = context.getFunctionCallHandler(entryPoints);
      for (const functionCall of functionCalls) {
        yield functionCallHandler(messages, functionCall);
      }
    });
  }
};
function taskSystemMessage(contextString, instructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with functions you can call to initiate actions on their behalf.

Please assist them as best you can.

This is not a conversation, so please do not ask questions. Just call a function without saying anything else.

The user has given you the following task to complete:

\`\`\`
${instructions}
\`\`\`
`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CopilotContext,
  CopilotKit,
  CopilotTask,
  defaultCopilotContextCategories,
  fetchAndDecodeChatCompletion,
  fetchAndDecodeChatCompletionAsText,
  fetchChatCompletion,
  processMessageStream,
  useCopilotChat,
  useCopilotChatV2,
  useCopilotContext,
  useMakeCopilotActionable,
  useMakeCopilotDocumentReadable,
  useMakeCopilotReadable
});
//# sourceMappingURL=index.js.map