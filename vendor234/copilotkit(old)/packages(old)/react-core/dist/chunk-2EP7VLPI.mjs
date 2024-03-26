import {
  CopilotContext
} from "./chunk-S7ZVOTYK.mjs";

// src/hooks/use-make-copilot-readable.ts
import { useContext, useEffect, useRef } from "react";
function useMakeCopilotReadable(information, parentId, categories) {
  const { addContext, removeContext } = useContext(CopilotContext);
  const idRef = useRef();
  useEffect(() => {
    const id = addContext(information, parentId, categories);
    idRef.current = id;
    return () => {
      removeContext(id);
    };
  }, [information, parentId, addContext, removeContext]);
  return idRef.current;
}

export {
  useMakeCopilotReadable
};
//# sourceMappingURL=chunk-2EP7VLPI.mjs.map