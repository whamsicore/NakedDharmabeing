import http from 'http';
import { AnnotatedFunction, ToolDefinition } from '@copilotkit/shared';
import { CopilotKitServiceAdapter } from '../types/service-adapter.js';
import { RemoteChain } from '../types/langserve.js';

interface CopilotBackendConstructorParams {
    actions?: AnnotatedFunction<any[]>[];
    langserve?: RemoteChain[];
    debug?: boolean;
}
declare class CopilotBackend {
    private functions;
    private langserve;
    private debug;
    constructor(params?: CopilotBackendConstructorParams);
    addFunction(func: AnnotatedFunction<any[]>): void;
    removeFunction(funcName: string): void;
    removeBackendOnlyProps(forwardedProps: any): void;
    stream(forwardedProps: any, serviceAdapter: CopilotKitServiceAdapter): Promise<ReadableStream>;
    response(req: Request, serviceAdapter: CopilotKitServiceAdapter): Promise<Response>;
    streamHttpServerResponse(req: http.IncomingMessage, res: http.ServerResponse, serviceAdapter: CopilotKitServiceAdapter): Promise<void>;
}
declare function mergeServerSideTools(serverTools: ToolDefinition[], clientTools?: ToolDefinition[]): ToolDefinition[];

export { CopilotBackend, mergeServerSideTools };
