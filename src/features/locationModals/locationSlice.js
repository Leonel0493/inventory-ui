import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCountryModal: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    changeCountryModal: (state) => {
      state.showCountryModal = !state.showCountryModal;
    },
  },
});

export const { changeCountryModal } = locationSlice.actions;
export default locationSlice.reducer;
