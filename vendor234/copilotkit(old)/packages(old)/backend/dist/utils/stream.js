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

// src/utils/stream.ts
var stream_exports = {};
__export(stream_exports, {
  copilotkitStreamInterceptor: () => copilotkitStreamInterceptor
});
module.exports = __toCommonJS(stream_exports);
var import_shared2 = require("@copilotkit/shared");

// src/utils/openai.ts
var import_shared = require("@copilotkit/shared");
function writeChatCompletionChunk(controller, chunk) {
  const payload = new TextEncoder().encode("data: " + JSON.stringify(chunk) + "\n\n");
  controller.enqueue(payload);
}
function writeChatCompletionContent(controller, content = "", toolCalls) {
  const chunk = {
    choices: [
      {
        delta: {
          role: "assistant",
          content,
          ...toolCalls ? { tool_calls: toolCalls } : {}
        }
      }
    ]
  };
  writeChatCompletionChunk(controller, chunk);
}
function writeChatCompletionResult(controller, functionName, result) {
  let resultString = (0, import_shared.encodeResult)(result);
  const chunk = {
    choices: [
      {
        delta: {
          role: "function",
          content: resultString,
          name: functionName
        }
      }
    ]
  };
  writeChatCompletionChunk(controller, chunk);
}
function writeChatCompletionEnd(controller) {
  const payload = new TextEncoder().encode("data: [DONE]\n\n");
  controller.enqueue(payload);
}

// src/utils/stream.ts
async function executeFunctionCall(controller, fun, functionCallArguments) {
  var _a, _b, _c, _d, _e, _f;
  let args = [];
  if (functionCallArguments) {
    args = JSON.parse(functionCallArguments);
  }
  const paramsInCorrectOrder = [];
  for (let arg of fun.argumentAnnotations) {
    paramsInCorrectOrder.push(args[arg.name]);
  }
  const result = await fun.implementation(...paramsInCorrectOrder);
  if (typeof result === "string") {
    writeChatCompletionResult(controller, fun.name, result);
  } else if ("content" in result && typeof result.content === "string") {
    writeChatCompletionContent(controller, result.content, (_a = result.additional_kwargs) == null ? void 0 : _a.tool_calls);
  } else if ("lc_kwargs" in result) {
    writeChatCompletionContent(controller, (_b = result.lc_kwargs) == null ? void 0 : _b.content, (_c = result.lc_kwargs) == null ? void 0 : _c.tool_calls);
  } else if ("getReader" in result) {
    let reader = result.getReader();
    while (true) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        writeChatCompletionContent(
          controller,
          (_d = value == null ? void 0 : value.lc_kwargs) == null ? void 0 : _d.content,
          (_f = (_e = value.lc_kwargs) == null ? void 0 : _e.additional_kwargs) == null ? void 0 : _f.tool_calls
        );
      } catch (error) {
        console.error("Error reading from stream", error);
        break;
      }
    }
  } else {
    writeChatCompletionResult(controller, fun.name, result);
  }
}
function copilotkitStreamInterceptor(stream, functions, debug = false) {
  const functionsByName = functions.reduce((acc, fn) => {
    acc[fn.name] = fn;
    return acc;
  }, {});
  const decodedStream = (0, import_shared2.parseChatCompletion)(stream);
  const reader = decodedStream.getReader();
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
  let executeThisFunctionCall = false;
  let functionCallName = "";
  let functionCallArguments = "";
  let currentFnIndex = 0;
  const flushFunctionCall = async (controller) => {
    const fun = functionsByName[functionCallName];
    await executeFunctionCall(controller, fun, functionCallArguments);
    executeThisFunctionCall = false;
    functionCallName = "";
    functionCallArguments = "";
  };
  return new ReadableStream({
    async pull(controller) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      while (true) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            if (debug) {
              console.log("data: [DONE]\n\n");
            }
            if (executeThisFunctionCall) {
              await flushFunctionCall(controller);
            }
            writeChatCompletionEnd(controller);
            await cleanup(controller);
            return;
          } else if (debug) {
            console.log("data: " + JSON.stringify(value) + "\n\n");
          }
          let mode = value.choices[0].delta.tool_calls ? "function" : "message";
          const index = ((_b = (_a = value.choices[0].delta.tool_calls) == null ? void 0 : _a[0]) == null ? void 0 : _b.index) || 0;
          if (executeThisFunctionCall && (mode != "function" || index != currentFnIndex)) {
            await flushFunctionCall(controller);
          }
          currentFnIndex = index;
          if (mode === "message") {
            if (value.choices[0].delta.content) {
              writeChatCompletionChunk(controller, value);
            }
            continue;
          } else if (mode === "function") {
            if ((_e = (_d = (_c = value.choices[0].delta.tool_calls) == null ? void 0 : _c[0]) == null ? void 0 : _d.function) == null ? void 0 : _e.name) {
              functionCallName = value.choices[0].delta.tool_calls[0].function.name;
            }
            if ((_h = (_g = (_f = value.choices[0].delta.tool_calls) == null ? void 0 : _f[0]) == null ? void 0 : _g.function) == null ? void 0 : _h.arguments) {
              functionCallArguments += value.choices[0].delta.tool_calls[0].function.arguments;
            }
            if (!executeThisFunctionCall) {
              if (functionCallName in functionsByName) {
                executeThisFunctionCall = true;
              }
            }
            if (value.choices[0].delta.tool_calls) {
              value.choices[0].delta.tool_calls[0].function.scope = executeThisFunctionCall ? "server" : "client";
            }
            writeChatCompletionChunk(controller, value);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  copilotkitStreamInterceptor
});
//# sourceMappingURL=stream.js.map