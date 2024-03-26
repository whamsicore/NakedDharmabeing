import {
  retry
} from "./chunk-KNQIEOFP.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/make-autosuggestions-function/use-make-standard-autosuggestions-function.tsx
import { CopilotContext } from "@copilotkit/react-core";
import { useCallback, useContext } from "react";
import { fetchAndDecodeChatCompletionAsText } from "@copilotkit/react-core";
function useMakeStandardAutosuggestionFunction(textareaPurpose, contextCategories, apiConfig) {
  const { getContextString, copilotApiConfig } = useContext(CopilotContext);
  return useCallback(
    (editorState, abortSignal) => __async(this, null, function* () {
      const res = yield retry(() => __async(this, null, function* () {
        const messages = [
          {
            role: "system",
            content: apiConfig.makeSystemPrompt(
              textareaPurpose,
              getContextString([], contextCategories)
            )
          },
          ...apiConfig.fewShotMessages,
          {
            role: "user",
            name: "TextAfterCursor",
            content: editorState.textAfterCursor
          },
          {
            role: "user",
            name: "TextBeforeCursor",
            content: editorState.textBeforeCursor
          }
        ];
        const response = yield fetchAndDecodeChatCompletionAsText(__spreadProps(__spreadValues({
          messages
        }, apiConfig.forwardedParams), {
          copilotConfig: copilotApiConfig,
          signal: abortSignal
        }));
        if (!response.events) {
          throw new Error("Failed to fetch chat completion");
        }
        const reader = response.events.getReader();
        let result = "";
        while (!abortSignal.aborted) {
          const { done, value } = yield reader.read();
          if (done) {
            break;
          }
          result += value;
        }
        return result;
      }));
      return res;
    }),
    [apiConfig, getContextString, contextCategories, textareaPurpose]
  );
}

export {
  useMakeStandardAutosuggestionFunction
};
//# sourceMappingURL=chunk-RT4UTBH3.mjs.map