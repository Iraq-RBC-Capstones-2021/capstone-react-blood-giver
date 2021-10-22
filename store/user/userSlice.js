import { createSlice } from "@reduxjs/toolkit";
import { signInWithGoogle, signout } from "./userActions";

const initialState = {
  loading: false,
  error: "",
  success: "",
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload || {};
    },
  },
  extraReducers: {
    [signInWithGoogle.pending]: (state) => {
      state.loading = true;
      state.success = "";
      state.error = "";
    },
    [signInWithGoogle.fulfilled]: (state) => {
      state.loading = false;
      state.success = "Signed in successfully";
      state.error = "";
    },
    [signInWithGoogle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    },
    [signout.pending]: (state) => {
      state.loading = true;
      state.success = "";
      state.error = "";
    },
    [signout.fulfilled]: (state) => {
      state.loading = false;
      state.success = "Signed out successfully";
      state.error = "";
    },
    [signout.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error?.message;
    },
  },
});

export const { setLoading, setError, setUser, setSuccess } = userSlice.actions;
export default userSlice;
