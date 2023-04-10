import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, API_ROUTES } from "@api";
import {
  ICreateResultDto,
  IGetResultByParamsDto,
  IGetResultDto,
} from "@interfaces";

export const addResultToUser = createAsyncThunk<void, ICreateResultDto>(
  "account/addResultToUser",
  async (_, { getState }) => {
    const response = await api.post(API_ROUTES.addResultToUser, {
      email: "test3@gmail.com",
      password: "test3",
    });
    return response.data;
  }
);

export const getStatisticByUserId = createAsyncThunk<unknown, number>(
  "account/addResultToUser",
  async (userId, { getState }) => {
    const { data } = await api.get(API_ROUTES.getStatistic + userId);

    return data;
  }
);

export const getResultById = createAsyncThunk<void, IGetResultDto>(
  "account/getResultById",
  async (_, { getState }) => {
    const response = await api.post(API_ROUTES.getResultById, {
      email: "test3@gmail.com",
      password: "test3",
    });
    return response.data;
  }
);

export const getResultByParams = createAsyncThunk<void, IGetResultByParamsDto>(
  "account/getResultByParams",
  async (_, { getState }) => {
    const response = await api.post(API_ROUTES.getResultByParams, {
      email: "test3@gmail.com",
      password: "test3",
    });
    return response.data;
  }
);

const name = "@@RESULT";
const initialState: unknown[] = [];

const resultSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addResultToUser.fulfilled, (state, action) => {
      console.log("action payload ->", action.payload);
    });
  },
});

export const resultAsyncActions = {
  addResultToUser,
  getStatisticByUserId,
  getResultById,
  getResultByParams,
};

export const { actions: resultActions, reducer: resultReducer } = resultSlice;
