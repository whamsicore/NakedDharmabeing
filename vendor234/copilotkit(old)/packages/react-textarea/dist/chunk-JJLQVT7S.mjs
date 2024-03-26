import {
  arraysAreEqual
} from "./chunk-7SUZ6CXM.mjs";

// src/types/base/editor-autocomplete-state.ts
function areEqual_autocompleteState(prev, next) {
  return prev.cursorPoint.offset === next.cursorPoint.offset && arraysAreEqual(prev.cursorPoint.path, next.cursorPoint.path) && prev.textBeforeCursor === next.textBeforeCursor && prev.textAfterCursor === next.textAfterCursor;
}

export {
  areEqual_autocompleteState
};
//# sourceMappingURL=chunk-JJLQVT7S.mjs.map