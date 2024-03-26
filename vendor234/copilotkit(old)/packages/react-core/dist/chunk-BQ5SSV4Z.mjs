import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/utils/fetch-chat-completion.ts
import {
  decodeChatCompletion,
  parseChatCompletion,
  decodeChatCompletionAsText,
  EXCLUDE_FROM_FORWARD_PROPS_KEYS
} from "@copilotkit/shared";
function fetchChatCompletion(_0) {
  return __async(this, arguments, function* ({
    copilotConfig,
    model,
    messages,
    tools,
    temperature,
    headers,
    body,
    signal
  }) {
    var _a, _b;
    temperature || (temperature = 0.5);
    tools || (tools = []);
    const cleanedMessages = messages.map((message) => {
      const { content, role, name, function_call } = message;
      return { content, role, name, function_call };
    });
    const response = yield fetch(copilotConfig.chatApiEndpoint, {
      method: "POST",
      headers: __spreadValues(__spreadValues({
        "Content-Type": "application/json"
      }, copilotConfig.headers), headers ? __spreadValues({}, headers) : {}),
      body: JSON.stringify(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
        model,
        messages: cleanedMessages,
        stream: true
      }, tools.length ? { tools } : {}), temperature ? { temperature } : {}), tools.length != 0 ? { tool_choice: "auto" } : {}), copilotConfig.body), copilotConfig.backendOnlyProps), Object.keys((_a = copilotConfig["body"]) != null ? _a : {}).length > 0 ? { [EXCLUDE_FROM_FORWARD_PROPS_KEYS]: Object.keys((_b = copilotConfig["body"]) != null ? _b : {}) } : {}), body ? __spreadValues({}, body) : {})),
      signal
    });
    return response;
  });
}
function fetchAndDecodeChatCompletion(params) {
  return __async(this, null, function* () {
    const response = yield fetchChatCompletion(params);
    if (!response.ok || !response.body) {
      return __spreadProps(__spreadValues({}, response), { events: null });
    }
    const events = yield decodeChatCompletion(parseChatCompletion(response.body));
    return __spreadProps(__spreadValues({}, response), { events });
  });
}
function fetchAndDecodeChatCompletionAsText(params) {
  return __async(this, null, function* () {
    const response = yield fetchChatCompletion(params);
    if (!response.ok || !response.body) {
      return __spreadProps(__spreadValues({}, response), { events: null });
    }
    const events = yield decodeChatCompletionAsText(
      decodeChatCompletion(parseChatCompletion(response.body))
    );
    return __spreadProps(__spreadValues({}, response), { events });
  });
}

export {
  fetchChatCompletion,
  fetchAndDecodeChatCompletion,
  fetchAndDecodeChatCompletionAsText
};
//# sourceMappingURL=chunk-BQ5SSV4Z.mjs.map