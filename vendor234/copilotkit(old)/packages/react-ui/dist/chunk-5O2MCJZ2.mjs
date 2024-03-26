import {
  useChatContext
} from "./chunk-OF66AL5Z.mjs";

// src/components/chat/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = ({ open, setOpen }) => {
  const context = useChatContext();
  return /* @__PURE__ */ jsx("div", { onClick: () => setOpen(!open), children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: `copilotKitButton ${open ? "open" : ""}`,
      "aria-label": open ? "Close Chat" : "Open Chat",
      children: [
        /* @__PURE__ */ jsx("div", { className: "copilotKitButtonIcon copilotKitButtonIconOpen", children: context.icons.openIcon }),
        /* @__PURE__ */ jsx("div", { className: "copilotKitButtonIcon copilotKitButtonIconClose", children: context.icons.closeIcon })
      ]
    }
  ) });
};

export {
  Button
};
//# sourceMappingURL=chunk-5O2MCJZ2.mjs.map