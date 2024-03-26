import { AnnotatedFunction } from '@copilotkit/shared';

/**
 * This function decides what to handle server side and what to forward to the client.
 * It also handles the execution of server side functions.
 *
 * TODO: add proper error handling and logging
 */
declare function copilotkitStreamInterceptor(stream: ReadableStream<Uint8Array>, functions: AnnotatedFunction<any[]>[], debug?: boolean): ReadableStream;

export { copilotkitStreamInterceptor };
