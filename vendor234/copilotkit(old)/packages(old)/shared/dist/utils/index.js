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

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  COMPLEX_HEADER: () => COMPLEX_HEADER,
  StreamStringPrefixes: () => StreamStringPrefixes,
  annotatedFunctionToChatCompletionFunction: () => annotatedFunctionToChatCompletionFunction,
  decodeChatCompletion: () => decodeChatCompletion,
  decodeChatCompletionAsText: () => decodeChatCompletionAsText,
  encodeResult: () => encodeResult,
  formatStreamPart: () => formatStreamPart,
  isStreamStringEqualToType: () => isStreamStringEqualToType,
  parseChatCompletion: () => parseChatCompletion,
  parseStreamPart: () => parseStreamPart,
  streamPartsByCode: () => streamPartsByCode,
  validCodes: () => validCodes
});
module.exports = __toCommonJS(utils_exports);

// src/utils/utils.ts
function encodeResult(result) {
  if (result === void 0) {
    return "";
  } else if (typeof result === "string") {
    return result;
  } else {
    return JSON.stringify(result);
  }
}
var textStreamPart = {
  code: "0",
  name: "text",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"text" parts expect a string value.');
    }
    return { type: "text", value };
  }
};
var functionCallStreamPart = {
  code: "1",
  name: "function_call",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("function_call" in value) || typeof value.function_call !== "object" || value.function_call == null || !("name" in value.function_call) || !("arguments" in value.function_call) || typeof value.function_call.name !== "string" || typeof value.function_call.arguments !== "string") {
      throw new Error('"function_call" parts expect an object with a "function_call" property.');
    }
    return {
      type: "function_call",
      value
    };
  }
};
var dataStreamPart = {
  code: "2",
  name: "data",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"data" parts expect an array value.');
    }
    return { type: "data", value };
  }
};
var errorStreamPart = {
  code: "3",
  name: "error",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"error" parts expect a string value.');
    }
    return { type: "error", value };
  }
};
var assistantMessage = {
  code: "4",
  name: "assistant_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every(
      (item) => item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string"
    )) {
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    }
    return {
      type: "assistant_message",
      value
    };
  }
};
var assistantControlData = {
  code: "5",
  name: "assistant_control_data",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    }
    return {
      type: "assistant_control_data",
      value: {
        threadId: value.threadId,
        messageId: value.messageId
      }
    };
  }
};
var streamParts = [
  textStreamPart,
  functionCallStreamPart,
  dataStreamPart,
  errorStreamPart,
  assistantMessage,
  assistantControlData
];
var streamPartsByCode = {
  [textStreamPart.code]: textStreamPart,
  [functionCallStreamPart.code]: functionCallStreamPart,
  [dataStreamPart.code]: dataStreamPart,
  [errorStreamPart.code]: errorStreamPart,
  [assistantMessage.code]: assistantMessage,
  [assistantControlData.code]: assistantControlData
};
var StreamStringPrefixes = {
  [textStreamPart.name]: textStreamPart.code,
  [functionCallStreamPart.name]: functionCallStreamPart.code,
  [dataStreamPart.name]: dataStreamPart.code,
  [errorStreamPart.name]: errorStreamPart.code,
  [assistantMessage.name]: assistantMessage.code,
  [assistantControlData.name]: assistantControlData.code
};
var validCodes = streamParts.map((part) => part.code);
var parseStreamPart = (line) => {
  const firstSeparatorIndex = line.indexOf(":");
  if (firstSeparatorIndex === -1) {
    throw new Error("Failed to parse stream string. No separator found.");
  }
  const prefix = line.slice(0, firstSeparatorIndex);
  if (!validCodes.includes(prefix)) {
    throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
  }
  const code = prefix;
  const textValue = line.slice(firstSeparatorIndex + 1);
  const jsonValue = JSON.parse(textValue);
  return streamPartsByCode[code].parse(jsonValue);
};
function formatStreamPart(type, value) {
  const streamPart = streamParts.find((part) => part.name === type);
  if (!streamPart) {
    throw new Error(`Invalid stream part type: ${type}`);
  }
  return `${streamPart.code}:${JSON.stringify(value)}
`;
}
var isStreamStringEqualToType = (type, value) => value.startsWith(`${StreamStringPrefixes[type]}:`) && value.endsWith("\n");
var COMPLEX_HEADER = "X-Experimental-Stream-Data";

// src/utils/parse-chat-completion.ts
function parseChatCompletion(stream) {
  const reader = stream.getReader();
  let buffer = new Uint8Array();
  async function cleanup(controller) {
    if (controller) {
      try {
        controller.close();
      } catch (_) {
      }
    }
    if (reader) {
      try {
        await reader.cancel();
      } catch (_) {
      }
    }
  }
  return new ReadableStream({
    async pull(controller) {
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            await cleanup(controller);
            return;
          }
          const newBuffer = new Uint8Array(buffer.length + value.length);
          newBuffer.set(buffer);
          newBuffer.set(value, buffer.length);
          buffer = newBuffer;
          const valueString = new TextDecoder("utf-8").decode(buffer);
          const lines = valueString.split("\n").filter((line) => line.trim() !== "");
          buffer = !valueString.endsWith("\n") ? new TextEncoder().encode(lines.pop() || "") : new Uint8Array();
          for (const line of lines) {
            const cleanedLine = line.replace(/^data: /, "");
            if (cleanedLine === "[DONE]") {
              await cleanup(controller);
              return;
            }
            const json = JSON.parse(cleanedLine);
            controller.enqueue(json);
          }
        } catch (error) {
          controller.error(error);
          await cleanup(controller);
          return;
        }
      }
    },
    cancel() {
      reader.cancel();
    }
  });
}

