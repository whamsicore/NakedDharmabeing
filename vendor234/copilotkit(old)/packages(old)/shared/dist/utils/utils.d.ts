import { JSONValue, FunctionCall, AssistantMessage } from '../types/openai-assistant.js';

declare function encodeResult(result: string): string;
interface StreamPart<CODE extends string, NAME extends string, TYPE> {
    code: CODE;
    name: NAME;
    parse: (value: JSONValue) => {
        type: NAME;
        value: TYPE;
    };
}
declare const textStreamPart: StreamPart<"0", "text", string>;
/**
 * This is a utility function that helps in parsing the stream parts.
 * It takes a JSONValue as input and returns an object with type and value.
 * The type is a string that represents the type of the stream part.
 * The value is the actual value of the stream part.
 * If the input value is not a string, it throws an error.
 */
declare const functionCallStreamPart: StreamPart<"1", "function_call", {
    function_call: FunctionCall;
}>;
declare const dataStreamPart: StreamPart<"2", "data", Array<JSONValue>>;
declare const errorStreamPart: StreamPart<"3", "error", string>;
declare const assistantMessage: StreamPart<"4", "assistant_message", AssistantMessage>;
declare const assistantControlData: StreamPart<"5", "assistant_control_data", {
    threadId: string;
    messageId: string;
}>;
type StreamParts = typeof textStreamPart | typeof functionCallStreamPart | typeof dataStreamPart | typeof errorStreamPart | typeof assistantMessage | typeof assistantControlData;
/**
 * Maps the type of a stream part to its value type.
 */
type StreamPartValueType = {
    [P in StreamParts as P["name"]]: ReturnType<P["parse"]>["value"];
};
type StreamPartType = ReturnType<typeof textStreamPart.parse> | ReturnType<typeof functionCallStreamPart.parse> | ReturnType<typeof dataStreamPart.parse> | ReturnType<typeof errorStreamPart.parse> | ReturnType<typeof assistantMessage.parse> | ReturnType<typeof assistantControlData.parse>;
declare const streamPartsByCode: {
    readonly 0: StreamPart<"0", "text", string>;
    readonly 1: StreamPart<"1", "function_call", {
        function_call: FunctionCall;
    }>;
    readonly 2: StreamPart<"2", "data", JSONValue[]>;
    readonly 3: StreamPart<"3", "error", string>;
    readonly 4: StreamPart<"4", "assistant_message", AssistantMessage>;
    readonly 5: StreamPart<"5", "assistant_control_data", {
        threadId: string;
        messageId: string;
    }>;
};
/**
 * The map of prefixes for data in the stream
 *
 * - 0: Text from the LLM response
 * - 1: (OpenAI) function_call responses
 * - 2: custom JSON added by the user using `Data`
 *
 * Example:
 * ```
 * 0:Vercel
 * 0:'s
 * 0: AI
 * 0: AI
 * 0: SDK
 * 0: is great
 * 0:!
 * 2: { "someJson": "value" }
 * 1: {"function_call": {"name": "get_current_weather", "arguments": "{\\n\\"location\\": \\"Charlottesville, Virginia\\",\\n\\"format\\": \\"celsius\\"\\n}"}}
 *```
 */
declare const StreamStringPrefixes: {
    readonly text: "0";
    readonly function_call: "1";
    readonly data: "2";
    readonly error: "3";
    readonly assistant_message: "4";
    readonly assistant_control_data: "5";
};
declare const validCodes: ("0" | "1" | "2" | "3" | "4" | "5")[];
/**
 * Parses a stream part from a string.
 *
 * @param line The string to parse.
 * @returns The parsed stream part.
 * @throws An error if the string cannot be parsed.
 */
declare const parseStreamPart: (line: string) => StreamPartType;
/**
 * Prepends a string with a prefix from the `StreamChunkPrefixes`, JSON-ifies it,
 * and appends a new line.
 *
 * It ensures type-safety for the part type and value.
 */
declare function formatStreamPart<T extends keyof StreamPartValueType>(type: T, value: StreamPartValueType[T]): StreamString;
declare const isStreamStringEqualToType: (type: keyof typeof StreamStringPrefixes, value: string) => value is `0:${string}\n` | `1:${string}\n` | `2:${string}\n` | `3:${string}\n` | `4:${string}\n` | `5:${string}\n`;
type StreamString = `${typeof StreamStringPrefixes[keyof typeof StreamStringPrefixes]}:${string}\n`;
/**
 * A header sent to the client so it knows how to handle parsing the stream (as a deprecated text response or using the new prefixed protocol)
 */
declare const COMPLEX_HEADER = "X-Experimental-Stream-Data";

export { COMPLEX_HEADER, StreamPart, StreamPartType, StreamString, StreamStringPrefixes, encodeResult, formatStreamPart, isStreamStringEqualToType, parseStreamPart, streamPartsByCode, validCodes };
