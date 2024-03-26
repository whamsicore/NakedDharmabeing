import {
  Markdown
} from "./chunk-GWGHQNRI.mjs";
import {
  useChatContext
} from "./chunk-OF66AL5Z.mjs";

// src/components/chat/Messages.tsx
import React, { useEffect, useMemo } from "react";
import { nanoid } from "nanoid";
import { jsx, jsxs } from "react/jsx-runtime";
var Messages = ({ messages, inProgress }) => {
  const context = useChatContext();
  const initialMessages = useMemo(
    () => makeInitialMessages(context.labels.initial),
    [context.labels.initial]
  );
  messages = [...initialMessages, ...messages];
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitMessages", children: [
    messages.map((message, index) => {
      const isCurrentMessage = index === messages.length - 1;
      if (message.role === "user") {
        return /* @__PURE__ */ jsx("div", { className: "copilotKitMessage copilotKitUserMessage", children: message.content }, index);
      } else if (message.role == "assistant") {
        if (isCurrentMessage && inProgress && !message.content) {
          return /* @__PURE__ */ jsx("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: context.icons.spinnerIcon }, index);
        } else if ((!inProgress || index != messages.length - 1) && !message.content && message.function_call) {
          return /* @__PURE__ */ jsx("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: context.labels.done }, index);
        } else {
          return /* @__PURE__ */ jsx("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: /* @__PURE__ */ jsx(Markdown, { content: message.content }) }, index);
        }
      }
    }),
    /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
  ] });
};
function makeInitialMessages(initial) {
  let initialArray = [];
  if (initial) {
    if (Array.isArray(initial)) {
      initialArray.push(...initial);
    } else {
      initialArray.push(initial);
    }
  }
  return initialArray.map((message) => ({
    id: nanoid(),
    role: "assistant",
    content: message
  }));
}

export {
  Messages
};
//# sourceMappingURL=chunk-3M4HWSE7.mjs.map