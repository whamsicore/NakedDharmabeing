"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/types/autosuggestions-config/insertions-api-config.tsx
var insertions_api_config_exports = {};
__export(insertions_api_config_exports, {
  defaultInsertionsApiConfig: () => defaultInsertionsApiConfig,
  defaultInsertionsFewShotMessages: () => defaultInsertionsFewShotMessages,
  defaultInsertionsMakeSystemPrompt: () => defaultInsertionsMakeSystemPrompt
});
module.exports = __toCommonJS(insertions_api_config_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultInsertionsApiConfig,
  defaultInsertionsFewShotMessages,
  defaultInsertionsMakeSystemPrompt
});
//# sourceMappingURL=insertions-api-config.js.map