"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// src/components/chat/Messages.tsx
var Messages_exports = {};
__export(Messages_exports, {
  Messages: () => Messages
});
module.exports = __toCommonJS(Messages_exports);
var import_react4 = __toESM(require("react"));

// src/components/chat/ChatContext.tsx
var import_react = __toESM(require("react"));

// src/components/chat/Icons.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function CheckIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" })
    })
  );
}
function DownloadIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" })
    })
  );
}
function CopyIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" })
    })
  );
}

// src/components/chat/ChatContext.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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

// src/components/chat/Messages.tsx
var import_nanoid = require("nanoid");

// src/components/chat/Markdown.tsx
var import_react3 = require("react");
var import_react_markdown = __toESM(require("react-markdown"));

// src/components/chat/CodeBlock.tsx
var import_react2 = require("react");
var import_react_syntax_highlighter = require("react-syntax-highlighter");
var import_prism = require("react-syntax-highlighter/dist/esm/styles/prism");

// src/hooks/use-copy-to-clipboard.tsx
var React2 = __toESM(require("react"));
function useCopyToClipboard({ timeout = 2e3 }) {
  const [isCopied, setIsCopied] = React2.useState(false);
  const copyToClipboard = (value) => {
    var _a;
    if (typeof window === "undefined" || !((_a = navigator.clipboard) == null ? void 0 : _a.writeText)) {
      return;
    }
    if (!value) {
      return;
    }
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };
  return { isCopied, copyToClipboard };
}

// src/components/chat/CodeBlock.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var programmingLanguages = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css"
  // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
};
var generateRandomString = (length, lowercase = false) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return lowercase ? result.toLowerCase() : result;
};
var CodeBlock = (0, import_react2.memo)(({ language, value }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2e3 });
  const downloadAsFile = () => {
    if (typeof window === "undefined") {
      return;
    }
    const fileExtension = programmingLanguages[language] || ".file";
    const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`;
    const fileName = window.prompt("Enter file name", suggestedFileName);
    if (!fileName) {
      return;
    }
    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const onCopy = () => {
    if (isCopied)
      return;
    copyToClipboard(value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "copilotKitCodeBlock", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "copilotKitCodeBlockToolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "copilotKitCodeBlockToolbarLanguage", children: language }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "copilotKitCodeBlockToolbarButtons", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { className: "copilotKitCodeBlockToolbarButton", onClick: downloadAsFile, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DownloadIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Download" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { className: "copilotKitCodeBlockToolbarButton", onClick: onCopy, children: [
          isCopied ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CopyIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Copy code" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react_syntax_highlighter.Prism,
      {
        language,
        style: import_prism.vscDarkPlus,
        PreTag: "div",
        customStyle: {
          margin: 0,
          borderBottomLeftRadius: "0.375rem",
          borderBottomRightRadius: "0.375rem"
        },
        children: value
      }
    )
  ] });
});
CodeBlock.displayName = "CodeBlock";

// src/components/chat/Markdown.tsx
var import_remark_gfm = __toESM(require("remark-gfm"));
var import_remark_math = __toESM(require("remark-math"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var MemoizedReactMarkdown = (0, import_react3.memo)(
  import_react_markdown.default,
  (prevProps, nextProps) => prevProps.children === nextProps.children && prevProps.className === nextProps.className
);
var Markdown = ({ content }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "copilotKitMarkdown", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MemoizedReactMarkdown, { components, remarkPlugins: [import_remark_gfm.default, import_remark_math.default], children: content }) });
};
var components = {
  p({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children });
  },
  code(_a) {
    var _b = _a, { children, className, inline } = _b, props = __objRest(_b, ["children", "className", "inline"]);
    if (children.length) {
      if (children[0] == "\u258D") {
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("code", __spreadProps(__spreadValues({ className }, props), { children }));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      CodeBlock,
      __spreadValues({
        language: match && match[1] || "",
        value: String(children).replace(/\n$/, "")
      }, props),
      Math.random()
    );
  }
};

// src/components/chat/Messages.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Messages = ({ messages, inProgress }) => {
  const context = useChatContext();
  const initialMessages = (0, import_react4.useMemo)(
    () => makeInitialMessages(context.labels.initial),
    [context.labels.initial]
  );
  messages = [...initialMessages, ...messages];
  const messagesEndRef = import_react4.default.useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  };
  (0, import_react4.useEffect)(() => {
    scrollToBottom();
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "copilotKitMessages", children: [
    messages.map((message, index) => {
      const isCurrentMessage = index === messages.length - 1;
      if (message.role === "user") {
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "copilotKitMessage copilotKitUserMessage", children: message.content }, index);
      } else if (message.role == "assistant") {
        if (isCurrentMessage && inProgress && !message.content) {
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: context.icons.spinnerIcon }, index);
        } else if ((!inProgress || index != messages.length - 1) && !message.content && message.function_call) {
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: context.labels.done }, index);
        } else {
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Markdown, { content: message.content }) }, index);
        }
      }
    }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ref: messagesEndRef })
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
    id: (0, import_nanoid.nanoid)(),
    role: "assistant",
    content: message
  }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Messages
});
//# sourceMappingURL=Messages.js.map