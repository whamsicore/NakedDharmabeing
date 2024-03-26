// src/utils/langserve.ts
import { RemoteRunnable } from "langchain/runnables/remote";
async function remoteChainToAnnotatedFunction(chain) {
  chain = { ...chain };
  const runnable = new RemoteRunnable({ url: chain.chainUrl });
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

export {
  remoteChainToAnnotatedFunction,
  inferLangServeParameters
};
//# sourceMappingURL=chunk-Y4ZXOIJH.mjs.map