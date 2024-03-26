import { CopilotKitProps } from './copilotkit-props.js';
import 'react';

/**
 * The CopilotKit component.
 * This component provides the Copilot context to its children.
 * It can be configured either with a chat API endpoint or a CopilotApiConfig.
 *
 * NOTE: The backend can use OpenAI, or you can bring your own LLM.
 * For examples of the backend api implementation, see `examples/next-openai` usage (under `src/api/copilotkit`),
 * or read the documentation at https://docs.copilotkit.ai
 * In particular, Getting-Started > Quickstart-Backend: https://docs.copilotkit.ai/getting-started/quickstart-backend
 *
 * Example usage:
 * ```
 * <CopilotKit url="https://your.copilotkit.api">
 *    <App />
 * </CopilotKit>
 * ```
 *
 * or
 *
 * ```
 * const copilotApiConfig = new StandardCopilotApiConfig(
 *  "https://your.copilotkit.api/v1",
 *  "https://your.copilotkit.api/v2",
 *  {},
 *  {}
 *  );
 *
 * // ...
 *
 * <CopilotKit chatApiConfig={copilotApiConfig}>
 *    <App />
 * </CopilotKit>
 * ```
 *
 * @param props - The props for the component.
 * @returns The CopilotKit component.
 */
declare function CopilotKit({ children, ...props }: CopilotKitProps): JSX.Element;
declare const defaultCopilotContextCategories: string[];

export { CopilotKit, defaultCopilotContextCategories };
