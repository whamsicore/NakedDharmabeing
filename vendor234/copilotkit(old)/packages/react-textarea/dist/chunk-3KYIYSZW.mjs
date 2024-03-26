import {
  useMakeStandardAutosuggestionFunction
} from "./chunk-RT4UTBH3.mjs";
import {
  useMakeStandardInsertionOrEditingFunction
} from "./chunk-QCPS6IYI.mjs";
import {
  defaultAutosuggestionsConfig
} from "./chunk-DKE57EAC.mjs";
import {
  BaseCopilotTextarea
} from "./chunk-ALIPIID3.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/copilot-textarea/copilot-textarea.tsx
import React from "react";
import merge from "lodash.merge";
import { Fragment, jsx } from "react/jsx-runtime";
var CopilotTextarea = React.forwardRef(
  (props, ref) => {
    const _a = props, { autosuggestionsConfig: autosuggestionsConfigUserSpecified } = _a, forwardedProps = __objRest(_a, ["autosuggestionsConfig"]);
    const autosuggestionsConfig = merge(
      defaultAutosuggestionsConfig,
      autosuggestionsConfigUserSpecified
    );
    const autosuggestionsFunction = useMakeStandardAutosuggestionFunction(
      autosuggestionsConfig.textareaPurpose,
      autosuggestionsConfig.contextCategories,
      autosuggestionsConfig.chatApiConfigs.suggestionsApiConfig
    );
    const insertionOrEditingFunction = useMakeStandardInsertionOrEditingFunction(
      autosuggestionsConfig.textareaPurpose,
      autosuggestionsConfig.contextCategories,
      autosuggestionsConfig.chatApiConfigs.insertionApiConfig,
      autosuggestionsConfig.chatApiConfigs.editingApiConfig
    );
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      BaseCopilotTextarea,
      __spreadProps(__spreadValues({
        ref
      }, forwardedProps), {
        baseAutosuggestionsConfig: __spreadProps(__spreadValues({}, autosuggestionsConfig), {
          apiConfig: {
            insertionOrEditingFunction,
            autosuggestionsFunction
          }
        })
      })
    ) });
  }
);

export {
  CopilotTextarea
};
//# sourceMappingURL=chunk-3KYIYSZW.mjs.map