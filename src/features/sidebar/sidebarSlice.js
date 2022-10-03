import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeSidebar: (state) => {
      state.show = !state.show;
    },
  },
});

export const { changeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
