import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoints from "api/Api";

export const getAgents = createAsyncThunk("agents", async () => {
  const res = await endpoints.getAgents();
  if (res) {
    return res.data;
  }
  return false;
});

export const agentsSlice = createSlice({
  name: "agents",
  initialState: {
    agents: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAgents.fulfilled, (state, action) => {
        state.agents = action.payload;
        state.loading = false;
      });
  },
});

export default agentsSlice.reducer;
