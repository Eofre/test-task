import { createSlice } from "@reduxjs/toolkit";

interface ISessionSliceState {
  accessToken: string | undefined;
}

const initialState: ISessionSliceState = {
  accessToken: undefined,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    logout: () => initialState,
    setToken: (state: ISessionSliceState, { payload }) => {
      state.accessToken = payload.accessToken;
    },
  },
});

export const { logout, setToken } = sessionSlice.actions;
