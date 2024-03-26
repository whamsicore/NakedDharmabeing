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

// src/types/autosuggestions-config/autosuggestions-config.tsx
var autosuggestions_config_exports = {};
__export(autosuggestions_config_exports, {
  defaultAutosuggestionsConfig: () => defaultAutosuggestionsConfig
});
module.exports = __toCommonJS(autosuggestions_config_exports);

// src/types/base/base-autosuggestions-config.tsx
var import_react_core = require("@copilotkit/react-core");
var defaultShouldToggleHoveringEditorOnKeyPress = (event, shortcut) => {
  if (event.key === shortcut && event.metaKey) {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnKeyPress = (event) => {
  if (event.key === "Tab") {
    return true;
  }
  return false;
};
var defaultBaseAutosuggestionsConfig = {
  debounceTime: 250,
  contextCategories: import_react_core.defaultCopilotContextCategories,
  disableWhenEmpty: true,
  disabled: false,
  temporarilyDisableWhenMovingCursorWithoutChangingText: true,
  shouldToggleHoveringEditorOnKeyPress: defaultShouldToggleHoveringEditorOnKeyPress,
  shouldAcceptAutosuggestionOnKeyPress: defaultShouldAcceptAutosuggestionOnKeyPress
};

// src/types/autosuggestions-config/suggestions-api-config.tsx
var defaultSuggestionsMakeSystemPrompt = (textareaPurpose, contextString) => {
  return `You are a versatile writing assistant.
  
The user is writing some text.
The purpose is: "${textareaPurpose}"

Your job is to guess what the user will write next AS BEST YOU CAN.
Only guess a SHORT distance ahead. Usually 1 sentence, or at most 1 paragraph.

Adjust yourself to the user's style and implied intent.

The user will provide both the text before and after the cursor. You should use this to infer what the user is likely to write next.
<TextAfterCursor>
<TextBeforeCursor>
<YourSuggestion>

If we need to add a whitespace character to the suggested text, make sure to explicitly add it in.

The following external context is also provided. Use it to help you make better suggestions!!!
\`\`\`
${contextString}
\`\`\`
`;
};
var defaultSuggestionsFewShotMessages = [
  {
    role: "user",
    name: "TextAfterCursor",
    content: "While I was there I also picked up some apples, oranges, and bananas."
  },
  {
    role: "user",
    content: "This morning I woke up and went straight to the grocery store."
  },
  {
    role: "assistant",
    content: " When I arrived I went straight to the produce section and picked out a big watermelon. "
  },
  {
    role: "user",
    name: "TextAfterCursor",
    content: "and (iii) to the appointment of the Equityholders' Representative pursuant to Section 10.7 of the Merger Agreement and to the provisions thereof."
  },
  {
    role: "user",
    name: "TextBeforeCursor",
    content: `The Optionholder, in the Optionholder's capacity as a holder of vested Options, hereby irrevocably and unconditionally agrees: (i) that the Optionholder shall be deemed an "Equityholder" under the Merger Agreement and shall be entitled to the rights and benefits, and subject to the obligations, of an "Equityholder" thereunder;`
  },
  {
    role: "assistant",
    content: ` (ii) that, for purposes of this Agreement and the Merger Agreement, the applicable percentage set forth opposite the name of the Optionholder in the Distribution Waterfall shall be such the Optionholder's "Pro Rata Share"; `
  }
];
var defaultSuggestionsApiConfig = {
  makeSystemPrompt: defaultSuggestionsMakeSystemPrompt,
  fewShotMessages: defaultSuggestionsFewShotMessages,
  forwardedParams: void 0
};

// src/types/autosuggestions-config/insertions-api-config.tsx
var defaultInsertionsMakeSystemPrompt = (textareaPurpose, contextString) => {
  return `You are a versatile writing assistant helping the user insert new text into their existing work.
  
The user is writing some text.
The purpose is: "${textareaPurpose}"

The following external context is also provided. Use it to inform your suggestions when relevant!!!
\`\`\`
${contextString}
\`\`\`

The user will provide you with a prompt for an INSERTION into the text they are writing. 
Your job is to come up with an INSERTION into the text that the user would like to use, AS BEST YOU CAN.
Only insert a SHORT segment. Usually 1 sentence, or at most 1 paragraph.

Adjust yourself to the user's style and implied intent.


The user will provide the text before and after the cursor, as well as the INSERTION prompt. You should use this to infer the best relevant insertion.
The conversation will be structured as follows:
<TextAfterCursor>
<TextBeforeCursor>
<InsertionPrompt>

<YourInsertionSuggestion>
`;
};
var defaultInsertionsFewShotMessages = [
  {
    role: "user",
    name: "TextAfterCursor",
    content: "While I was there I also picked up some apples, oranges, and bananas."
  },
  {
    role: "user",
    name: "TextBeforeCursor",
    content: "This morning I woke up and went straight to the grocery store."
  },
  {
    role: "user",
    name: "InsertionPrompt",
    content: "I bought a big watermelon"
  },
  {
    role: "assistant",
    content: " When I arrived I went straight to the produce section and picked out a big watermelon. "
  },
  {
    role: "user",
    name: "TextAfterCursor",
    content: "and (iii) to the appointment of the Equityholders' Representative pursuant to Section 10.7 of the Merger Agreement and to the provisions thereof."
  },
  {
    role: "user",
    name: "TextBeforeCursor",
    content: `The Optionholder, in the Optionholder's capacity as a holder of vested Options, hereby irrevocably and unconditionally agrees: (i) that the Optionholder shall be deemed an "Equityholder" under the Merger Agreement and shall be entitled to the rights and benefits, and subject to the obligations, of an "Equityholder" thereunder;`
  },
  {
    role: "user",
    name: "InsertionPrompt",
    content: "add section about the optionholder's pro rata share"
  },
  {
    role: "assistant",
    content: ` (ii) that, for purposes of this Agreement and the Merger Agreement, the applicable percentage set forth opposite the name of the Optionholder in the Distribution Waterfall shall be such the Optionholder's "Pro Rata Share"; `
  }
];
var defaultInsertionsApiConfig = {
  makeSystemPrompt: defaultInsertionsMakeSystemPrompt,
  fewShotMessages: defaultInsertionsFewShotMessages,
  forwardedParams: void 0
};

// src/types/autosuggestions-config/editing-api-config.tsx
var defaultEditingMakeSystemPrompt = (textareaPurpose, contextString) => {
  return `You are a versatile writing assistant helping the user edit a portion of their text.
  
The user is writing some text.
The purpose is: "${textareaPurpose}"

The following external context is also provided. Use it when relevant.
\`\`\`
${contextString}
\`\`\`

The user has provided you with a PROMPT for EDITING a PORTION of the text. 
Your job is to come up with a new EDITED version OF THE SEGMENT IN QUESTION - AS BEST YOU CAN.
Only rewrite the portion of the text that the user has marked as "TextToEdit"!!!

Adjust yourself to the user's style and implied intent.

The conversation will be structured as follows:
<TextBeforeCursor>
<TextToEdit>
<TextAfterCursor>
<EditingPrompt>

<YourEditSuggestion>
`;
};
var defaultEditingFewShotMessages = [
  {
    role: "user",
    name: "TextBeforeCursor",
    content: "This morning I woke up and went straight to the grocery store. "
  },
  {
    role: "user",
    name: "TextToEdit",
    content: "While I was there I picked up some apples, oranges, and bananas. "
  },
  {
    role: "user",
    name: "TextAfterCursor",
    content: "The grocery store was having a sale on fruit, so I decided to stock up."
  },
  {
    role: "user",
    name: "EditingPrompt",
    content: "I also bought a big watermelon"
  },
  {
    role: "assistant",
    content: "While I was there I picked up some apples, oranges, and bananas, and a big watermelon."
  },
  {
    role: "user",
    name: "TextBeforeCursor",
    content: "Yesterday, I spent the afternoon working on my new project. "
  },
  {
    role: "user",
    name: "TextToEdit",
    content: "It's quite challenging and requires a lot of focus. "
  },
  {
    role: "user",
    name: "TextAfterCursor",
    content: "I'm really excited about the potential outcomes of this project."
  },
  {
    role: "user",
    name: "EditingPrompt",
    content: "emphasize the complexity and my enthusiasm for the project"
  },
  {
    role: "assistant",
    content: "It's a highly complex task that demands intense concentration, but I'm incredibly enthusiastic about the promising prospects of this project."
  }
];
var defaultEditingApiConfig = {
  makeSystemPrompt: defaultEditingMakeSystemPrompt,
  fewShotMessages: defaultEditingFewShotMessages,
  forwardedParams: void 0
};

// src/types/autosuggestions-config/autosuggestions-config.tsx
var import_react_core2 = require("@copilotkit/react-core");
var defaultAutosuggestionsConfig = __spreadProps(__spreadValues({}, defaultBaseAutosuggestionsConfig), {
  contextCategories: import_react_core2.defaultCopilotContextCategories,
  chatApiConfigs: {
    suggestionsApiConfig: defaultSuggestionsApiConfig,
    insertionApiConfig: defaultInsertionsApiConfig,
    editingApiConfig: defaultEditingApiConfig
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultAutosuggestionsConfig
});
//# sourceMappingURL=autosuggestions-config.js.map