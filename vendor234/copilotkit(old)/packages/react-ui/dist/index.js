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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  CopilotPopup: () => CopilotPopup,
  CopilotSidebar: () => CopilotSidebar
});
module.exports = __toCommonJS(src_exports);

// src/components/chat/Chat.tsx
var import_react8 = __toESM(require("react"));

// src/components/chat/ChatContext.tsx
var import_react = __toESM(require("react"));

// src/components/chat/Icons.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var OpenIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { transform: "translate(24, 0) scale(-1, 1)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z",
        clipRule: "evenodd"
      }
    ) })
  }
);
var CloseIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })
  }
);
var HeaderCloseIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
  }
);
var SendIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      }
    )
  }
);
var SpinnerIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    style: {
      animation: "copilotKitSpinAnimation 1s linear infinite",
      color: "rgb(107 114 128)"
    },
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "circle",
        {
          style: { opacity: 0.25 },
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          style: { opacity: 0.75 },
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
);
var ActivityIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    style: {
      display: "inline-block",
      marginLeft: "0.25rem",
      marginRight: "0.25rem"
    },
    height: "24",
    width: "24",
    viewBox: "0 0 27 27",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "copilotKitActivityDot1", cx: "4", cy: "12", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "copilotKitActivityDot1 copilotKitActivityDot2", cx: "12", cy: "12", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "copilotKitActivityDot1 copilotKitActivityDot3", cx: "20", cy: "12", r: "3" })
    ]
  }
);
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
var StopIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    style: { height: "1rem", width: "1rem" },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" })
  }
);
var RegenerateIcon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    style: { height: "1rem", width: "1rem" },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" })
  }
);

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
var ChatContextProvider = ({
  // temperature,
  // instructions,
  // maxFeedback,
  labels,
  icons,
  children
}) => {
  const context = (0, import_react.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ChatContext.Provider, { value: context, children });
};

// src/components/chat/Chat.tsx
var import_react_core = require("@copilotkit/react-core");

