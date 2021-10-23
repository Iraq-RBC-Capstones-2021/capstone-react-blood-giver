import { createAsyncThunk } from "@reduxjs/toolkit";
import { defineMessage, FormattedMessage } from "react-intl";
import * as authApi from "../../firebaseApp/authApi";
import { setError, setSucces } from "../status/statusSlice";
import React from "react";

const signInSuccess = defineMessage({
  defaultMessage: "Signed in successfully",
});

const signoutSuccess = defineMessage({
  defaultMessage: "Signed out successfully",
});

export const signInWithGoogle = createAsyncThunk(
  "auth/signInGoogle",
  (_, { dispatch }) => {
    authApi
      .signInWithGoogle()
      .then(() => {
        dispatch(setSucces(signInSuccess));
      })
      .catch((err) => {
        console.log("error", err);
        dispatch(setError(err));
      });
  }
);
export const signout = createAsyncThunk("auth/signout", (_, { dispatch }) => {
  authApi
    .signout()
    .then(() => {
      dispatch(setSucces(signoutSuccess));
    })
    .catch((err) => {
      console.log("error", err);
      dispatch(setError(err));
    });
});
