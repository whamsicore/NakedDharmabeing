import { CopilotChatProps } from './Chat.js';
import 'react';
import './ChatContext.js';
import '@copilotkit/react-core';
import './props.js';
import '@copilotkit/shared';

declare const CopilotPopup: (props: CopilotChatProps) => JSX.Element;

export { CopilotPopup };
