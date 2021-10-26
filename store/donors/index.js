import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError, setSucces } from "../status/statusSlice";

const successMsg = defineMessage({
  defaultMessage: "Request sent !",
});

const faliureMsg = defineMessage({
  defaultMessage: "Request failed !",
});

export const createDonor = createAsyncThunk(
  "donors/create",
  (donor, { dispatch }) => {
    axios
      .post("/api/donors", donor)
      .then(() => {
        dispatch(setSucces(successMsg));
      })
      .catch(() => {
        dispatch(setError(faliureMsg));
      });
  }
);
