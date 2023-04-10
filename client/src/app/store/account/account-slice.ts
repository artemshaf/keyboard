import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, API_ROUTES } from "@api";
import { RootState } from "../store";
import { IAccount, StateStatus } from "@interfaces";

const name = "@@ACCOUNT";

export interface IAccountInitial {
  account: IAccount | null;
  isEntered: boolean;
  status: StateStatus;
}

const initialState: IAccountInitial = {
  account: null,
  isEntered: false,
  status: "idle",
};

const accountSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitial: (state) => {
      state = initialState;
    },
    setAccountData: (state, action: PayloadAction<IAccount>) => {
      state.account = action.payload;
      state.isEntered = true;
    },
  },
  extraReducers: (builder) => {},
});

export const { actions: accountActions, reducer: accountReducer } =
  accountSlice;

export const selectAccountState = (state: RootState) => state.account;
