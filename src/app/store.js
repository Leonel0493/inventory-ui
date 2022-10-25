import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import locationReducer from "../features/locationModals/locationSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    location: locationReducer,
  },
});
