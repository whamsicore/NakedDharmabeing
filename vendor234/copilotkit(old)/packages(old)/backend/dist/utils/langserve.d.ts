import { AnnotatedFunction } from '@copilotkit/shared';
import { RemoteChain } from '../types/langserve.js';

declare function remoteChainToAnnotatedFunction(chain: RemoteChain): Promise<AnnotatedFunction<any[]>>;
declare function inferLangServeParameters(chain: RemoteChain): Promise<RemoteChain>;

export { inferLangServeParameters, remoteChainToAnnotatedFunction };
