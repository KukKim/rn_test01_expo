import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    signupData: {},
    info: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
    loadUserInfo: (state) => {
      state.info = {};
    },
  },
});

export const { setUserInfo, loadUserInfo } = userSlice.actions;

export default userSlice.reducer;
