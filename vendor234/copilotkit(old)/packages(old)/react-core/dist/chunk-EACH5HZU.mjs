import {
  defaultCopilotContextCategories
} from "./chunk-PHK2K7UB.mjs";
import {
  fetchAndDecodeChatCompletion
} from "./chunk-BQ5SSV4Z.mjs";
import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/lib/copilot-task.ts
var CopilotTask = class {
  constructor(config) {
    this.instructions = config.instructions;
    this.functions = config.actions || [];
    this.includeCopilotReadable = config.includeCopilotReadable || true;
    this.includeCopilotActionable = config.includeCopilotActionable || true;
  }
  run(context, data) {
    return __async(this, null, function* () {
      const entryPoints = this.includeCopilotActionable ? Object.assign({}, context.entryPoints) : {};
      for (const fn of this.functions) {
        entryPoints[fn.name] = fn;
      }
      let contextString = "";
      if (data) {
        contextString = (typeof data === "string" ? data : JSON.stringify(data)) + "\n\n";
      }
      if (this.includeCopilotReadable) {
        contextString += context.getContextString([], defaultCopilotContextCategories);
      }
      const systemMessage = {
        id: "system",
        content: taskSystemMessage(contextString, this.instructions),
        role: "system"
      };
      const messages = [systemMessage];
      const response = yield fetchAndDecodeChatCompletion({
        copilotConfig: context.copilotApiConfig,
        messages,
        tools: context.getChatCompletionFunctionDescriptions(entryPoints),
        headers: context.copilotApiConfig.headers,
        body: context.copilotApiConfig.body
      });
      if (!response.events) {
        throw new Error("Failed to execute task");
      }
      const reader = response.events.getReader();
      let functionCalls = [];
      while (true) {
        const { done, value } = yield reader.read();
        if (done) {
          break;
        }
        if (value.type === "function") {
          functionCalls.push({
            name: value.name,
            arguments: JSON.stringify(value.arguments)
          });
          break;
        }
      }
      if (!functionCalls.length) {
        throw new Error("No function call occurred");
      }
      const functionCallHandler = context.getFunctionCallHandler(entryPoints);
      for (const functionCall of functionCalls) {
        yield functionCallHandler(messages, functionCall);
      }
    });
  }
};
function taskSystemMessage(contextString, instructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with functions you can call to initiate actions on their behalf.

Please assist them as best you can.

This is not a conversation, so please do not ask questions. Just call a function without saying anything else.

The user has given you the following task to complete:

\`\`\`
${instructions}
\`\`\`
`;
}

export {
  CopilotTask
};
//# sourceMappingURL=chunk-EACH5HZU.mjs.map