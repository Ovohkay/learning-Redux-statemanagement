import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const ReduxState = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, actions) => {
      state.current = actions.payload;
    },
    logoutUser: (state) => {
      state.current = null;
    },
  },
});

export const { logoutUser, loginUser } = ReduxState.actions;
export default ReduxState.reducer;

