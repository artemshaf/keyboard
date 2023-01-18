import { keyboardActions } from "./keyboard";
import { keyboardLetterActions } from "./keyboardLetter";

export * from "./hooks";
export * from "./store";
export * from "./keyboard";
export * from "./keyboardLetter";

export const actions = {
  ...keyboardActions,
  ...keyboardLetterActions,
};
