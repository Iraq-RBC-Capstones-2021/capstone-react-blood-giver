import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
export const fetchDonors = createAsyncThunk(
  "donorStore/fetchDonorData",
  async () => {
    return await axios.get("/api/donors").then((response) => response.data);
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
