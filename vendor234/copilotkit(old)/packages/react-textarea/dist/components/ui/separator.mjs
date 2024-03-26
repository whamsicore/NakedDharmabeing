"use client";
import {
  cn
} from "../../chunk-7SUZ6CXM.mjs";
import {
  __objRest,
  __spreadValues
} from "../../chunk-MRXNTQOX.mjs";

// src/components/ui/separator.tsx
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx } from "react/jsx-runtime";
var Separator = React.forwardRef((_a, ref) => {
  var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    __spreadValues({
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )
    }, props)
  );
});
Separator.displayName = SeparatorPrimitive.Root.displayName;
export {
  Separator
};
//# sourceMappingURL=separator.mjs.map