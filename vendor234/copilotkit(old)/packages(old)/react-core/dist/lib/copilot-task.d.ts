import { AnnotatedFunction } from '@copilotkit/shared';
import { CopilotContextParams } from '../context/copilot-context.js';
import 'react';
import '../hooks/use-tree.js';
import '../types/document-pointer.js';

interface CopilotTaskConfig {
    /**
     * The instructions to be given to the assistant.
     */
    instructions: string;
    /**
     * Action definitions to be sent to the API.
     */
    actions?: AnnotatedFunction<any[]>[];
    /**
     * Whether to include the copilot readable context in the task.
     */
    includeCopilotReadable?: boolean;
    /**
     * Whether to include actions defined via useMakeCopilotActionable in the task.
     */
    includeCopilotActionable?: boolean;
}
declare class CopilotTask<T = any> {
    private instructions;
    private functions;
    private includeCopilotReadable;
    private includeCopilotActionable;
    constructor(config: CopilotTaskConfig);
    run(context: CopilotContextParams, data?: T): Promise<void>;
}

export { CopilotTask, CopilotTaskConfig };
