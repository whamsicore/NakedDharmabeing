import {
  CopilotChat
} from "./chunk-Q7SIB42Y.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/chat/Sidebar.tsx
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CopilotSidebar = (props) => {
  props = __spreadProps(__spreadValues({}, props), {
    className: props.className ? props.className + " copilotKitSidebar" : "copilotKitSidebar"
  });
  const [expandedClassName, setExpandedClassName] = useState(
    props.defaultOpen ? "sidebarExpanded" : ""
  );
  const onSetOpen = (open) => {
    var _a;
    (_a = props.onSetOpen) == null ? void 0 : _a.call(props, open);
    setExpandedClassName(open ? "sidebarExpanded" : "");
  };
  return /* @__PURE__ */ jsxs("div", { className: `copilotKitSidebarContentWrapper ${expandedClassName}`, children: [
    props.children,
    /* @__PURE__ */ jsx(CopilotChat, __spreadValues(__spreadValues({}, props), { onSetOpen }))
  ] });
};

export {
  CopilotSidebar
};
//# sourceMappingURL=chunk-FA66IWQ6.mjs.map