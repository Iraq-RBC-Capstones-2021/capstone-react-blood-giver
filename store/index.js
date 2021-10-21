import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./counter/counterSlice";
import donorsSlice from "../store/donors";
const makeStore = () =>
  configureStore({
    reducer: {
      donors: donorsSlice,
      [counterSlice.name]: counterSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
export const selectCounter = () => (state) => state?.[counterSlice.name]?.value;
