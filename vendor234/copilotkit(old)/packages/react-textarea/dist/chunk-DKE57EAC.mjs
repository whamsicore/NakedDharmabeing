import {
  defaultEditingApiConfig
} from "./chunk-4OJ3H65F.mjs";
import {
  defaultInsertionsApiConfig
} from "./chunk-RKQ6RTZM.mjs";
import {
  defaultSuggestionsApiConfig
} from "./chunk-KDVMG3XF.mjs";
import {
  defaultBaseAutosuggestionsConfig
} from "./chunk-LCDTIJSD.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/types/autosuggestions-config/autosuggestions-config.tsx
import { defaultCopilotContextCategories } from "@copilotkit/react-core";
var defaultAutosuggestionsConfig = __spreadProps(__spreadValues({}, defaultBaseAutosuggestionsConfig), {
  contextCategories: defaultCopilotContextCategories,
  chatApiConfigs: {
    suggestionsApiConfig: defaultSuggestionsApiConfig,
    insertionApiConfig: defaultInsertionsApiConfig,
    editingApiConfig: defaultEditingApiConfig
  }
});

export {
  defaultAutosuggestionsConfig
};
//# sourceMappingURL=chunk-DKE57EAC.mjs.map