import OpenAI from 'openai';
import { CopilotKitServiceAdapter } from '../types/service-adapter.js';

interface OpenAIAdapterParams {
    openai?: OpenAI;
    model?: string;
}
declare class OpenAIAdapter implements CopilotKitServiceAdapter {
    private openai;
    private model;
    constructor(params?: OpenAIAdapterParams);
    stream(forwardedProps: any): ReadableStream;
}

export { OpenAIAdapter, OpenAIAdapterParams };
