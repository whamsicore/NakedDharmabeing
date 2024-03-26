import {
  CheckIcon,
  CopyIcon,
  DownloadIcon
} from "./chunk-7YXG7D47.mjs";
import {
  useCopyToClipboard
} from "./chunk-POVINPXX.mjs";

// src/components/chat/CodeBlock.tsx
import { memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as highlightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx, jsxs } from "react/jsx-runtime";
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
var CodeBlock = memo(({ language, value }) => {
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
  return /* @__PURE__ */ jsxs("div", { className: "copilotKitCodeBlock", children: [
    /* @__PURE__ */ jsxs("div", { className: "copilotKitCodeBlockToolbar", children: [
      /* @__PURE__ */ jsx("span", { className: "copilotKitCodeBlockToolbarLanguage", children: language }),
      /* @__PURE__ */ jsxs("div", { className: "copilotKitCodeBlockToolbarButtons", children: [
        /* @__PURE__ */ jsxs("button", { className: "copilotKitCodeBlockToolbarButton", onClick: downloadAsFile, children: [
          /* @__PURE__ */ jsx(DownloadIcon, {}),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Download" })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "copilotKitCodeBlockToolbarButton", onClick: onCopy, children: [
          isCopied ? /* @__PURE__ */ jsx(CheckIcon, {}) : /* @__PURE__ */ jsx(CopyIcon, {}),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Copy code" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      SyntaxHighlighter,
      {
        language,
        style: highlightStyle,
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

export {
  programmingLanguages,
  generateRandomString,
  CodeBlock
};
//# sourceMappingURL=chunk-DPRH4HX3.mjs.map