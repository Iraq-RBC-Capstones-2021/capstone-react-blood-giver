import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    handleOpenAuthModal: (state) => {
      state.authModalOpen = true;
    },
    handleCloseAuthModal: (state) => {
      state.authModalOpen = false;
    },
  },
});

export const { handleCloseAuthModal, handleOpenAuthModal } =
  settingSlice.actions;
export default settingSlice;
