import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "shared/lib";
import { SESSION_TAG, USER_TAG } from "./tags";

export const commonApi = createApi({
  tagTypes: [SESSION_TAG, USER_TAG],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints: () => ({}),
});
