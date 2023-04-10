import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ILoginResponseDto,
  IRegisrationFirstData,
  IRegisrationSecondData,
  IRegistrationDto,
  IRegistrationResponseDto,
  StateStatus,
} from "@interfaces";
import { api, API_ROUTES } from "@api";
import { LOADING_CONSTANTS, TOKENS } from "@utils";
import { RootState } from "../store";
import { accountActions } from "../account";
import axios, { AxiosError } from "axios";

const name = "@@REGISTRATION";

export type RegisrationFormSteps = 1 | 2;

interface IRegistrationInitialState {
  status: StateStatus;
  step: RegisrationFormSteps;
  error: string | null;
  data: IRegistrationDto;
}

const initialState: IRegistrationInitialState = {
  status: "idle",
  step: 1,
  error: null,
  data: {} as IRegistrationDto,
};

export const containUser = createAsyncThunk(
  `${name}/containUser`,
  async (_, { getState, rejectWithValue, fulfillWithValue, signal }) => {
    const {
      registration: {
        data: { email },
      },
    } = getState() as RootState;
    try {
      const { data } = await api.post(API_ROUTES.containUser, { email });
      if (!!data) {
        return rejectWithValue("User with such data already exists!");
      }
    } catch (error) {
      return true;
    }
  }
);

export const registration = createAsyncThunk<IRegistrationResponseDto>(
  `${name}/registration`,
  async (_, { getState, dispatch }) => {
    const {
      registration: { data: regData },
    } = getState() as RootState;

    const response = (await api.post(
      `${API_ROUTES.registration}`,
      regData
    )) as IRegistrationResponseDto;

    const { data } = await api.post(`${API_ROUTES.login}`, regData);
    const { tokens, account } = data as ILoginResponseDto;

    localStorage.setItem(TOKENS.ACCESS, tokens.accessToken);
    localStorage.setItem(TOKENS.REFRESH, tokens.refreshToken);

    dispatch(accountActions.setAccountData(account));

    return response;
  }
);

export const registrationSlice = createSlice({
  name,
  initialState,
  reducers: {
    setInitial: (state) => {
      state = initialState;
    },
    setRegisrationError: (state) => {
      state.error = "Пользователь с такими данными существует!";
      state.status = "failed";
    },
    setRegisrationStep: (
      state,
      action: PayloadAction<RegisrationFormSteps>
    ) => {
      state.step = action.payload;
    },
    setRegisrationFirstData: (
      state,
      action: PayloadAction<IRegisrationFirstData>
    ) => {
      state.data = { ...state.data, ...action.payload };
    },
    setRegisrationSecondData: (
      state,
      action: PayloadAction<IRegisrationSecondData>
    ) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(containUser.fulfilled, (state) => {
        state.step = 2;
      })
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
          state.status = "succeeded";
          state.error = null;
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

export const { reducer: registrationReducer, actions: registrationActions } =
  registrationSlice;

export const registrationAsyncActions = {
  containUser,
  registration,
};

export const selectRegistrationState = (state: RootState) => state.registration;
export const selectRegistrationStep = (state: RootState) =>
  state.registration.step;
