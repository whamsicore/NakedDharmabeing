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

// src/components/copilot-provider/index.ts
var copilot_provider_exports = {};
__export(copilot_provider_exports, {
  CopilotKit: () => CopilotKit,
  defaultCopilotContextCategories: () => defaultCopilotContextCategories
});
module.exports = __toCommonJS(copilot_provider_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CopilotKit,
  defaultCopilotContextCategories
});
//# sourceMappingURL=index.js.map