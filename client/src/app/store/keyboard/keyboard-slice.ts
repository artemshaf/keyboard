import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICreateResultDto,
  IKeyboardInitial,
  ILoadTextDto,
  KeyboardType,
} from "@interfaces";
import { RootState } from "@store";
import { api, API_ROUTES } from "@api";

const name = "keyboard";

export const loadText = createAsyncThunk<void, ILoadTextDto>(
  "account/login",
  async (data, { getState }) => {
    console.log(data);
    const response = await api.post(API_ROUTES.login, data);
    return response.data;
  }
);

export const loadResult = createAsyncThunk<void, ICreateResultDto>(
  "account/login",
  async (data, { getState }) => {
    console.log(data);
    const response = await api.post(API_ROUTES.login, data);
    return response.data;
  }
);

const initialState: IKeyboardInitial = {
  history: {
    correct: [],
    wrong: [],
  },
  position: 0,
  status: "idle",
  text: "",
  type: "Word",
};

export const keyboardSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitial: (state, action: PayloadAction<KeyboardType>) => {
      state = initialState;
      state.type = action.payload;
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
