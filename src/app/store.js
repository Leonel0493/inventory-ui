import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import countriesSlice from "../features/countries/countriesSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    countries: countriesSlice,
  },
});
