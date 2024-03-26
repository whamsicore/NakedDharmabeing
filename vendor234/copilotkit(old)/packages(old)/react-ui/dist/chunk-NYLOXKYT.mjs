import {
  Textarea_default
} from "./chunk-WM6BS77F.mjs";
import {
  useChatContext
} from "./chunk-OF66AL5Z.mjs";

// src/components/chat/Input.tsx
import { useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Input = ({ inProgress, onSend, children }) => {
  const context = useChatContext();
  const textareaRef = useRef(null);
  const handleDivClick = (event) => {
    var _a;
    if (event.target !== event.currentTarget)
      return;
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  const [text, setText] = useState("");
  const send = () => {
    var _a;
    if (inProgress)
      return;
    onSend(text);
    setText("");
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  const icon = inProgress ? context.icons.activityIcon : context.icons.sendIcon;
  const disabled = inProgress || text.length === 0;
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitInput", onClick: handleDivClick, children: [
    /* @__PURE__ */ jsx("span", { children }),
    /* @__PURE__ */ jsx("button", { className: "copilotKitSendButton", disabled, onClick: send, children: icon }),
    /* @__PURE__ */ jsx(
      Textarea_default,
      {
        ref: textareaRef,
        placeholder: context.labels.placeholder,
        autoFocus: true,
        maxRows: 5,
        value: text,
        onChange: (event) => setText(event.target.value),
        onKeyDown: (event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
          }
        }
      }
    )
  ] });
};

export {
  Input
};
//# sourceMappingURL=chunk-NYLOXKYT.mjs.map