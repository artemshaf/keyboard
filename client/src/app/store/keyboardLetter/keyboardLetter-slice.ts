import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IKeyboard } from "@interfaces";
import { RootState } from "../store";

const name = "keyboardLetter";

const initialState: IKeyboard = {
  history: {},
  position: 0,
  status: "idle",
  text: "",
};

export const keyboardLetterSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitialKeyboardLetter: (state) => {
      state = initialState;
    },
    togglePauseKeyboardLetter: (state) => {
      state.status === "pause"
        ? (state.status = "idle")
        : (state.status = "pause");
    },
    addLetterIndex: (state, action: PayloadAction<boolean>) => {
      state.history = { ...state.history, [state.position]: action.payload };
    },
    addPositionLetter: (state) => {
      state.position++;
    },
  },
});

export const keyboardLetterActions = keyboardLetterSlice.actions;
export const keyboardLetterReducer = keyboardLetterSlice.reducer;

export const selectKeyboardLetterState = (state: RootState) =>
  state.keyboardLetter;
export const selectKeyboardLetterStateStatus = (state: RootState) =>
  state.keyboardLetter.status;
