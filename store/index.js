import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import donorSlice from "./donors/donorSlice";
import settingSlice from "./setting/settingSlice";
import statusSlice from "./status/statusSlice";
import userSlice from "./user/userSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      donorsStore: donorSlice,
      [userSlice.name]: userSlice.reducer,
      [settingSlice.name]: settingSlice.reducer,
      [statusSlice.name]: statusSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
export const selectUser = (state) => state?.[userSlice.name]?.user;
