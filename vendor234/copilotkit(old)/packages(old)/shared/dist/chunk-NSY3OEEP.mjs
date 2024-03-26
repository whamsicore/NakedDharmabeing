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

export {
  annotatedFunctionToChatCompletionFunction
};
//# sourceMappingURL=chunk-NSY3OEEP.mjs.map