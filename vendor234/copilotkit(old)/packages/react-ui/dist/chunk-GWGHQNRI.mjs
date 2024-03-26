import {
  CodeBlock
} from "./chunk-DPRH4HX3.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/chat/Markdown.tsx
import { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { jsx } from "react/jsx-runtime";
var MemoizedReactMarkdown = memo(
  ReactMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children && prevProps.className === nextProps.className
);
var Markdown = ({ content }) => {
  return /* @__PURE__ */ jsx("div", { className: "copilotKitMarkdown", children: /* @__PURE__ */ jsx(MemoizedReactMarkdown, { components, remarkPlugins: [remarkGfm, remarkMath], children: content }) });
};
var components = {
  p({ children }) {
    return /* @__PURE__ */ jsx("p", { children });
  },
  code(_a) {
    var _b = _a, { children, className, inline } = _b, props = __objRest(_b, ["children", "className", "inline"]);
    if (children.length) {
      if (children[0] == "\u258D") {
        return /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              marginTop: "0.25rem"
            },
            children: "\u258D"
          }
        );
      }
      children[0] = children[0].replace("`\u258D`", "\u258D");
    }
    const match = /language-(\w+)/.exec(className || "");
    if (inline) {
      return /* @__PURE__ */ jsx("code", __spreadProps(__spreadValues({ className }, props), { children }));
    }
    return /* @__PURE__ */ jsx(
      CodeBlock,
      __spreadValues({
        language: match && match[1] || "",
        value: String(children).replace(/\n$/, "")
      }, props),
      Math.random()
    );
  }
};

export {
  Markdown
};
//# sourceMappingURL=chunk-GWGHQNRI.mjs.map