import { Message, ToolDefinition, ChatCompletionEvent } from '@copilotkit/shared';
import { CopilotApiConfig } from '../context/copilot-context.js';
import 'react';
import '../hooks/use-tree.js';
import '../types/document-pointer.js';

interface FetchChatCompletionParams {
    copilotConfig: CopilotApiConfig;
    model?: string;
    messages: Message[];
    tools?: ToolDefinition[];
    temperature?: number;
    maxTokens?: number;
    headers?: Record<string, string> | Headers;
    body?: object;
    signal?: AbortSignal;
}
declare function fetchChatCompletion({ copilotConfig, model, messages, tools, temperature, headers, body, signal, }: FetchChatCompletionParams): Promise<Response>;
interface DecodedChatCompletionResponse extends Response {
    events: ReadableStream<ChatCompletionEvent> | null;
}
declare function fetchAndDecodeChatCompletion(params: FetchChatCompletionParams): Promise<DecodedChatCompletionResponse>;
interface DecodedChatCompletionResponseAsText extends Response {
    events: ReadableStream<string> | null;
}
declare function fetchAndDecodeChatCompletionAsText(params: FetchChatCompletionParams): Promise<DecodedChatCompletionResponseAsText>;

export { DecodedChatCompletionResponse, DecodedChatCompletionResponseAsText, FetchChatCompletionParams, fetchAndDecodeChatCompletion, fetchAndDecodeChatCompletionAsText, fetchChatCompletion };
