type TypeMap = {
    string: string;
    number: number;
    boolean: boolean;
    object: object;
    "string[]": string[];
    "number[]": number[];
    "boolean[]": boolean[];
    "object[]": object[];
};
type BaseParameter = {
    name: string;
    type?: Exclude<keyof TypeMap, "string" | "object" | "object[]">;
    description?: string;
    required?: boolean;
};
type StringParameter = {
    name: string;
    type: "string";
    description?: string;
    required?: boolean;
    enum?: string[];
};
type ObjectParameter = {
    name: string;
    type: "object" | "object[]";
    description?: string;
    required?: boolean;
    attributes?: Parameter[];
};
type Parameter = BaseParameter | StringParameter | ObjectParameter;
type MappedParameterTypes<T extends Parameter[]> = {
    [P in T[number] as P["name"]]: P extends {
        enum: Array<infer E>;
    } ? E extends string ? P["required"] extends false ? // Make the type union with undefined
    E | undefined : E : never : P extends {
        type: "object" | "object[]";
        attributes: infer Attributes;
    } ? Attributes extends Parameter[] ? MappedParameterTypes<Attributes> : never : P["required"] extends false ? // Make the type union with undefined
    TypeMap[P["type"] extends keyof TypeMap ? P["type"] : "string"] | undefined : TypeMap[P["type"] extends keyof TypeMap ? P["type"] : "string"];
};
type Action<T extends Parameter[] | [] = []> = {
    name: string;
    description?: string;
    parameters?: T;
    handler: T extends [] ? () => void : (args: MappedParameterTypes<T>) => void;
};
declare function useCopilotAction<const T extends Parameter[] | [] = []>(action: Action<T>): void;

export { useCopilotAction };
