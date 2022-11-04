import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  regions: [],
};

const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {
    changeRegionModal: (state) => {
      state.showModal = !state.showModal;
    },
    loadRegions: (state, action) => {
      return {
        ...state,
        regions: action.payload,
      };
    },
  },
});

export const { changeRegionModal, loadRegions } = regionsSlice.actions;
export default regionsSlice.reducer;
