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

// src/utils/decode-chat-completion.ts
var decode_chat_completion_exports = {};
__export(decode_chat_completion_exports, {
  decodeChatCompletion: () => decodeChatCompletion
});
module.exports = __toCommonJS(decode_chat_completion_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  decodeChatCompletion
});
//# sourceMappingURL=decode-chat-completion.js.map