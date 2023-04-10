import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import {
  ActionCreator,
  ActionCreatorsMapObject,
  AsyncThunk,
  bindActionCreators,
} from "@reduxjs/toolkit";
import { useMemo } from "react";
import { registrationActions, registrationAsyncActions } from "./registration";
import { loginActions, login } from "./login";
import { textActions, textAsyncActions } from "./text";
import { resultActions, resultAsyncActions } from "./result";
import { accountActions } from "./account";
import { keyboardActions } from "./keyboard";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const storeActions = {
  ...registrationActions,
  ...loginActions,
  ...textActions,
  ...resultActions,
  ...accountActions,
  ...keyboardActions,
  login,
  ...registrationAsyncActions,
  ...textAsyncActions,
  ...resultAsyncActions,
};

export type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key];
};

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
  ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

export const useActions = <
  Actions extends ActionCreatorsMapObject = ActionCreatorsMapObject
>(
  actions: Actions
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
