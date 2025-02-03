import { createSlice } from "@reduxjs/toolkit";
import { login, register, refreshUser, logout } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
      })
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
