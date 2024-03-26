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

// src/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  EXCLUDE_FROM_FORWARD_PROPS_KEYS: () => EXCLUDE_FROM_FORWARD_PROPS_KEYS
});
module.exports = __toCommonJS(constants_exports);

// src/constants/copilot-protocol.ts
var EXCLUDE_FROM_FORWARD_PROPS_KEYS = "exclude_from_forward_props_keys";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EXCLUDE_FROM_FORWARD_PROPS_KEYS
});
//# sourceMappingURL=index.js.map