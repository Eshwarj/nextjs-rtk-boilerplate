import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";

import { appServiceApi } from "@/lib/services/appServiceApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const makeStore = () =>
  configureStore({
    reducer: {
      [appServiceApi.reducerPath]: appServiceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(appServiceApi.middleware),
    devTools: true,
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

setupListeners(makeStore().dispatch);
