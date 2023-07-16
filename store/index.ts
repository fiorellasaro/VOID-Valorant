import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { valorantApi } from "../services/valorant";
import { postApi } from "../services/posts";

const rootReducer = combineReducers({
  [valorantApi.reducerPath]: valorantApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(valorantApi.middleware, postApi.middleware),
});

export default store;
