import {
  CopilotContext
} from "./chunk-S7ZVOTYK.mjs";

// src/hooks/use-make-copilot-document-readable.ts
import { useContext, useEffect, useRef } from "react";
function useMakeCopilotDocumentReadable(document, categories, dependencies = []) {
  const { addDocumentContext, removeDocumentContext } = useContext(CopilotContext);
  const idRef = useRef();
  useEffect(() => {
    const id = addDocumentContext(document, categories);
    idRef.current = id;
    return () => {
      removeDocumentContext(id);
    };
  }, [addDocumentContext, removeDocumentContext, ...dependencies]);
  return idRef.current;
}

export {
  useMakeCopilotDocumentReadable
};
//# sourceMappingURL=chunk-JVCBCB2T.mjs.map