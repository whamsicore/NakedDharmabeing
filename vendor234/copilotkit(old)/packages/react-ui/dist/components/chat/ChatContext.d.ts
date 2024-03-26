import React from 'react';

/**
 * Icons for CopilotChat component.
 */
interface CopilotChatIcons {
    /**
     * The icon to use for the open chat button.
     * @default <OpenIcon />
     */
    openIcon?: React.ReactNode;
    /**
     * The icon to use for the close chat button.
     * @default <CloseIcon />
     */
    closeIcon?: React.ReactNode;
    /**
     * The icon to use for the close chat button in the header.
     * @default <HeaderCloseIcon />
     */
    headerCloseIcon?: React.ReactNode;
    /**
     * The icon to use for the send button.
     * @default <SendIcon />
     */
    sendIcon?: React.ReactNode;
    /**
     * The icon to use for the activity indicator.
     * @default <ActivityIcon />
     */
    activityIcon?: React.ReactNode;
    /**
     * The icon to use for the spinner.
     * @default <SpinnerIcon />
     */
    spinnerIcon?: React.ReactNode;
    /**
     * The icon to use for the stop button.
     * @default <StopIcon />
     */
    stopIcon?: React.ReactNode;
    /**
     * The icon to use for the regenerate button.
     * @default <RegenerateIcon />
     */
    regenerateIcon?: React.ReactNode;
}
/**
 * Labels for CopilotChat component.
 */
interface CopilotChatLabels {
    /**
     * The initial message(s) to display in the chat window.
     */
    initial?: string | string[];
    /**
     * The title to display in the header.
     * @default "CopilotKit"
     */
    title?: string;
    /**
     * The placeholder to display in the input.
     * @default "Type a message..."
     */
    placeholder?: string;
    /**
     * The message to display while the chat GPT is "thinking".
     * @default "Thinking..."
     */
    thinking?: string;
    /**
     * The message to display when the chat is done executing a function.
     * @default "✅ Done"
     */
    done?: string;
    /**
     * The message to display when an error occurs.
     * @default "❌ An error occurred. Please try again."
     */
    error?: string;
    /**
     * The label to display on the stop button.
     * @default "Stop generating"
     */
    stopGenerating?: string;
    /**
     * The label to display on the regenerate button.
     * @default "Regenerate response"
     */
    regenerateResponse?: string;
}
interface ChatContext {
    labels: Required<CopilotChatLabels>;
    icons: Required<CopilotChatIcons>;
}
declare const ChatContext: React.Context<ChatContext | undefined>;
declare function useChatContext(): ChatContext;
interface ChatContextProps {
    labels?: CopilotChatLabels;
    icons?: CopilotChatIcons;
    children?: React.ReactNode;
}
declare const ChatContextProvider: ({ labels, icons, children, }: ChatContextProps) => JSX.Element;

export { ChatContext, ChatContextProvider, CopilotChatIcons, CopilotChatLabels, useChatContext };
