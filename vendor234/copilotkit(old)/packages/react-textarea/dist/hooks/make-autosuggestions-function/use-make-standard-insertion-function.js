"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/hooks/make-autosuggestions-function/use-make-standard-insertion-function.tsx
var use_make_standard_insertion_function_exports = {};
__export(use_make_standard_insertion_function_exports, {
  useMakeStandardInsertionOrEditingFunction: () => useMakeStandardInsertionOrEditingFunction
});
module.exports = __toCommonJS(use_make_standard_insertion_function_exports);
var import_react_core = require("@copilotkit/react-core");
var import_react = require("react");

// src/lib/retry.tsx
function retry(fn, retriesLeft = 2, interval = 200, backoff = 1.5) {
  return new Promise((resolve, reject) => {
    fn().then(resolve).catch((error) => {
      if (retriesLeft === 1) {
        reject(error);
        return;
      }
      setTimeout(() => {
        retry(fn, retriesLeft - 1, interval * backoff, backoff).then(resolve).catch(reject);
      }, interval);
    });
  });
}

// src/hooks/make-autosuggestions-function/use-make-standard-insertion-function.tsx
var import_react_core2 = require("@copilotkit/react-core");
function useMakeStandardInsertionOrEditingFunction(textareaPurpose, contextCategories, insertionApiConfig, editingApiConfig) {
  const { getContextString, copilotApiConfig } = (0, import_react.useContext)(import_react_core.CopilotContext);
  const insertionFunction = (0, import_react.useCallback)(
    (editorState, insertionPrompt, documents, abortSignal) => __async(this, null, function* () {
      const res = yield retry(() => __async(this, null, function* () {
        const messages = [
          {
            role: "system",
            content: insertionApiConfig.makeSystemPrompt(
              textareaPurpose,
              getContextString(documents, contextCategories)
            )
          },
          ...insertionApiConfig.fewShotMessages,
          {
            role: "user",
            name: "TextAfterCursor",
            content: editorState.textAfterCursor
          },
          {
            role: "user",
            name: "TextBeforeCursor",
            content: editorState.textBeforeCursor
          },
          {
            role: "user",
            name: "InsertionPrompt",
            content: insertionPrompt
          }
        ];
        const stream = yield (0, import_react_core2.fetchAndDecodeChatCompletionAsText)(__spreadProps(__spreadValues({
          messages
        }, insertionApiConfig.forwardedParams), {
          copilotConfig: copilotApiConfig,
          signal: abortSignal
        }));
        return stream.events;
      }));
      return res;
    }),
    [insertionApiConfig, getContextString, contextCategories, textareaPurpose]
  );
  const editingFunction = (0, import_react.useCallback)(
    (editorState, editingPrompt, documents, abortSignal) => __async(this, null, function* () {
      const res = yield retry(() => __async(this, null, function* () {
        const messages = [
          {
            role: "system",
            content: editingApiConfig.makeSystemPrompt(
              textareaPurpose,
              getContextString(documents, contextCategories)
            )
          },
          ...editingApiConfig.fewShotMessages,
          {
            role: "user",
            name: "TextBeforeCursor",
            content: editorState.textBeforeCursor
          },
          {
            role: "user",
            name: "TextToEdit",
            content: editorState.selectedText
          },
          {
            role: "user",
            name: "TextAfterCursor",
            content: editorState.textAfterCursor
          },
          {
            role: "user",
            name: "EditingPrompt",
            content: editingPrompt
          }
        ];
        const stream = yield (0, import_react_core2.fetchAndDecodeChatCompletionAsText)(__spreadProps(__spreadValues({
          messages
        }, editingApiConfig.forwardedParams), {
          copilotConfig: copilotApiConfig,
          signal: abortSignal
        }));
        return stream.events;
      }));
      return res;
    }),
    [editingApiConfig, getContextString, contextCategories, textareaPurpose]
  );
  const insertionOrEditingFunction = (0, import_react.useCallback)(
    (editorState, insertionPrompt, documents, abortSignal) => __async(this, null, function* () {
      if (editorState.selectedText === "") {
        return yield insertionFunction(editorState, insertionPrompt, documents, abortSignal);
      } else {
        return yield editingFunction(editorState, insertionPrompt, documents, abortSignal);
      }
    }),
    [insertionFunction, editingFunction]
  );
  return insertionOrEditingFunction;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useMakeStandardInsertionOrEditingFunction
});
//# sourceMappingURL=use-make-standard-insertion-function.js.map