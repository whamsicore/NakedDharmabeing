import {
  useChatContext
} from "./chunk-OF66AL5Z.mjs";

// src/components/chat/Header.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Header = ({ setOpen }) => {
  const context = useChatContext();
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitHeader", children: [
    /* @__PURE__ */ jsx("div", { children: context.labels.title }),
    /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Close", children: context.icons.headerCloseIcon })
  ] });
};

export {
  Header
};
//# sourceMappingURL=chunk-UWPFPWAW.mjs.map