import { AnnotatedFunction, ToolDefinition, FunctionCallHandler } from '@copilotkit/shared';
import React from 'react';
import { TreeNodeId } from '../hooks/use-tree.js';
import { DocumentPointer } from '../types/document-pointer.js';

/**
 * Interface for the configuration of the Copilot API.
 */
interface CopilotApiConfig {
    /**
     * The endpoint for the chat API.
     */
    chatApiEndpoint: string;
    /**
     * The endpoint for the chat API v2.
     */
    chatApiEndpointV2: string;
    /**
     * additional headers to be sent with the request
     * @default {}
     * @example
     * ```
     * {
     *   'Authorization': 'Bearer your_token_here'
     * }
     * ```
     */
    headers: Record<string, string>;
    /**
     * Additional body params to be sent with the request
     * @default {}
     * @example
     * ```
     * {
     *   'message': 'Hello, world!'
     * }
     * ```
     */
    body: Record<string, any>;
    /**
     * Backend only props that will be combined to body params to be sent with the request
     * @default {}
     * @example
     * ```
     * {
     *   'user_id': 'user_id'
     * }
     * ```
     */
    backendOnlyProps?: Record<string, any>;
}
interface CopilotContextParams {
    entryPoints: Record<string, AnnotatedFunction<any[]>>;
    setEntryPoint: (id: string, entryPoint: AnnotatedFunction<any[]>) => void;
    removeEntryPoint: (id: string) => void;
    getChatCompletionFunctionDescriptions: (customEntryPoints?: Record<string, AnnotatedFunction<any[]>>) => ToolDefinition[];
    getFunctionCallHandler: (customEntryPoints?: Record<string, AnnotatedFunction<any[]>>) => FunctionCallHandler;
    addContext: (context: string, parentId?: string, categories?: string[]) => TreeNodeId;
    removeContext: (id: TreeNodeId) => void;
    getContextString: (documents: DocumentPointer[], categories: string[]) => string;
    addDocumentContext: (documentPointer: DocumentPointer, categories?: string[]) => TreeNodeId;
    removeDocumentContext: (documentId: string) => void;
    getDocumentsContext: (categories: string[]) => DocumentPointer[];
    copilotApiConfig: CopilotApiConfig;
}
declare const CopilotContext: React.Context<CopilotContextParams>;
declare function useCopilotContext(): CopilotContextParams;

export { CopilotApiConfig, CopilotContext, CopilotContextParams, useCopilotContext };
