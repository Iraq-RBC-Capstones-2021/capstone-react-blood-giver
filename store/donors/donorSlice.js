import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
export const fetchDonors = createAsyncThunk(
  "donorStore/fetchDonorData",
  async () => {
    const res = await fetch(`http://localhost:3000/api/donors`);
    return res.json();
  }
);
const moviesSlice = createSlice({
  name: "moviesREducer",
  initialState: {
    donors: [],
    loading: true,
  },
  extraReducers: {
    [fetchDonors.pending](state) {
      state.loading = true;
    },
    [fetchDonors.fulfilled](state, action) {
      state.donors = action.payload;
      state.loading = false;
    },
    [HYDRATE]: (state, action) => {
      state.donors = action.payload.donorsStore.donors;
      state.loading = false;
    },
  },
});
export default moviesSlice.reducer;
