import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError, setSucces } from "../status/statusSlice";
import { defineMessage } from "react-intl";
const successMsg = defineMessage({
  defaultMessage: "Request sent !",
});

const faliureMsg = defineMessage({
  defaultMessage: "Request failed !",
});

export const createDonor = createAsyncThunk(
  "donors/create",
  ({ donor, goToNextStep }, { dispatch }) => {
    axios
      .post("/api/donor", donor)
      .then(() => {
        dispatch(setSucces(successMsg));
        goToNextStep();
      })
      .catch(() => {
        dispatch(setError(faliureMsg));
      });
  }
);
