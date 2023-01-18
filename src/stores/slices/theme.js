import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode"))
      : false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
