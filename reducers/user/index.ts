import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    signupData: {},
    info: {},
  },
  reducers: {
    setSignupData: (state) => {
      state.signupData;
    },
    loadUserInfo: (state) => {
      state.info = {};
    },
  },
});

export const { loadUserInfo } = userSlice.actions;

export default userSlice.reducer;
