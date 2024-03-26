import { BaseMessageChunk, AIMessage } from '@langchain/core/messages';
import { IterableReadableStream } from '@langchain/core/utils/stream';
import { CopilotKitServiceAdapter } from '../types/service-adapter.js';

type LangChainMessageStream = IterableReadableStream<BaseMessageChunk>;
type LangChainReturnType = LangChainMessageStream | BaseMessageChunk | string | AIMessage;
declare class LangChainAdapter implements CopilotKitServiceAdapter {
    private chainFn;
    constructor(chainFn: (forwardedProps: any) => Promise<LangChainReturnType>);
    stream(forwardedProps: any): Promise<ReadableStream<any>>;
    /**
     * Transforms the props that are forwarded to the LangChain function.
     * Currently this just transforms the messages to the format that LangChain expects.
     *
     * @param forwardedProps
     * @returns {any}
     */
    private transformProps;
    /**
     * Reads from the LangChainMessageStream and converts the output to a ReadableStream.
     *
     * @param streamedChain
     * @returns ReadableStream
     */
    streamResult(streamedChain: LangChainMessageStream): ReadableStream<any>;
}

export { LangChainAdapter, LangChainMessageStream, LangChainReturnType };
