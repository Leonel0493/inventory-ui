import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCountryModal: false,
  countries: [],
  countriesSelect: [],
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
    getCountryForSelect: (state, action) => {
      return {
        ...state,
        countriesSelect: action.payload,
      };
    },
  },
});

export const { changeCountryModal, getAllCountries, getCountryForSelect } =
  countriesSlice.actions;
export default countriesSlice.reducer;
