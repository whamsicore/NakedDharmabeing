import { MinimalChatGPTMessage } from './subtypes/minimal-chat-gpt-message.js';
import { MakeSystemPrompt } from './subtypes/make-system-prompt.js';

interface SuggestionsApiConfig {
    makeSystemPrompt: MakeSystemPrompt;
    fewShotMessages: MinimalChatGPTMessage[];
    forwardedParams: {
        [key: string]: any;
    } | undefined;
}
declare const defaultSuggestionsMakeSystemPrompt: MakeSystemPrompt;
declare const defaultSuggestionsFewShotMessages: MinimalChatGPTMessage[];
declare const defaultSuggestionsApiConfig: SuggestionsApiConfig;

export { SuggestionsApiConfig, defaultSuggestionsApiConfig, defaultSuggestionsFewShotMessages, defaultSuggestionsMakeSystemPrompt };
