import { createSlice } from "@reduxjs/toolkit";
export const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: localStorage.getItem("lang")
      ? JSON.parse(localStorage.getItem("lang"))
      : "tr",
  },
  reducers: {
    setLang: (state,action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", JSON.stringify(state.lang));
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
