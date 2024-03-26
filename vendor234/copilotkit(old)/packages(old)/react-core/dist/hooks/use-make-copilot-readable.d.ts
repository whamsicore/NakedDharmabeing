/**
 * Adds the given information to the Copilot context to make it readable by Copilot.
 * @param information - The information to be added to the Copilot context.
 * @param parentId - The ID of the parent context, if any.
 * @param categories - An array of categories to control which context are visible where. Particularly useful with CopilotTextarea (see `useMakeAutosuggestionFunction`)
 * @returns The ID of the added context.
 */
declare function useMakeCopilotReadable(information: string, parentId?: string, categories?: string[]): string | undefined;

export { useMakeCopilotReadable };
