import {
  CopilotContext
} from "./chunk-S7ZVOTYK.mjs";

// src/hooks/use-make-copilot-actionable.ts
import { useRef, useContext, useEffect, useMemo } from "react";
import { nanoid } from "nanoid";
function useMakeCopilotActionable(annotatedFunction, dependencies) {
  const idRef = useRef(nanoid());
  const { setEntryPoint, removeEntryPoint } = useContext(CopilotContext);
  const memoizedAnnotatedFunction = useMemo(
    () => ({
      name: annotatedFunction.name,
      description: annotatedFunction.description,
      argumentAnnotations: annotatedFunction.argumentAnnotations,
      implementation: annotatedFunction.implementation
    }),
    dependencies
  );
  useEffect(() => {
    setEntryPoint(idRef.current, memoizedAnnotatedFunction);
    return () => {
      removeEntryPoint(idRef.current);
    };
  }, [memoizedAnnotatedFunction, setEntryPoint, removeEntryPoint]);
}

export {
  useMakeCopilotActionable
};
//# sourceMappingURL=chunk-WH4L73VS.mjs.map