"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/chat/Input.tsx
var Input_exports = {};
__export(Input_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(Input_exports);
var import_react3 = require("react");

// src/components/chat/ChatContext.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var ChatContext = import_react.default.createContext(void 0);
function useChatContext() {
  const context = import_react.default.useContext(ChatContext);
  if (context === void 0) {
    throw new Error(
      "Context not found. Did you forget to wrap your app in a <ChatContextProvider> component?"
    );
  }
  return context;
}

// src/components/chat/Textarea.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var AutoResizingTextarea = (0, import_react2.forwardRef)(
  ({ maxRows = 1, placeholder, value, onChange, onKeyDown, autoFocus }, ref) => {
    const internalTextareaRef = (0, import_react2.useRef)(null);
    const [maxHeight, setMaxHeight] = (0, import_react2.useState)(0);
    (0, import_react2.useImperativeHandle)(ref, () => internalTextareaRef.current);
    (0, import_react2.useEffect)(() => {
      const calculateMaxHeight = () => {
        const textarea = internalTextareaRef.current;
        if (textarea) {
          textarea.style.height = "auto";
          const singleRowHeight = textarea.scrollHeight;
          setMaxHeight(singleRowHeight * maxRows);
          if (autoFocus) {
            textarea.focus();
          }
        }
      };
      calculateMaxHeight();
    }, [maxRows]);
    (0, import_react2.useEffect)(() => {
      const textarea = internalTextareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
      }
    }, [value, maxHeight]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "textarea",
      {
        ref: internalTextareaRef,
        value,
        onChange,
        onKeyDown,
        placeholder,
        style: {
          overflow: "hidden",
          resize: "none",
          maxHeight: `${maxHeight}px`
        },
        rows: 1
      }
    );
  }
);
var Textarea_default = AutoResizingTextarea;

// src/components/chat/Input.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = ({ inProgress, onSend, children }) => {
  const context = useChatContext();
  const textareaRef = (0, import_react3.useRef)(null);
  const handleDivClick = (event) => {
    var _a;
    if (event.target !== event.currentTarget)
      return;
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  const [text, setText] = (0, import_react3.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "copilotKitInput", onClick: handleDivClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "copilotKitSendButton", disabled, onClick: send, children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input
});
//# sourceMappingURL=Input.js.map