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

// src/utils/annotated-function.ts
var annotated_function_exports = {};
__export(annotated_function_exports, {
  annotatedFunctionToChatCompletionFunction: () => annotatedFunctionToChatCompletionFunction
});
module.exports = __toCommonJS(annotated_function_exports);
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
  annotatedFunctionToChatCompletionFunction
});
//# sourceMappingURL=annotated-function.js.map