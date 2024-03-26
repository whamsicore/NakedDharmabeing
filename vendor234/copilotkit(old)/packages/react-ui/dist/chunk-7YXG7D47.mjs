import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/chat/Icons.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var OpenIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ jsx("g", { transform: "translate(24, 0) scale(-1, 1)", children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z",
        clipRule: "evenodd"
      }
    ) })
  }
);
var CloseIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })
  }
);
var HeaderCloseIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
  }
);
var SendIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    width: "24",
    height: "24",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      }
    )
  }
);
var SpinnerIcon = /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
var ActivityIcon = /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("circle", { className: "copilotKitActivityDot1", cx: "4", cy: "12", r: "3" }),
      /* @__PURE__ */ jsx("circle", { className: "copilotKitActivityDot1 copilotKitActivityDot2", cx: "12", cy: "12", r: "3" }),
      /* @__PURE__ */ jsx("circle", { className: "copilotKitActivityDot1 copilotKitActivityDot3", cx: "20", cy: "12", r: "3" })
    ]
  }
);
function CheckIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ jsx("path", { d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" })
    })
  );
}
function DownloadIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ jsx("path", { d: "M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" })
    })
  );
}
function CopyIcon(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "svg",
    __spreadProps(__spreadValues({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      style: { height: "1rem", width: "1rem" },
      className
    }, props), {
      children: /* @__PURE__ */ jsx("path", { d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" })
    })
  );
}
var StopIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    style: { height: "1rem", width: "1rem" },
    children: /* @__PURE__ */ jsx("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" })
  }
);
var RegenerateIcon = /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    fill: "currentColor",
    style: { height: "1rem", width: "1rem" },
    children: /* @__PURE__ */ jsx("path", { d: "M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" })
  }
);

export {
  OpenIcon,
  CloseIcon,
  HeaderCloseIcon,
  SendIcon,
  SpinnerIcon,
  ActivityIcon,
  CheckIcon,
  DownloadIcon,
  CopyIcon,
  StopIcon,
  RegenerateIcon
};
//# sourceMappingURL=chunk-7YXG7D47.mjs.map