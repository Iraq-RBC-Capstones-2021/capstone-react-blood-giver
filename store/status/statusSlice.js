import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    error: "",
    success: "",
  },
  reducers: {
    setSucces: (state, { payload }) => {
      state.success = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setSucces, setError } = statusSlice.actions;

export default statusSlice;
