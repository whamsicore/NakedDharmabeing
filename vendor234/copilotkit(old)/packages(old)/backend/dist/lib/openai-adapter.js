"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/openai-adapter.ts
var openai_adapter_exports = {};
__export(openai_adapter_exports, {
  OpenAIAdapter: () => OpenAIAdapter
});
module.exports = __toCommonJS(openai_adapter_exports);
var import_openai = __toESM(require("openai"));

// src/utils/openai.ts
var import_shared = require("@copilotkit/shared");
function limitOpenAIMessagesToTokenCount(messages, tools, maxTokens) {
  const result = [];
  const toolsNumTokens = countToolsTokens(tools);
  if (toolsNumTokens > maxTokens) {
    throw new Error(`Too many tokens in function definitions: ${toolsNumTokens} > ${maxTokens}`);
  }
  maxTokens -= toolsNumTokens;
  for (const message of messages) {
    if (message.role === "system") {
      const numTokens = countMessageTokens(message);
      maxTokens -= numTokens;
      if (maxTokens < 0) {
        throw new Error("Not enough tokens for system message.");
      }
    }
  }
  let cutoff = false;
  const reversedMessages = [...messages].reverse();
  for (const message of reversedMessages) {
    if (message.role === "system") {
      result.unshift(message);
      continue;
    } else if (cutoff) {
      continue;
    }
    let numTokens = countMessageTokens(message);
    if (maxTokens < numTokens) {
      cutoff = true;
      continue;
    }
    result.unshift(message);
    maxTokens -= numTokens;
  }
  return result;
}
function maxTokensForOpenAIModel(model) {
  return maxTokensByModel[model] || DEFAULT_MAX_TOKENS;
}
var DEFAULT_MAX_TOKENS = 8192;
var maxTokensByModel = {
  "gpt-3.5-turbo": 4097,
  "gpt-3.5-turbo-16k": 16385,
  "gpt-4": 8192,
  "gpt-4-1106-preview": 8192,
  "gpt-4-32k": 32768,
  "gpt-3.5-turbo-0301": 4097,
  "gpt-4-0314": 8192,
  "gpt-4-32k-0314": 32768,
  "gpt-3.5-turbo-0613": 4097,
  "gpt-4-0613": 8192,
  "gpt-4-32k-0613": 32768,
  "gpt-3.5-turbo-16k-0613": 16385
};
function countToolsTokens(functions) {
  if (functions.length === 0) {
    return 0;
  }
  const json = JSON.stringify(functions);
  return countTokens(json);
}
function countMessageTokens(message) {
  if (message.content) {
    return countTokens(message.content);
  } else if (message.function_call) {
    return countTokens(JSON.stringify(message.function_call));
  }
  return 0;
}
function countTokens(text) {
  return text.length / 3;
}

// src/lib/openai-adapter.ts
var DEFAULT_MODEL = "gpt-4-1106-preview";
var OpenAIAdapter = class {
  constructor(params) {
    this.model = DEFAULT_MODEL;
    this.openai = (params == null ? void 0 : params.openai) || new import_openai.default({});
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OpenAIAdapter
});
//# sourceMappingURL=openai-adapter.js.map