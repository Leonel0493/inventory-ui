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
    getAllRegions: (state, action) => {
      return {
        ...state,
        regions: action.payload,
      };
    },
  },
});

export const { changeRegionModal, getAllRegions } = regionsSlice.actions;
export default regionsSlice.reducer;
