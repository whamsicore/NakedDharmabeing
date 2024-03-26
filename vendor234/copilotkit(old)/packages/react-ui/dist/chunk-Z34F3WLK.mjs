import {
  useChatContext
} from "./chunk-OF66AL5Z.mjs";

// src/components/chat/Response.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ResponseButton = ({ onClick, inProgress }) => {
  const context = useChatContext();
  return /* @__PURE__ */ jsxs("button", { onClick, className: "copilotKitResponseButton", children: [
    /* @__PURE__ */ jsx("span", { children: inProgress ? context.icons.stopIcon : context.icons.regenerateIcon }),
    inProgress ? context.labels.stopGenerating : context.labels.regenerateResponse
  ] });
};

export {
  ResponseButton
};
//# sourceMappingURL=chunk-Z34F3WLK.mjs.map