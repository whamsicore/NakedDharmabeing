import {
  StandardCopilotApiConfig
} from "./chunk-F2JIAPZQ.mjs";
import {
  use_tree_default
} from "./chunk-VUY2K2DI.mjs";
import {
  CopilotContext
} from "./chunk-S7ZVOTYK.mjs";
import {
  use_flat_category_store_default
} from "./chunk-YULKJPY3.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/copilot-provider/copilotkit.tsx
import { useCallback, useState } from "react";
import {
  annotatedFunctionToChatCompletionFunction
} from "@copilotkit/shared";
import { jsx } from "react/jsx-runtime";
function CopilotKit(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [entryPoints, setEntryPoints] = useState({});
  const { addElement, removeElement, printTree } = use_tree_default();
  const {
    addElement: addDocument,
    removeElement: removeDocument,
    allElements: allDocuments
  } = use_flat_category_store_default();
  const setEntryPoint = useCallback((id, entryPoint) => {
    setEntryPoints((prevPoints) => {
      return __spreadProps(__spreadValues({}, prevPoints), {
        [id]: entryPoint
      });
    });
  }, []);
  const removeEntryPoint = useCallback((id) => {
    setEntryPoints((prevPoints) => {
      const newPoints = __spreadValues({}, prevPoints);
      delete newPoints[id];
      return newPoints;
    });
  }, []);
  const getContextString = useCallback(
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
  const addContext = useCallback(
    (context, parentId, categories = defaultCopilotContextCategories) => {
      return addElement(context, categories, parentId);
    },
    [addElement]
  );
  const removeContext = useCallback(
    (id) => {
      removeElement(id);
    },
    [removeElement]
  );
  const getChatCompletionFunctionDescriptions = useCallback(
    (customEntryPoints) => {
      return entryPointsToChatCompletionFunctions(Object.values(customEntryPoints || entryPoints));
    },
    [entryPoints]
  );
  const getFunctionCallHandler = useCallback(
    (customEntryPoints) => {
      return entryPointsToFunctionCallHandler(Object.values(customEntryPoints || entryPoints));
    },
    [entryPoints]
  );
  const getDocumentsContext = useCallback(
    (categories) => {
      return allDocuments(categories);
    },
    [allDocuments]
  );
  const addDocumentContext = useCallback(
    (documentPointer, categories = defaultCopilotContextCategories) => {
      return addDocument(documentPointer, categories);
    },
    [addDocument]
  );
  const removeDocumentContext = useCallback(
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
  return /* @__PURE__ */ jsx(
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
  return entryPoints.map(annotatedFunctionToChatCompletionFunction);
}

export {
  CopilotKit,
  defaultCopilotContextCategories
};
//# sourceMappingURL=chunk-PHK2K7UB.mjs.map