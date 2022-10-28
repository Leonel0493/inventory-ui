import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCountryModal: false,
  countries: [],
};

export const countriesSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    changeCountryModal: (state) => {
      state.showCountryModal = !state.showCountryModal;
    },
    getAllCountries: (state, action) => {
      return {
        ...state,
        countries: action.payload,
      };
    },
  },
});

export const { changeCountryModal, getAllCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