// src/utils/decode-chat-completion.ts
function decodeChatCompletion(stream) {
  const reader = stream.getReader();
  let mode = null;
  let functionCallName = "";
  let functionCallArguments = "";
  let functionCallScope = "client";
  async function cleanup(controller) {
    if (controller) {
      try {
        controller.close();
      } catch (_) {
      }
    }
    if (reader) {
      try {
        await reader.cancel();
      } catch (_) {
      }
    }
  }
  return new ReadableStream({
    async pull(controller) {
      var _a, _b, _c, _d, _e, _f;
      const flushFunctionCall = () => {
        let args = null;
        try {
          args = JSON.parse(functionCallArguments);
        } catch (error) {
          cleanup(controller);
          controller.error(error);
          return false;
        }
        controller.enqueue({
          type: "function",
          name: functionCallName,
          arguments: args,
          scope: functionCallScope
        });
        mode = null;
        functionCallName = "";
        functionCallArguments = "";
        return true;
      };
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            if (mode === "function") {
              flushFunctionCall();
            }
            await cleanup(controller);
            return;
          }
          if (mode === "function" && (!((_b = (_a = value.choices[0].delta.tool_calls) == null ? void 0 : _a[0]) == null ? void 0 : _b.function) || ((_d = (_c = value.choices[0].delta.tool_calls) == null ? void 0 : _c[0]) == null ? void 0 : _d.function.name))) {
            if (!flushFunctionCall()) {
              return;
            }
          }
          mode = ((_f = (_e = value.choices[0].delta.tool_calls) == null ? void 0 : _e[0]) == null ? void 0 : _f.function) ? "function" : "message";
          if (mode === "message") {
            if (value.choices[0].delta.role === "function") {
              controller.enqueue({
                type: "result",
                content: value.choices[0].delta.content,
                name: value.choices[0].delta.name
              });
            } else if (value.choices[0].delta.content) {
              controller.enqueue({
                type: "content",
                content: value.choices[0].delta.content
              });
            }
            continue;
          } else if (mode === "function") {
            if (value.choices[0].delta.tool_calls[0].function.name) {
              functionCallName = value.choices[0].delta.tool_calls[0].function.name;
            }
            if (value.choices[0].delta.tool_calls[0].function.arguments) {
              functionCallArguments += value.choices[0].delta.tool_calls[0].function.arguments;
            }
            if (value.choices[0].delta.tool_calls[0].function.scope) {
              functionCallScope = value.choices[0].delta.tool_calls[0].function.scope;
            }
            controller.enqueue({
              type: "partial",
              name: functionCallName,
              arguments: functionCallArguments
            });
            continue;
          }
        } catch (error) {
          controller.error(error);
          await cleanup(controller);
          return;
        }
      }
    },
    cancel() {
      reader.cancel();
    }
  });
}

// src/utils/decode-chat-completion-as-text.ts
function decodeChatCompletionAsText(stream) {
  const reader = stream.getReader();
  return new ReadableStream({
    async pull(controller) {
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            controller.close();
            return;
          }
          if (value.type === "content") {
            controller.enqueue(value.content);
            continue;
          }
        } catch (error) {
          controller.error(error);
          return;
        }
      }
    },
    cancel() {
      reader.cancel();
    }
  });
}

// src/utils/annotated-function.ts
function annotatedFunctionToChatCompletionFunction(annotatedFunction) {
  let parameters = {};
  for (let arg of annotatedFunction.argumentAnnotations) {
    let { name, required, ...forwardedArgs } = arg;
    parameters[arg.name] = forwardedArgs;
  }
  let requiredParameterNames = [];
  for (let arg of annotatedFunction.argumentAnnotations) {
    if (arg.required) {
      requiredParameterNames.push(arg.name);
    }
  }
  let chatCompletionFunction = {
    type: "function",
    function: {
      name: annotatedFunction.name,
      description: annotatedFunction.description,
      parameters: {
        type: "object",
        properties: parameters,
        required: requiredParameterNames
      }
    }
  };
  return chatCompletionFunction;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COMPLEX_HEADER,
  StreamStringPrefixes,
  annotatedFunctionToChatCompletionFunction,
  decodeChatCompletion,
  decodeChatCompletionAsText,
  encodeResult,
  formatStreamPart,
  isStreamStringEqualToType,
  parseChatCompletion,
  parseStreamPart,
  streamPartsByCode,
  validCodes
});
//# sourceMappingURL=index.js.map