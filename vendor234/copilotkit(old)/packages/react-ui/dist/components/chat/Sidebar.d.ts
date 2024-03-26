import React from 'react';
import { CopilotChatProps } from './Chat.js';
import './ChatContext.js';
import '@copilotkit/react-core';
import './props.js';
import '@copilotkit/shared';

interface CopilotSidebarProps extends CopilotChatProps {
    children?: React.ReactNode;
}
declare const CopilotSidebar: (props: CopilotSidebarProps) => JSX.Element;

export { CopilotSidebar };
