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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CopilotBackend: () => CopilotBackend,
  LangChainAdapter: () => LangChainAdapter,
  OpenAIAdapter: () => OpenAIAdapter,
  experimental_AssistantResponse: () => experimental_AssistantResponse,
  inferLangServeParameters: () => inferLangServeParameters,
  mergeServerSideTools: () => mergeServerSideTools
});
module.exports = __toCommonJS(src_exports);

// src/streams/assistant-response.ts
var import_shared = require("@copilotkit/shared");
function experimental_AssistantResponse({ threadId, messageId }, process) {
  const stream = new ReadableStream({
    async start(controller) {
      const textEncoder = new TextEncoder();
      const sendMessage = (message) => {
        controller.enqueue(textEncoder.encode((0, import_shared.formatStreamPart)("assistant_message", message)));
      };
      const sendError = (errorMessage) => {
        controller.enqueue(textEncoder.encode((0, import_shared.formatStreamPart)("error", errorMessage)));
      };
      controller.enqueue(
        textEncoder.encode(
          (0, import_shared.formatStreamPart)("assistant_control_data", {
            threadId,
            messageId
          })
        )
      );
      try {
        await process({
          threadId,
          messageId,
          sendMessage
        });
      } catch (error) {
        sendError(error.message ?? `${error}`);
      } finally {
        controller.close();
      }
    },
    pull(controller) {
    },
    cancel() {
    }
  });
  return new Response(stream, {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// src/lib/copilotkit-backend.ts
var import_shared4 = require("@copilotkit/shared");

// src/utils/openai.ts
var import_shared2 = require("@copilotkit/shared");
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
  let resultString = (0, import_shared2.encodeResult)(result);
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

// src/utils/stream.ts
var import_shared3 = require("@copilotkit/shared");
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
  const decodedStream = (0, import_shared3.parseChatCompletion)(stream);
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

// src/utils/langserve.ts
var import_remote = require("langchain/runnables/remote");
async function remoteChainToAnnotatedFunction(chain) {
  chain = { ...chain };
  const runnable = new import_remote.RemoteRunnable({ url: chain.chainUrl });
  if (!chain.argumentAnnotations) {
    chain = await inferLangServeParameters(chain);
  }
  chain.argumentType || (chain.argumentType = "multi");
  return {
    name: chain.name,
    description: chain.description,
    argumentAnnotations: chain.argumentAnnotations,
    implementation: async (...args) => {
      let input;
      if (chain.argumentType === "single") {
        input = args[0];
      } else {
        input = {};
        for (let i = 0; i < args.length; i++) {
          input[chain.argumentAnnotations[i].name] = args[i];
        }
      }
      return await runnable.invoke(input);
    }
  };
}
async function inferLangServeParameters(chain) {
  chain = { ...chain };
  const supportedTypes = ["string", "number", "boolean"];
  let schemaUrl = chain.chainUrl.replace(/\/+$/, "") + "/input_schema";
  let schema = await fetch(schemaUrl).then((res) => res.json()).catch(() => {
    throw new Error("Failed to fetch langserve schema at " + schemaUrl);
  });
  if (supportedTypes.includes(schema.type)) {
    chain.argumentType = "single";
    chain.argumentAnnotations = [
      {
        name: "input",
        type: schema.type,
        description: "The input to the chain",
        required: true
      }
    ];
  } else if (schema.type === "object") {
    chain.argumentType = "multi";
    chain.argumentAnnotations = Object.keys(schema.properties).map((key) => {
      var _a;
      let property = schema.properties[key];
      if (!supportedTypes.includes(property.type)) {
        throw new Error("Unsupported schema type");
      }
      return {
        name: key,
        type: property.type,
        description: property.description || "",
        required: ((_a = schema.required) == null ? void 0 : _a.includes(key)) || false
      };
    });
  } else {
    throw new Error("Unsupported schema type");
  }
  return chain;
}

// src/lib/copilotkit-backend.ts
var CopilotBackend = class {
  constructor(params) {
    this.functions = [];
    this.langserve = [];
    this.debug = false;
    for (const action of (params == null ? void 0 : params.actions) || []) {
      this.functions.push(action);
    }
    for (const chain of (params == null ? void 0 : params.langserve) || []) {
      this.langserve.push(remoteChainToAnnotatedFunction(chain));
    }
    this.debug = (params == null ? void 0 : params.debug) || false;
  }
  addFunction(func) {
    this.removeFunction(func.name);
    this.functions.push(func);
  }
  removeFunction(funcName) {
    this.functions = this.functions.filter((f) => f.name !== funcName);
  }
  removeBackendOnlyProps(forwardedProps) {
    this.removeBackendOnlyProps(forwardedProps);
    const backendOnlyPropsKeys = forwardedProps[import_shared4.EXCLUDE_FROM_FORWARD_PROPS_KEYS];
    if (Array.isArray(backendOnlyPropsKeys)) {
      backendOnlyPropsKeys.forEach((key) => {
        const success2 = Reflect.deleteProperty(forwardedProps, key);
        if (!success2) {
          console.error(`Failed to delete property ${key}`);
        }
      });
      const success = Reflect.deleteProperty(forwardedProps, import_shared4.EXCLUDE_FROM_FORWARD_PROPS_KEYS);
      if (!success) {
        console.error(`Failed to delete EXCLUDE_FROM_FORWARD_PROPS_KEYS`);
      }
    } else if (backendOnlyPropsKeys) {
      console.error("backendOnlyPropsKeys is not an array");
    }
  }
  async stream(forwardedProps, serviceAdapter) {
    const langserveFunctions = [];
    for (const chainPromise of this.langserve) {
      try {
        const chain = await chainPromise;
        langserveFunctions.push(chain);
      } catch (error) {
        console.error("Error loading langserve chain:", error);
      }
    }
    let mergedTools = mergeServerSideTools(
      this.functions.map(import_shared4.annotatedFunctionToChatCompletionFunction),
      langserveFunctions.map(import_shared4.annotatedFunctionToChatCompletionFunction)
    );
    mergedTools = mergeServerSideTools(mergedTools, forwardedProps.tools);
    const openaiCompatibleStream = await serviceAdapter.stream({
      ...forwardedProps,
      tools: mergedTools
    });
    return copilotkitStreamInterceptor(
      openaiCompatibleStream,
      [...this.functions, ...langserveFunctions],
      this.debug
    );
  }
  async response(req, serviceAdapter) {
    try {
      return new Response(await this.stream(await req.json(), serviceAdapter));
    } catch (error) {
      return new Response("", { status: 500, statusText: error.message });
    }
  }
  async streamHttpServerResponse(req, res, serviceAdapter) {
    const bodyParser = new Promise((resolve, reject) => {
      let body = "";
      req.on("data", (chunk) => body += chunk.toString());
      req.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
    });
    const forwardedProps = await bodyParser;
    const stream = await this.stream(forwardedProps, serviceAdapter);
    const reader = stream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        res.end();
        break;
      } else {
        res.write(new TextDecoder().decode(value));
      }
    }
  }
};
function mergeServerSideTools(serverTools, clientTools) {
  let allTools = serverTools.slice();
  const serverToolsNames = serverTools.map((tool) => tool.function.name);
  if (clientTools) {
    allTools = allTools.concat(
      // filter out any client functions that are already defined on the server
      clientTools.filter((tool) => !serverToolsNames.includes(tool.function.name))
    );
  }
  return allTools;
}

// src/lib/openai-adapter.ts
var import_openai2 = __toESM(require("openai"));
var DEFAULT_MODEL = "gpt-4-1106-preview";
var OpenAIAdapter = class {
  constructor(params) {
    this.model = DEFAULT_MODEL;
    this.openai = (params == null ? void 0 : params.openai) || new import_openai2.default({});
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

// src/lib/langchain-adapter.ts
var import_messages = require("@langchain/core/messages");
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
  CopilotBackend,
  LangChainAdapter,
  OpenAIAdapter,
  experimental_AssistantResponse,
  inferLangServeParameters,
  mergeServerSideTools
});
//# sourceMappingURL=index.js.map