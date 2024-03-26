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

// src/utils/langserve.ts
var langserve_exports = {};
__export(langserve_exports, {
  inferLangServeParameters: () => inferLangServeParameters,
  remoteChainToAnnotatedFunction: () => remoteChainToAnnotatedFunction
});
module.exports = __toCommonJS(langserve_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  inferLangServeParameters,
  remoteChainToAnnotatedFunction
});
//# sourceMappingURL=langserve.js.map