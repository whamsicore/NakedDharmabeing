import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/openai-assistants/utils/process-message-stream.ts
function processMessageStream(reader, processMessage) {
  return __async(this, null, function* () {
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { done, value } = yield reader.read();
      if (done) {
        if (buffer.length > 0) {
          processMessage(buffer);
        }
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      let endIndex;
      while ((endIndex = buffer.indexOf("\n")) !== -1) {
        processMessage(buffer.substring(0, endIndex).trim());
        buffer = buffer.substring(endIndex + 1);
      }
    }
  });
}

export {
  processMessageStream
};
//# sourceMappingURL=chunk-MZ5UN3BY.mjs.map