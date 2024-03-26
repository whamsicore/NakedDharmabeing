import {
  cn
} from "../../chunk-7SUZ6CXM.mjs";
import {
  __objRest,
  __spreadValues
} from "../../chunk-MRXNTQOX.mjs";

// src/components/ui/textarea.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Textarea = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "textarea",
      __spreadValues({
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref
      }, props)
    );
  }
);
Textarea.displayName = "Textarea";
export {
  Textarea
};
//# sourceMappingURL=textarea.mjs.map