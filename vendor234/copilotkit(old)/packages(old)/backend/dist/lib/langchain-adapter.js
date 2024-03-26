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

// src/lib/langchain-adapter.ts
var langchain_adapter_exports = {};
__export(langchain_adapter_exports, {
  LangChainAdapter: () => LangChainAdapter
});
module.exports = __toCommonJS(langchain_adapter_exports);
var import_messages = require("@langchain/core/messages");

// src/utils/openai.ts
var import_shared = require("@copilotkit/shared");
function writeChatCompletionChunk(controller, chunk) {
  const payload = new TextEncoder().encode("data: " + JSON.stringify(chunk) + "\n\n");
  controller.enqueue(payload);
}
function writeChatCompletionEnd(controller) {
  const payload = new TextEncoder().encode("data: [DONE]\n\n");
  controller.enqueue(payload);
}

// src/lib/langchain-adapter.ts
var LangChainAdapter = class {
  constructor(chainFn) {
    this.chainFn = chainFn;
  }
  async stream(forwardedProps) {
    var _a, _b, _c;
    forwardedProps = this.transformProps(forwardedProps);
    const result = await this.chainFn(forwardedProps);
    if (typeof result === "string") {
      return new SingleChunkReadableStream(result);
    } else if ("content" in result && typeof result.content === "string") {
      return new SingleChunkReadableStream(result.content, (_a = result.additional_kwargs) == null ? void 0 : _a.tool_calls);
    } else if ("lc_kwargs" in result) {
      return new SingleChunkReadableStream((_b = result.lc_kwargs) == null ? void 0 : _b.content, (_c = result.lc_kwargs) == null ? void 0 : _c.tool_calls);
    } else if ("getReader" in result) {
      return this.streamResult(result);
    }
    console.error("Invalid return type from LangChain function.");
    throw new Error("Invalid return type from LangChain function.");
  }
  /**
   * Transforms the props that are forwarded to the LangChain function.
   * Currently this just transforms the messages to the format that LangChain expects.
   *
   * @param forwardedProps
   * @returns {any}
   */
  transformProps(forwardedProps) {
    const forwardedPropsCopy = Object.assign({}, forwardedProps);
    if (forwardedProps.messages && Array.isArray(forwardedProps.messages)) {
      const newMessages = [];
      for (const message of forwardedProps.messages) {
        if (message.role === "user") {
          newMessages.push(new import_messages.HumanMessage(message.content));
        } else if (message.role === "assistant") {
          newMessages.push(new import_messages.AIMessage(message.content));
        } else if (message.role === "system") {
          newMessages.push(new import_messages.SystemMessage(message.content));
        }
      }
      forwardedPropsCopy.messages = newMessages;
    }
    return forwardedPropsCopy;
  }
  /**
   * Reads from the LangChainMessageStream and converts the output to a ReadableStream.
   *
   * @param streamedChain
   * @returns ReadableStream
   */
  streamResult(streamedChain) {
    let reader = streamedChain.getReader();
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
        var _a, _b, _c;
        while (true) {
          try {
            const { done, value } = await reader.read();
            if (done) {
              writeChatCompletionEnd(controller);
              await cleanup(controller);
              return;
            }
            const toolCalls = (_b = (_a = value.lc_kwargs) == null ? void 0 : _a.additional_kwargs) == null ? void 0 : _b.tool_calls;
            const content = (_c = value == null ? void 0 : value.lc_kwargs) == null ? void 0 : _c.content;
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
          } catch (error) {
            controller.error(error);
            await cleanup(controller);
            return;
          }
        }
      },
      cancel() {
        cleanup();
      }
    });
  }
};
var SingleChunkReadableStream = class extends ReadableStream {
  constructor(content = "", toolCalls) {
    super({
      start(controller) {
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
        writeChatCompletionEnd(controller);
        controller.close();
      },
      cancel() {
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LangChainAdapter
});
//# sourceMappingURL=langchain-adapter.js.map