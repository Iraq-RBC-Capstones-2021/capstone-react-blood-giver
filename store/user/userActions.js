import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../firebaseApp/authApi";

export const signInWithGoogle = createAsyncThunk(
  "auth/signInGoogle",
  authApi.signInWithGoogle
);
export const signout = createAsyncThunk("auth/signout", authApi.signout);
