import { AnnotatedFunction } from '@copilotkit/shared';

declare function useMakeCopilotActionable<ActionInput extends any[]>(annotatedFunction: AnnotatedFunction<ActionInput>, dependencies: any[]): void;

export { useMakeCopilotActionable };
