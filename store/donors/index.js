import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const createDonor = createAsyncThunk("donors/create", async (donor) => {
  await axios
    .post("/api/donors", donor.values)
    .then(() => {
      donor.onSuccess();
    })
    .catch(() => {
      donor.onFailure();
    });
});

const donorsSlice = createSlice({
  name: "donors",
  initialState: {
    status: "idle",
  },
  reducers: {
    registerDonor: (state) => {
      state.status = "success";
    },
  },
  extraReducers: {
    [createDonor.pending]: (state) => {
      state.status = "idle";
    },
    [createDonor.fulfilled]: (state) => {
      state.status = "success";
    },
  },
});
//export const {} = donorsSlice.actions;
export default donorsSlice.reducer;
