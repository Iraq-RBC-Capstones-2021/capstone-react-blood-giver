import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const createDonor = createAsyncThunk("donors/create", async (donor) => {
  await axios.post("/api/donors", donor);
});

const donorsSlice = createSlice({
  name: "donors",
  initialState: {
    status: "idle",
  },

  extraReducers: {
    [createDonor.pending]: (state) => {
      state.status = "loading";
    },
    [createDonor.fulfilled]: (state) => {
      state.status = "success";
    },
  },
});

export default donorsSlice.reducer;