// src/components/chat/Window.tsx
var import_react2 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Window = ({
  open,
  setOpen,
  children,
  clickOutsideToClose,
  shortcut,
  hitEscapeToClose
}) => {
  const windowRef = import_react2.default.useRef(null);
  const handleClickOutside = (0, import_react2.useCallback)(
    (event) => {
      var _a;
      if (!clickOutsideToClose) {
        return;
      }
      const parentElement = (_a = windowRef.current) == null ? void 0 : _a.parentElement;
      if (open && parentElement && !parentElement.contains(event.target)) {
        setOpen(false);
      }
    },
    [clickOutsideToClose, open, setOpen]
  );
  const handleKeyDown = (0, import_react2.useCallback)(
    (event) => {
      var _a;
      const target = event.target;
      const isInput = target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      const isDescendantOfWrapper = (_a = windowRef.current) == null ? void 0 : _a.contains(target);
      if (open && event.key === "Escape" && (!isInput || isDescendantOfWrapper) && hitEscapeToClose) {
        setOpen(false);
      } else if (event.key === shortcut && (isMacOS() && event.metaKey || !isMacOS() && event.ctrlKey) && (!isInput || isDescendantOfWrapper)) {
        setOpen(!open);
      }
    },
    [hitEscapeToClose, shortcut, open, setOpen]
  );
  const adjustForMobile = (0, import_react2.useCallback)(() => {
    const copilotKitWindow = windowRef.current;
    const vv = window.visualViewport;
    if (!copilotKitWindow || !vv) {
      return;
    }
    if (window.innerWidth < 640 && open) {
      copilotKitWindow.style.height = `${vv.height}px`;
      copilotKitWindow.style.left = `${vv.offsetLeft}px`;
      copilotKitWindow.style.top = `${vv.offsetTop}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = `${window.innerHeight}px`;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.body.addEventListener("touchmove", preventScroll, {
        passive: false
      });
    } else {
      copilotKitWindow.style.height = "";
      copilotKitWindow.style.left = "";
      copilotKitWindow.style.top = "";
      document.body.style.position = "";
      document.body.style.height = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.top = "";
      document.body.style.touchAction = "";
      document.body.removeEventListener("touchmove", preventScroll);
    }
  }, [open]);
  (0, import_react2.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", adjustForMobile);
      adjustForMobile();
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", adjustForMobile);
      }
    };
  }, [adjustForMobile, handleClickOutside, handleKeyDown]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `copilotKitWindow${open ? " open" : ""}`, ref: windowRef, children });
};
var preventScroll = (event) => {
  let targetElement = event.target;
  const hasParentWithClass = (element, className) => {
    while (element && element !== document.body) {
      if (element.classList.contains(className)) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  };
  if (!hasParentWithClass(targetElement, "copilotKitMessages")) {
    event.preventDefault();
  }
};
function isMacOS() {
  return /Mac|iMac|Macintosh/i.test(navigator.userAgent);
}

// src/components/chat/Button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Button = ({ open, setOpen }) => {
  const context = useChatContext();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "button",
    {
      className: `copilotKitButton ${open ? "open" : ""}`,
      "aria-label": open ? "Close Chat" : "Open Chat",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "copilotKitButtonIcon copilotKitButtonIconOpen", children: context.icons.openIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "copilotKitButtonIcon copilotKitButtonIconClose", children: context.icons.closeIcon })
      ]
    }
  ) });
};

// src/components/chat/Header.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Header = ({ setOpen }) => {
  const context = useChatContext();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "copilotKitHeader", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: context.labels.title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { onClick: () => setOpen(false), "aria-label": "Close", children: context.icons.headerCloseIcon })
  ] });
};

// src/components/chat/Messages.tsx
var import_react5 = __toESM(require("react"));
var import_nanoid = require("nanoid");

// src/components/chat/Markdown.tsx
var import_react4 = require("react");
var import_react_markdown = __toESM(require("react-markdown"));

// src/components/chat/CodeBlock.tsx
var import_react3 = require("react");
var import_react_syntax_highlighter = require("react-syntax-highlighter");
var import_prism = require("react-syntax-highlighter/dist/esm/styles/prism");

// src/hooks/use-copy-to-clipboard.tsx
var React3 = __toESM(require("react"));
function useCopyToClipboard({ timeout = 2e3 }) {
  const [isCopied, setIsCopied] = React3.useState(false);
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
var import_jsx_runtime6 = require("react/jsx-runtime");
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
var CodeBlock = (0, import_react3.memo)(({ language, value }) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "copilotKitCodeBlock", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "copilotKitCodeBlockToolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "copilotKitCodeBlockToolbarLanguage", children: language }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "copilotKitCodeBlockToolbarButtons", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("button", { className: "copilotKitCodeBlockToolbarButton", onClick: downloadAsFile, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DownloadIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "Download" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("button", { className: "copilotKitCodeBlockToolbarButton", onClick: onCopy, children: [
          isCopied ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CheckIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CopyIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "Copy code" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_jsx_runtime7 = require("react/jsx-runtime");
var MemoizedReactMarkdown = (0, import_react4.memo)(
  import_react_markdown.default,
  (prevProps, nextProps) => prevProps.children === nextProps.children && prevProps.className === nextProps.className
);
var Markdown = ({ content }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "copilotKitMarkdown", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MemoizedReactMarkdown, { components, remarkPlugins: [import_remark_gfm.default, import_remark_math.default], children: content }) });
};
var components = {
  p({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children });
  },
  code(_a) {
    var _b = _a, { children, className, inline } = _b, props = __objRest(_b, ["children", "className", "inline"]);
    if (children.length) {
      if (children[0] == "\u258D") {
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("code", __spreadProps(__spreadValues({ className }, props), { children }));
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
var import_jsx_runtime8 = require("react/jsx-runtime");
var Messages = ({ messages, inProgress }) => {
  const context = useChatContext();
  const initialMessages = (0, import_react5.useMemo)(
    () => makeInitialMessages(context.labels.initial),
    [context.labels.initial]
  );
  messages = [...initialMessages, ...messages];
  const messagesEndRef = import_react5.default.useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto"
      });
    }
  };
  (0, import_react5.useEffect)(() => {
    scrollToBottom();
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "copilotKitMessages", children: [
    messages.map((message, index) => {
      const isCurrentMessage = index === messages.length - 1;
      if (message.role === "user") {
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "copilotKitMessage copilotKitUserMessage", children: message.content }, index);
      } else if (message.role == "assistant") {
        if (isCurrentMessage && inProgress && !message.content) {
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: context.icons.spinnerIcon }, index);
        } else if ((!inProgress || index != messages.length - 1) && !message.content && message.function_call) {
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: context.labels.done }, index);
        } else {
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `copilotKitMessage copilotKitAssistantMessage`, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Markdown, { content: message.content }) }, index);
        }
      }
    }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { ref: messagesEndRef })
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

// src/components/chat/Input.tsx
var import_react7 = require("react");

// src/components/chat/Textarea.tsx
var import_react6 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var AutoResizingTextarea = (0, import_react6.forwardRef)(
  ({ maxRows = 1, placeholder, value, onChange, onKeyDown, autoFocus }, ref) => {
    const internalTextareaRef = (0, import_react6.useRef)(null);
    const [maxHeight, setMaxHeight] = (0, import_react6.useState)(0);
    (0, import_react6.useImperativeHandle)(ref, () => internalTextareaRef.current);
    (0, import_react6.useEffect)(() => {
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
    (0, import_react6.useEffect)(() => {
      const textarea = internalTextareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
      }
    }, [value, maxHeight]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_jsx_runtime10 = require("react/jsx-runtime");
var Input = ({ inProgress, onSend, children }) => {
  const context = useChatContext();
  const textareaRef = (0, import_react7.useRef)(null);
  const handleDivClick = (event) => {
    var _a;
    if (event.target !== event.currentTarget)
      return;
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  const [text, setText] = (0, import_react7.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "copilotKitInput", onClick: handleDivClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { className: "copilotKitSendButton", disabled, onClick: send, children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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

// src/components/chat/Chat.tsx
var import_nanoid2 = require("nanoid");

// src/components/chat/Response.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var ResponseButton = ({ onClick, inProgress }) => {
  const context = useChatContext();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("button", { onClick, className: "copilotKitResponseButton", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: inProgress ? context.icons.stopIcon : context.icons.regenerateIcon }),
    inProgress ? context.labels.stopGenerating : context.labels.regenerateResponse
  ] });
};

// src/components/chat/Chat.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  const { visibleMessages, append, reload, stop, isLoading, input, setInput } = (0, import_react_core.useCopilotChat)({
    id: (0, import_nanoid2.nanoid)(),
    makeSystemMessage,
    additionalInstructions: instructions
  });
  const [openState, setOpenState] = import_react8.default.useState(defaultOpen);
  const setOpen = (open) => {
    onSetOpen == null ? void 0 : onSetOpen(open);
    setOpenState(open);
  };
  const sendMessage = (message) => __async(void 0, null, function* () {
    onSubmitMessage == null ? void 0 : onSubmitMessage(message);
    append({
      id: (0, import_nanoid2.nanoid)(),
      content: message,
      role: "user"
    });
  });
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChatContextProvider, { icons, labels, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button2, { open: openState, setOpen }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      Window2,
      {
        open: openState,
        setOpen,
        clickOutsideToClose,
        shortcut,
        hitEscapeToClose,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Header2, { open: openState, setOpen }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Messages2, { messages: visibleMessages, inProgress: isLoading }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Input2, { inProgress: isLoading, onSend: sendMessage, children: showResponseButton && visibleMessages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ResponseButton2, { onClick: isLoading ? stop : reload, inProgress: isLoading }) })
        ]
      }
    )
  ] }) });
};

// src/components/chat/Popup.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var CopilotPopup = (props) => {
  props = __spreadProps(__spreadValues({}, props), {
    className: props.className ? props.className + " copilotKitPopup" : "copilotKitPopup"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CopilotChat, __spreadValues({}, props));
};

// src/components/chat/Sidebar.tsx
var import_react9 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var CopilotSidebar = (props) => {
  props = __spreadProps(__spreadValues({}, props), {
    className: props.className ? props.className + " copilotKitSidebar" : "copilotKitSidebar"
  });
  const [expandedClassName, setExpandedClassName] = (0, import_react9.useState)(
    props.defaultOpen ? "sidebarExpanded" : ""
  );
  const onSetOpen = (open) => {
    var _a;
    (_a = props.onSetOpen) == null ? void 0 : _a.call(props, open);
    setExpandedClassName(open ? "sidebarExpanded" : "");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `copilotKitSidebarContentWrapper ${expandedClassName}`, children: [
    props.children,
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CopilotChat, __spreadValues(__spreadValues({}, props), { onSetOpen }))
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CopilotPopup,
  CopilotSidebar
});
//# sourceMappingURL=index.js.map