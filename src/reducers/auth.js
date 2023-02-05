import { createSlice } from "@reduxjs/toolkit";

import { login, register, logout } from "../actions/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      return (state = action.payload.success);
    });
    builder.addCase(register.fulfilled, (state, action) => {
      return (state);
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      return (state = false);
    });
  }
});

export default authSlice;