import { Message } from '@copilotkit/shared';
import { SystemMessageFunction } from '../types/system-message.js';
import { UseChatOptions } from './use-chat.js';
import '../context/copilot-context.js';
import 'react';
import './use-tree.js';
import '../types/document-pointer.js';

interface UseCopilotChatOptions extends UseChatOptions {
    makeSystemMessage?: SystemMessageFunction;
    additionalInstructions?: string;
}
interface UseCopilotChatReturn {
    visibleMessages: Message[];
    append: (message: Message) => Promise<void>;
    reload: () => Promise<void>;
    stop: () => void;
    isLoading: boolean;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}
declare function useCopilotChat({ makeSystemMessage, additionalInstructions, ...options }: UseCopilotChatOptions): UseCopilotChatReturn;
declare function defaultSystemMessage(contextString: string, additionalInstructions?: string): string;

export { UseCopilotChatOptions, UseCopilotChatReturn, defaultSystemMessage, useCopilotChat };
