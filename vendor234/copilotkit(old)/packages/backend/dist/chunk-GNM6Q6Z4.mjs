import {
  limitOpenAIMessagesToTokenCount,
  maxTokensForOpenAIModel
} from "./chunk-TZBGHIVS.mjs";

// src/lib/openai-adapter.ts
import OpenAI from "openai";
var DEFAULT_MODEL = "gpt-4-1106-preview";
var OpenAIAdapter = class {
  constructor(params) {
    this.model = DEFAULT_MODEL;
    this.openai = (params == null ? void 0 : params.openai) || new OpenAI({});
    if (params == null ? void 0 : params.model) {
      this.model = params.model;
    }
  }
  stream(forwardedProps) {
    forwardedProps = { ...forwardedProps };
    if (forwardedProps.tools && forwardedProps.tools.length === 0) {
      delete forwardedProps.tools;
    }
    const messages = limitOpenAIMessagesToTokenCount(
      forwardedProps.messages || [],
      forwardedProps.tools || [],
      maxTokensForOpenAIModel(forwardedProps.model || DEFAULT_MODEL)
    );
    return this.openai.beta.chat.completions.stream({
      model: this.model,
      ...forwardedProps,
      stream: true,
      messages
    }).toReadableStream();
  }
};

export {
  OpenAIAdapter
};
//# sourceMappingURL=chunk-GNM6Q6Z4.mjs.map