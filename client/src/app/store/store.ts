import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./account";
import { keyboardReducer } from "./index";
import { loginReducer } from "./login";
import { registrationReducer } from "./registration";
import { resultReducer } from "./result";
import { textReducer } from "./text";

const reducer = {
  keyboard: keyboardReducer,
  account: accountReducer,
  text: textReducer,
  result: resultReducer,
  login: loginReducer,
  registration: registrationReducer,
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
