import {
  ActivityIcon,
  CloseIcon,
  HeaderCloseIcon,
  OpenIcon,
  RegenerateIcon,
  SendIcon,
  SpinnerIcon,
  StopIcon
} from "./chunk-7YXG7D47.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/chat/ChatContext.tsx
import React, { useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var ChatContext = React.createContext(void 0);
function useChatContext() {
  const context = React.useContext(ChatContext);
  if (context === void 0) {
    throw new Error(
      "Context not found. Did you forget to wrap your app in a <ChatContextProvider> component?"
    );
  }
  return context;
}
var ChatContextProvider = ({
  // temperature,
  // instructions,
  // maxFeedback,
  labels,
  icons,
  children
}) => {
  const context = useMemo(
    () => ({
      labels: __spreadValues(__spreadValues({}, {
        initial: "",
        title: "CopilotKit",
        placeholder: "Type a message...",
        thinking: "Thinking...",
        done: "\u2705 Done",
        error: "\u274C An error occurred. Please try again.",
        stopGenerating: "Stop generating",
        regenerateResponse: "Regenerate response"
      }), labels),
      icons: __spreadProps(__spreadValues({}, {
        openIcon: OpenIcon,
        closeIcon: CloseIcon,
        headerCloseIcon: HeaderCloseIcon,
        sendIcon: SendIcon,
        activityIcon: ActivityIcon,
        spinnerIcon: SpinnerIcon,
        stopIcon: StopIcon,
        regenerateIcon: RegenerateIcon
      }), {
        icons
      })
    }),
    [labels, icons]
  );
  return /* @__PURE__ */ jsx(ChatContext.Provider, { value: context, children });
};

export {
  ChatContext,
  useChatContext,
  ChatContextProvider
};
//# sourceMappingURL=chunk-OF66AL5Z.mjs.map