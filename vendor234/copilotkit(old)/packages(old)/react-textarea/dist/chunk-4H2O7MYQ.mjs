import {
  HoveringInsertionPromptBoxCore
} from "./chunk-K7GVTNZU.mjs";

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box.tsx
import { jsx } from "react/jsx-runtime";
var HoveringInsertionPromptBox = (props) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex flex-col justify-center items-center space-y-4 rounded-md border shadow-lg p-4 border-gray- bg-white",
      style: { width: "35rem" },
      children: /* @__PURE__ */ jsx(
        HoveringInsertionPromptBoxCore,
        {
          state: {
            editorState: props.editorState
          },
          insertionOrEditingFunction: props.apiConfig.insertionOrEditingFunction,
          performInsertion: props.performInsertion,
          contextCategories: props.contextCategories
        }
      )
    }
  );
};

export {
  HoveringInsertionPromptBox
};
//# sourceMappingURL=chunk-4H2O7MYQ.mjs.map