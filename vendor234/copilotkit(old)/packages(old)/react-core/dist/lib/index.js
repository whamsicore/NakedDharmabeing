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

// src/lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  CopilotTask: () => CopilotTask
});
module.exports = __toCommonJS(lib_exports);

// src/components/copilot-provider/copilotkit.tsx
var import_react = require("react");
var import_shared = require("@copilotkit/shared");
var import_jsx_runtime = require("react/jsx-runtime");
var defaultCopilotContextCategories = ["global"];

// src/utils/fetch-chat-completion.ts
var import_shared2 = require("@copilotkit/shared");
function fetchChatCompletion(_0) {
  return __async(this, arguments, function* ({
    copilotConfig,
    model,
    messages,
    tools,
    temperature,
    headers,
    body,
    signal
  }) {
    var _a, _b;
    temperature || (temperature = 0.5);
    tools || (tools = []);
    const cleanedMessages = messages.map((message) => {
      const { content, role, name, function_call } = message;
      return { content, role, name, function_call };
    });
    const response = yield fetch(copilotConfig.chatApiEndpoint, {
      method: "POST",
      headers: __spreadValues(__spreadValues({
        "Content-Type": "application/json"
      }, copilotConfig.headers), headers ? __spreadValues({}, headers) : {}),
      body: JSON.stringify(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
        model,
        messages: cleanedMessages,
        stream: true
      }, tools.length ? { tools } : {}), temperature ? { temperature } : {}), tools.length != 0 ? { tool_choice: "auto" } : {}), copilotConfig.body), copilotConfig.backendOnlyProps), Object.keys((_a = copilotConfig["body"]) != null ? _a : {}).length > 0 ? { [import_shared2.EXCLUDE_FROM_FORWARD_PROPS_KEYS]: Object.keys((_b = copilotConfig["body"]) != null ? _b : {}) } : {}), body ? __spreadValues({}, body) : {})),
      signal
    });
    return response;
  });
}
function fetchAndDecodeChatCompletion(params) {
  return __async(this, null, function* () {
    const response = yield fetchChatCompletion(params);
    if (!response.ok || !response.body) {
      return __spreadProps(__spreadValues({}, response), { events: null });
    }
    const events = yield (0, import_shared2.decodeChatCompletion)((0, import_shared2.parseChatCompletion)(response.body));
    return __spreadProps(__spreadValues({}, response), { events });
  });
}

// src/lib/copilot-task.ts
var CopilotTask = class {
  constructor(config) {
    this.instructions = config.instructions;
    this.functions = config.actions || [];
    this.includeCopilotReadable = config.includeCopilotReadable || true;
    this.includeCopilotActionable = config.includeCopilotActionable || true;
  }
  run(context, data) {
    return __async(this, null, function* () {
      const entryPoints = this.includeCopilotActionable ? Object.assign({}, context.entryPoints) : {};
      for (const fn of this.functions) {
        entryPoints[fn.name] = fn;
      }
      let contextString = "";
      if (data) {
        contextString = (typeof data === "string" ? data : JSON.stringify(data)) + "\n\n";
      }
      if (this.includeCopilotReadable) {
        contextString += context.getContextString([], defaultCopilotContextCategories);
      }
      const systemMessage = {
        id: "system",
        content: taskSystemMessage(contextString, this.instructions),
        role: "system"
      };
      const messages = [systemMessage];
      const response = yield fetchAndDecodeChatCompletion({
        copilotConfig: context.copilotApiConfig,
        messages,
        tools: context.getChatCompletionFunctionDescriptions(entryPoints),
        headers: context.copilotApiConfig.headers,
        body: context.copilotApiConfig.body
      });
      if (!response.events) {
        throw new Error("Failed to execute task");
      }
      const reader = response.events.getReader();
      let functionCalls = [];
      while (true) {
        const { done, value } = yield reader.read();
        if (done) {
          break;
        }
        if (value.type === "function") {
          functionCalls.push({
            name: value.name,
            arguments: JSON.stringify(value.arguments)
          });
          break;
        }
      }
      if (!functionCalls.length) {
        throw new Error("No function call occurred");
      }
      const functionCallHandler = context.getFunctionCallHandler(entryPoints);
      for (const functionCall of functionCalls) {
        yield functionCallHandler(messages, functionCall);
      }
    });
  }
};
function taskSystemMessage(contextString, instructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with functions you can call to initiate actions on their behalf.

Please assist them as best you can.

This is not a conversation, so please do not ask questions. Just call a function without saying anything else.

The user has given you the following task to complete:

\`\`\`
${instructions}
\`\`\`
`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CopilotTask
});
//# sourceMappingURL=index.js.map