import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoints from "api/Api";

export const getMaps = createAsyncThunk("maps", async () => {
  const res = await endpoints.getMaps();
  if (res) {
    return res.data;
  }
  return false;
});

export const mapsSlice = createSlice({
  name: "maps",
  initialState: {
    maps: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMaps.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMaps.fulfilled, (state, action) => {
        state.maps = action.payload;
        state.loading = false;
      });
  },
});

export default mapsSlice.reducer;
