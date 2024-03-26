import {
  remoteChainToAnnotatedFunction
} from "./chunk-Y4ZXOIJH.mjs";
import {
  copilotkitStreamInterceptor
} from "./chunk-TRZNOUWA.mjs";

// src/lib/copilotkit-backend.ts
import {
  annotatedFunctionToChatCompletionFunction,
  EXCLUDE_FROM_FORWARD_PROPS_KEYS
} from "@copilotkit/shared";
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
    const backendOnlyPropsKeys = forwardedProps[EXCLUDE_FROM_FORWARD_PROPS_KEYS];
    if (Array.isArray(backendOnlyPropsKeys)) {
      backendOnlyPropsKeys.forEach((key) => {
        const success2 = Reflect.deleteProperty(forwardedProps, key);
        if (!success2) {
          console.error(`Failed to delete property ${key}`);
        }
      });
      const success = Reflect.deleteProperty(forwardedProps, EXCLUDE_FROM_FORWARD_PROPS_KEYS);
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
      this.functions.map(annotatedFunctionToChatCompletionFunction),
      langserveFunctions.map(annotatedFunctionToChatCompletionFunction)
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

export {
  CopilotBackend,
  mergeServerSideTools
};
//# sourceMappingURL=chunk-UTSCIWKW.mjs.map