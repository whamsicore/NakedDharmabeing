import { ToolDefinition } from '../types/openai-assistant.js';
import { AnnotatedFunction } from '../types/annotated-function.js';

declare function annotatedFunctionToChatCompletionFunction(annotatedFunction: AnnotatedFunction<any[]>): ToolDefinition;

export { annotatedFunctionToChatCompletionFunction };
