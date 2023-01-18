import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IKeyboard } from "@interfaces";
import { RootState } from "../store";

const name = "keyboard";

const initialState: IKeyboard = {
  history: {},
  position: 0,
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
    addHistoryWordIndex: (state, action: PayloadAction<boolean | null>) => {
      state.history = { ...state.history, [state.position]: action.payload };
    },
    addPositionWord: (state) => {
      state.position++;
    },
  },
});

export const keyboardActions = keyboardSlice.actions;
export const keyboardReducer = keyboardSlice.reducer;

export const selectKeyboardState = (state: RootState) => state.keyboard;
export const selectKeyboardStateStatus = (state: RootState) =>
  state.keyboard.status;
