import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/context/copilot-context.tsx
import React from "react";
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
var CopilotContext = React.createContext(emptyCopilotContext);
function useCopilotContext() {
  return React.useContext(CopilotContext);
}
function returnAndThrowInDebug(value) {
  throw new Error("Remember to wrap your app in a `<CopilotKit> {...} </CopilotKit>` !!!");
  return value;
}

export {
  CopilotContext,
  useCopilotContext
};
//# sourceMappingURL=chunk-S7ZVOTYK.mjs.map