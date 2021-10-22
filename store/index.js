import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import settingSlice from "./setting/settingSlice";
import userSlice from "./user/userSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [settingSlice.name]: settingSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
export const selectUser = (state) => state?.[userSlice.name]?.user;
