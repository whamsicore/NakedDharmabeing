// src/types/base/base-autosuggestions-config.tsx
import { defaultCopilotContextCategories } from "@copilotkit/react-core";
var defaultShouldToggleHoveringEditorOnKeyPress = (event, shortcut) => {
  if (event.key === shortcut && event.metaKey) {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnKeyPress = (event) => {
  if (event.key === "Tab") {
    return true;
  }
  return false;
};
var defaultBaseAutosuggestionsConfig = {
  debounceTime: 250,
  contextCategories: defaultCopilotContextCategories,
  disableWhenEmpty: true,
  disabled: false,
  temporarilyDisableWhenMovingCursorWithoutChangingText: true,
  shouldToggleHoveringEditorOnKeyPress: defaultShouldToggleHoveringEditorOnKeyPress,
  shouldAcceptAutosuggestionOnKeyPress: defaultShouldAcceptAutosuggestionOnKeyPress
};

export {
  defaultBaseAutosuggestionsConfig
};
//# sourceMappingURL=chunk-LCDTIJSD.mjs.map