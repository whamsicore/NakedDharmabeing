import { MakeSystemPrompt } from './subtypes/make-system-prompt.js';
import { MinimalChatGPTMessage } from './subtypes/minimal-chat-gpt-message.js';

interface InsertionsApiConfig {
    makeSystemPrompt: MakeSystemPrompt;
    fewShotMessages: MinimalChatGPTMessage[];
    forwardedParams: {
        [key: string]: any;
    } | undefined;
}
declare const defaultInsertionsMakeSystemPrompt: MakeSystemPrompt;
declare const defaultInsertionsFewShotMessages: MinimalChatGPTMessage[];
declare const defaultInsertionsApiConfig: InsertionsApiConfig;

export { InsertionsApiConfig, defaultInsertionsApiConfig, defaultInsertionsFewShotMessages, defaultInsertionsMakeSystemPrompt };
