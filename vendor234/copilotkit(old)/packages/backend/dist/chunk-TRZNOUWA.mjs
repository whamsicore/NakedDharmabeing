import {
  writeChatCompletionChunk,
  writeChatCompletionContent,
  writeChatCompletionEnd,
  writeChatCompletionResult
} from "./chunk-TZBGHIVS.mjs";

// src/utils/stream.ts
import { parseChatCompletion } from "@copilotkit/shared";
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
  const decodedStream = parseChatCompletion(stream);
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

export {
  copilotkitStreamInterceptor
};
//# sourceMappingURL=chunk-TRZNOUWA.mjs.map