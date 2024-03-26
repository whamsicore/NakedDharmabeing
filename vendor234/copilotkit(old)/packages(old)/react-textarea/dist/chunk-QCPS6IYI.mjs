import {
  retry
} from "./chunk-KNQIEOFP.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/make-autosuggestions-function/use-make-standard-insertion-function.tsx
import { CopilotContext } from "@copilotkit/react-core";
import { useCallback, useContext } from "react";
import { fetchAndDecodeChatCompletionAsText } from "@copilotkit/react-core";
function useMakeStandardInsertionOrEditingFunction(textareaPurpose, contextCategories, insertionApiConfig, editingApiConfig) {
  const { getContextString, copilotApiConfig } = useContext(CopilotContext);
  const insertionFunction = useCallback(
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
        const stream = yield fetchAndDecodeChatCompletionAsText(__spreadProps(__spreadValues({
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
  const editingFunction = useCallback(
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
        const stream = yield fetchAndDecodeChatCompletionAsText(__spreadProps(__spreadValues({
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
  const insertionOrEditingFunction = useCallback(
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

export {
  useMakeStandardInsertionOrEditingFunction
};
//# sourceMappingURL=chunk-QCPS6IYI.mjs.map