import { MakeSystemPrompt } from './subtypes/make-system-prompt.js';
import { MinimalChatGPTMessage } from './subtypes/minimal-chat-gpt-message.js';

interface EditingApiConfig {
    makeSystemPrompt: MakeSystemPrompt;
    fewShotMessages: MinimalChatGPTMessage[];
    forwardedParams: {
        [key: string]: any;
    } | undefined;
}
declare const defaultEditingMakeSystemPrompt: MakeSystemPrompt;
declare const defaultEditingFewShotMessages: MinimalChatGPTMessage[];
declare const defaultEditingApiConfig: EditingApiConfig;

export { EditingApiConfig, defaultEditingApiConfig, defaultEditingFewShotMessages, defaultEditingMakeSystemPrompt };
