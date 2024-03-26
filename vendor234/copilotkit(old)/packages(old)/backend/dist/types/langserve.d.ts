import { AnnotatedFunctionArgument } from '@copilotkit/shared';

interface RemoteChain {
    name: string;
    description: string;
    chainUrl: string;
    argumentAnnotations?: AnnotatedFunctionArgument[];
    argumentType?: "single" | "multi";
}

export { RemoteChain };
