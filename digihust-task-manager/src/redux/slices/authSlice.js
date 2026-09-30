import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("digihust_user");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: !!savedUser,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem(
        "digihust_user",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("digihust_user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;