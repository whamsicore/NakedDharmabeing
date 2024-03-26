import {
  defaultCopilotContextCategories
} from "./chunk-PHK2K7UB.mjs";
import {
  CopilotContext
} from "./chunk-S7ZVOTYK.mjs";
import {
  useChat
} from "./chunk-JFUS5YVO.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/use-copilot-chat.ts
import { useMemo, useContext } from "react";
function useCopilotChat(_a) {
  var _b = _a, {
    makeSystemMessage,
    additionalInstructions
  } = _b, options = __objRest(_b, [
    "makeSystemMessage",
    "additionalInstructions"
  ]);
  const {
    getContextString,
    getChatCompletionFunctionDescriptions,
    getFunctionCallHandler,
    copilotApiConfig
  } = useContext(CopilotContext);
  const systemMessage = useMemo(() => {
    const systemMessageMaker = makeSystemMessage || defaultSystemMessage;
    const contextString = getContextString([], defaultCopilotContextCategories);
    return {
      id: "system",
      content: systemMessageMaker(contextString, additionalInstructions),
      role: "system"
    };
  }, [getContextString, makeSystemMessage]);
  const functionDescriptions = useMemo(() => {
    return getChatCompletionFunctionDescriptions();
  }, [getChatCompletionFunctionDescriptions]);
  const { messages, append, reload, stop, isLoading, input, setInput } = useChat(__spreadProps(__spreadValues({}, options), {
    copilotConfig: copilotApiConfig,
    id: options.id,
    initialMessages: [systemMessage].concat(options.initialMessages || []),
    tools: functionDescriptions,
    onFunctionCall: getFunctionCallHandler(),
    headers: __spreadValues({}, options.headers),
    body: __spreadValues({}, options.body)
  }));
  const visibleMessages = messages.filter(
    (message) => message.role === "user" || message.role === "assistant"
  );
  return {
    visibleMessages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput
  };
}
function defaultSystemMessage(contextString, additionalInstructions) {
  return `
Please act as an efficient, competent, conscientious, and industrious professional assistant.

Help the user achieve their goals, and you do so in a way that is as efficient as possible, without unnecessary fluff, but also without sacrificing professionalism.
Always be polite and respectful, and prefer brevity over verbosity.

The user has provided you with the following context:
\`\`\`
${contextString}
\`\`\`

They have also provided you with functions you can call to initiate actions on their behalf, or functions you can call to receive more information.

Please assist them as best you can.

You can ask them for clarifying questions if needed, but don't be annoying about it. If you can reasonably 'fill in the blanks' yourself, do so.

If you would like to call a function, call it without saying anything else.
` + (additionalInstructions ? `

${additionalInstructions}` : "");
}

export {
  useCopilotChat,
  defaultSystemMessage
};
//# sourceMappingURL=chunk-3TF6G3W5.mjs.map