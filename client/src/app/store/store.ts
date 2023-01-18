import { configureStore } from "@reduxjs/toolkit";
import {
  keyboardReducer,
  keyboardLetterSlice,
  keyboardLetterReducer,
} from "./index";

const reducer = {
  keyboard: keyboardReducer,
  keyboardLetter: keyboardLetterReducer,
};

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
