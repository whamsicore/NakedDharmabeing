"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/copilot-provider/standard-copilot-api-config.tsx
var standard_copilot_api_config_exports = {};
__export(standard_copilot_api_config_exports, {
  StandardCopilotApiConfig: () => StandardCopilotApiConfig
});
module.exports = __toCommonJS(standard_copilot_api_config_exports);
var StandardCopilotApiConfig = class {
  constructor(chatApiEndpoint, chatApiEndpointV2, headers, body) {
    this.chatApiEndpoint = chatApiEndpoint;
    this.chatApiEndpointV2 = chatApiEndpointV2;
    this.headers = headers;
    this.body = body;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StandardCopilotApiConfig
});
//# sourceMappingURL=standard-copilot-api-config.js.map