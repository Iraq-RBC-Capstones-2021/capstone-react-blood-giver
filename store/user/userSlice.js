import { createSlice } from "@reduxjs/toolkit";

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
    setUser: (state, action) => {
      state.user = action.payload || {};
    },
  },
});

export const { setLoading, setUser } = userSlice.actions;
export default userSlice;
