import { combineReducers } from "@reduxjs/toolkit";

import { commonApi } from "shared/api";

export const rootReducer = combineReducers({
  // [sessionSlice.name]: sessionSlice.reducer,
  [commonApi.reducerPath]: commonApi.reducer,
});
