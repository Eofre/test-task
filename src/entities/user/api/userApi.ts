import { commonApi } from "shared/api";
import { IFetchAllUsersResponse, IUserResponse } from "./types";

export const userApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    fetchAllUsers: build.query<
      IFetchAllUsersResponse,
      { per_page: number; page: number }
    >({
      query: ({ per_page, page }) => ({
        url: `/users`,
        method: "GET",
        params: {
          per_page,
          page,
        },
      }),
    }),
    getUserById: build.query<IUserResponse, number>({
      query: (id: number) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchAllUsersQuery, useGetUserByIdQuery } = userApi;
