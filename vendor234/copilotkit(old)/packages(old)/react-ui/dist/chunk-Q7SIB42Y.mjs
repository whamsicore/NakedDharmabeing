import {
  Messages
} from "./chunk-3M4HWSE7.mjs";
import {
  ResponseButton
} from "./chunk-Z34F3WLK.mjs";
import {
  Window
} from "./chunk-B7DNOYVQ.mjs";
import {
  Button
} from "./chunk-5O2MCJZ2.mjs";
import {
  Header
} from "./chunk-UWPFPWAW.mjs";
import {
  Input
} from "./chunk-NYLOXKYT.mjs";
import {
  ChatContextProvider
} from "./chunk-OF66AL5Z.mjs";
import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/components/chat/Chat.tsx
import React from "react";
import { useCopilotChat } from "@copilotkit/react-core";
import { nanoid } from "nanoid";
import { jsx, jsxs } from "react/jsx-runtime";
var CopilotChat = ({
  instructions,
  defaultOpen = false,
  clickOutsideToClose = true,
  hitEscapeToClose = true,
  onSetOpen,
  onSubmitMessage,
  shortcut = "e",
  icons,
  labels,
  makeSystemMessage,
  showResponseButton = true,
  Window: Window2 = Window,
  Button: Button2 = Button,
  Header: Header2 = Header,
  Messages: Messages2 = Messages,
  Input: Input2 = Input,
  ResponseButton: ResponseButton2 = ResponseButton,
  className
}) => {
  const { visibleMessages, append, reload, stop, isLoading, input, setInput } = useCopilotChat({
    id: nanoid(),
    makeSystemMessage,
    additionalInstructions: instructions
  });
  const [openState, setOpenState] = React.useState(defaultOpen);
  const setOpen = (open) => {
    onSetOpen == null ? void 0 : onSetOpen(open);
    setOpenState(open);
  };
  const sendMessage = (message) => __async(void 0, null, function* () {
    onSubmitMessage == null ? void 0 : onSubmitMessage(message);
    append({
      id: nanoid(),
      content: message,
      role: "user"
    });
  });
  return /* @__PURE__ */ jsx(ChatContextProvider, { icons, labels, children: /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx(Button2, { open: openState, setOpen }),
    /* @__PURE__ */ jsxs(
      Window2,
      {
        open: openState,
        setOpen,
        clickOutsideToClose,
        shortcut,
        hitEscapeToClose,
        children: [
          /* @__PURE__ */ jsx(Header2, { open: openState, setOpen }),
          /* @__PURE__ */ jsx(Messages2, { messages: visibleMessages, inProgress: isLoading }),
          /* @__PURE__ */ jsx(Input2, { inProgress: isLoading, onSend: sendMessage, children: showResponseButton && visibleMessages.length > 0 && /* @__PURE__ */ jsx(ResponseButton2, { onClick: isLoading ? stop : reload, inProgress: isLoading }) })
        ]
      }
    )
  ] }) });
};

export {
  CopilotChat
};
//# sourceMappingURL=chunk-Q7SIB42Y.mjs.map