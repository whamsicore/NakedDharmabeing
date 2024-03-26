import { Role } from '../types/openai-assistant.js';

interface ChatCompletionChunk {
    choices: {
        delta: {
            role: Role;
            content?: string | null;
            name?: string;
            function_call?: {
                name?: string;
                arguments?: string;
            };
            tool_calls?: {
                index: number;
                id?: string;
                function: {
                    arguments?: string;
                    name?: string;
                    scope?: "client" | "server";
                };
            }[];
        };
    }[];
}
declare function parseChatCompletion(stream: ReadableStream<Uint8Array>): ReadableStream<ChatCompletionChunk>;

export { ChatCompletionChunk, parseChatCompletion };
