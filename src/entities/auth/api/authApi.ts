import { commonApi, SESSION_TAG } from "shared/api";
import { ISignInDto } from "./types";

export const authApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: [SESSION_TAG],
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
      invalidatesTags: [SESSION_TAG],
    }),
  }),
});

export const { useSignInMutation } = authApi;
