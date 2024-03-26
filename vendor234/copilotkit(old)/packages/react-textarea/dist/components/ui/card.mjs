import {
  cn
} from "../../chunk-7SUZ6CXM.mjs";
import {
  __objRest,
  __spreadValues
} from "../../chunk-MRXNTQOX.mjs";

// src/components/ui/card.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Card = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)
      }, props)
    );
  }
);
Card.displayName = "Card";
var CardHeader = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("flex flex-col space-y-1.5 p-6", className) }, props));
  }
);
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "h3",
      __spreadValues({
        ref,
        className: cn("text-2xl font-semibold leading-none tracking-tight", className)
      }, props)
    );
  }
);
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("p", __spreadValues({ ref, className: cn("text-sm text-muted-foreground", className) }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
  }
);
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("flex items-center p-6 pt-0", className) }, props));
  }
);
CardFooter.displayName = "CardFooter";
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
};
//# sourceMappingURL=card.mjs.map