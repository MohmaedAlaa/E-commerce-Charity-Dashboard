import { configureStore } from "@reduxjs/toolkit";
import { sustainabilitiesApi } from "./sustainabilitiesApi";

const store = configureStore({
  reducer: {
    [sustainabilitiesApi.reducerPath]: sustainabilitiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sustainabilitiesApi.middleware),
});

export default store;