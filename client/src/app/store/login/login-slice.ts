import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginDto, ILoginResponseDto, StateStatus } from "@interfaces";
import { api, API_ROUTES } from "@api";
import { LOADING_CONSTANTS, TOKENS } from "@utils";
import { RootState } from "../store";
import { accountActions } from "../account";

const name = "@@LOGIN";

interface ILoginInitialState {
  status: StateStatus;
  error: string | null;
  data: ILoginDto | null;
}

const initialState: ILoginInitialState = {
  status: "idle",
  error: null,
  data: null,
};

export const login = createAsyncThunk<ILoginResponseDto>(
  `${name}/login`,
  async (_, { getState, dispatch }) => {
    const {
      login: { data: loginData },
    } = getState() as RootState;
    const { data } = await api.post(`${API_ROUTES.login}`, loginData);
    const { tokens, account } = data as ILoginResponseDto;

    localStorage.setItem(TOKENS.ACCESS, tokens.accessToken);
    localStorage.setItem(TOKENS.REFRESH, tokens.refreshToken);

    dispatch(accountActions.setAccountData(account));

    return data;
  }
);

export const loginSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitial: (state) => {
      state = initialState;
    },
    setLoginData: (state, action: PayloadAction<ILoginDto>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<unknown>) => {})
      .addMatcher(
        (action) =>
          action.type.endsWith(LOADING_CONSTANTS.REJECTED) &&
          action.type.startsWith(name),
        (state, action) => {
          state.status = "failed";
          state.error =
            action.payload || action.error.message || "Something went wrong!";
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith(LOADING_CONSTANTS.FULFILLED) &&
          action.type.startsWith(name),
        (state, _) => {
          state.error = null;
          state.status = "succeeded";
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith(LOADING_CONSTANTS.PENDING) &&
          action.type.startsWith(name),
        (state, _) => {
          state.error = null;
          state.status = "pending";
        }
      );
  },
});

export const { reducer: loginReducer, actions: loginActions } = loginSlice;

export const selectLoginState = (state: RootState) => state.login;
