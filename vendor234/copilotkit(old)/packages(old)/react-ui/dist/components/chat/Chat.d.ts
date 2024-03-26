import React from 'react';
import { CopilotChatIcons, CopilotChatLabels } from './ChatContext.js';
import { SystemMessageFunction } from '@copilotkit/react-core';
import { WindowProps, ButtonProps, HeaderProps, MessagesProps, InputProps, ResponseButtonProps } from './props.js';
import '@copilotkit/shared';

/**
 * Props for CopilotChat component.
 */
interface CopilotChatProps {
    /**
     * Custom instructions to be added to the system message. Use this property to
     * provide additional context or guidance to the language model, influencing
     * its responses. These instructions can include specific directions,
     * preferences, or criteria that the model should consider when generating
     * its output, thereby tailoring the conversation more precisely to the
     * user's needs or the application's requirements.
     */
    instructions?: string;
    /**
     * Whether the chat window should be open by default.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * If the chat window should close when the user clicks outside of it.
     * @default true
     */
    clickOutsideToClose?: boolean;
    /**
     * If the chat window should close when the user hits the Escape key.
     * @default true
     */
    hitEscapeToClose?: boolean;
    /**
     * A callback that gets called when the chat window opens or closes.
     */
    onSetOpen?: (open: boolean) => void;
    /**
     * A callback that gets called when a new message it submitted.
     */
    onSubmitMessage?: (message: string) => void;
    /**
     * The shortcut key to open the chat window.
     * Uses Command-<shortcut> on a Mac and Ctrl-<shortcut> on Windows.
     * @default "e"
     */
    shortcut?: string;
    /**
     * Icons can be used to set custom icons for the chat window.
     */
    icons?: CopilotChatIcons;
    /**
     * Labels can be used to set custom labels for the chat window.
     */
    labels?: CopilotChatLabels;
    /**
     * A function that takes in context string and instructions and returns
     * the system message to include in the chat request.
     * Use this to completely override the system message, when providing
     * instructions is not enough.
     */
    makeSystemMessage?: SystemMessageFunction;
    /**
     * Whether to show the response button.
     * @default true
     */
    showResponseButton?: boolean;
    /**
     * A custom Window component to use instead of the default.
     */
    Window?: React.ComponentType<WindowProps>;
    /**
     * A custom Button component to use instead of the default.
     */
    Button?: React.ComponentType<ButtonProps>;
    /**
     * A custom Header component to use instead of the default.
     */
    Header?: React.ComponentType<HeaderProps>;
    /**
     * A custom Messages component to use instead of the default.
     */
    Messages?: React.ComponentType<MessagesProps>;
    /**
     * A custom Input component to use instead of the default.
     */
    Input?: React.ComponentType<InputProps>;
    /**
     * A custom ResponseButton component to use instead of the default.
     */
    ResponseButton?: React.ComponentType<ResponseButtonProps>;
    /**
     * A class name to apply to the root element.
     */
    className?: string;
}
declare const CopilotChat: ({ instructions, defaultOpen, clickOutsideToClose, hitEscapeToClose, onSetOpen, onSubmitMessage, shortcut, icons, labels, makeSystemMessage, showResponseButton, Window, Button, Header, Messages, Input, ResponseButton, className, }: CopilotChatProps) => JSX.Element;

export { CopilotChat, CopilotChatProps };
