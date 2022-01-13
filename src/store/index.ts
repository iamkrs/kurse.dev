import { configureStore, ThunkAction, Action, Store } from "@reduxjs/toolkit";

import appReducer from "./slices/app";

export const createStore = (preloadedState: { app: AppState }) => {
  return configureStore({
    reducer: {
      app: appReducer,
    },
    preloadedState,
  });
};

let store: any;
export const initialiseStore = (preloadedState: { app: AppState }) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

// const store = createStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;
