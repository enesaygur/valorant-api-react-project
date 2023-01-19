import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoints from "api/Api";

export const getGears = createAsyncThunk("gears", async (lang) => {
  const res = await endpoints.getGears(lang);
  if (res) {
    return res.data;
  }
  return false;
});

export const gearsSlice = createSlice({
  name: "gears",
  initialState: {
    gears: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGears.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGears.fulfilled, (state, action) => {
        state.gears = action.payload;
        state.loading = false;
      });
  },
});

export default gearsSlice.reducer;
