import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoints from "api/Api";

export const getWeapons = createAsyncThunk("weapons", async () => {
  const res = await endpoints.getWeapons();
  if (res) {
    return res.data;
  }
  return false;
});

export const weaponsSlice = createSlice({
  name: "weapons",
  initialState: {
    weapons: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeapons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeapons.fulfilled, (state, action) => {
        state.weapons = action.payload;
        state.loading = false;
      });
  },
});

export default weaponsSlice.reducer;
