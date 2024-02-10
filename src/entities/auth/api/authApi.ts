import { commonApi } from "shared/api";
import {
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
} from "./types";

export const authApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<ISignInResponse, ISignInRequest>({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),
    signUp: build.mutation<ISignUpResponse, ISignUpRequest>({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
