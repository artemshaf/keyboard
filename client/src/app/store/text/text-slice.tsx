import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api, API_ROUTES } from "@api";
import {
  IAddTextToUserDto,
  ICreateTextDto,
  IDeleteTextFromUserDto,
  IGetAllTextsByLanguageIdDto,
} from "@interfaces";

const name = "@@TEXT";

export const deleteTextFromUser = createAsyncThunk<
  void,
  IDeleteTextFromUserDto
>(`${name}/deleteTextFromUser`, async (_, { getState }) => {
  const response = await api.post(API_ROUTES.deleteTextFromUser, {
    email: "test3@gmail.com",
    password: "test3",
  });
  return response.data;
});

export const addTextToUser = createAsyncThunk<void, IAddTextToUserDto>(
  `${name}/addTextToUser`,
  async (_, { getState }) => {
    const response = await api.post(API_ROUTES.addTextToUser, {
      email: "test3@gmail.com",
      password: "test3",
    });
    return response.data;
  }
);

export const createText = createAsyncThunk<void, ICreateTextDto>(
  `${name}/createText`,
  async (textData, { getState }) => {
    const { data } = await api.post(API_ROUTES.createText, textData);
    console.log(data);

    return data;
  }
);

export const getAllTextsByLanguageId = createAsyncThunk<
  void,
  IGetAllTextsByLanguageIdDto
>(`${name}/login`, async (_, { getState }) => {
  const response = await api.post(API_ROUTES.getAllTextsByLanguageId, {
    email: "test3@gmail.com",
    password: "test3",
  });
  return response.data;
});

export const getAllTexts = createAsyncThunk<void, void>(
  `${name}/login`,
  async (_, { getState }) => {
    const response = await api.post(API_ROUTES.getAllTexts, {
      email: "test3@gmail.com",
      password: "test3",
    });
    return response.data;
  }
);

const initialState: unknown[] = [];

const textSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTextToUser.fulfilled, (state, action) => {
      console.log("action payload ->", action.payload);
    });
  },
});

export const textAsyncActions = {
  deleteTextFromUser,
  createText,
  addTextToUser,
};

export const { reducer: textReducer, actions: textActions } = textSlice;
