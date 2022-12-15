import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IKeyboard } from "@interfaces";
import { RootState } from "../store";

const name = "keyboard";

const initialState: IKeyboard = {
  history: {
    correct: [],
    wrong: [],
  },
  status: "idle",
  text: "",
};

export const keyboardSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitial: (state) => {
      state = initialState;
    },
    togglePause: (state) => {
      state.status === "pause"
        ? (state.status = "idle")
        : (state.status = "pause");
    },
    addCorrectWordIndex: (state, action: PayloadAction<number>) => {
      state.history.correct.push(action.payload);
    },
    addWrongWordIndex: (state, action: PayloadAction<number>) => {
      state.history.wrong.push(action.payload);
    },
  },
});

export const keyboardActions = keyboardSlice.actions;
export const keyboardReducer = keyboardSlice.reducer;

export const selectKeyboardState = (state: RootState) => state.keyboard;
export const selectKeyboardStateStatus = (state: RootState) =>
  state.keyboard.status;
