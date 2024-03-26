import React__default from 'react';
import { BaseCopilotTextareaProps } from '../../types/base/base-copilot-textarea-props.js';
import { HTMLCopilotTextAreaElement } from '../../types/html-copilot-textarea-element.js';
import { AutosuggestionsConfigUserSpecified } from '../../types/autosuggestions-config/autosuggestions-config-user-specified.js';
import '../../types/base/base-autosuggestions-config.js';
import '../../types/base/autosuggestions-bare-function.js';
import '@copilotkit/react-core';
import '../../types/autosuggestions-config/autosuggestions-config.js';
import '../../types/autosuggestions-config/suggestions-api-config.js';
import '../../types/autosuggestions-config/subtypes/minimal-chat-gpt-message.js';
import '../../types/autosuggestions-config/subtypes/make-system-prompt.js';
import '../../types/autosuggestions-config/insertions-api-config.js';
import '../../types/autosuggestions-config/editing-api-config.js';

interface CopilotTextareaProps extends Omit<BaseCopilotTextareaProps, "baseAutosuggestionsConfig"> {
    autosuggestionsConfig: AutosuggestionsConfigUserSpecified;
}
/**
 * A copilot textarea that uses the standard autosuggestions function.
 */
declare const CopilotTextarea: React__default.ForwardRefExoticComponent<CopilotTextareaProps & React__default.RefAttributes<HTMLCopilotTextAreaElement>>;

export { CopilotTextarea, CopilotTextareaProps };
