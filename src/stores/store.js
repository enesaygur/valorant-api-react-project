import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "stores/slices/theme";
import mapsReducer from "stores/slices/maps";
import agentsReducer from "./slices/agents";
import weaponsReducer from "./slices/weapons";
import gearsReducer from "./slices/gears";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    maps: mapsReducer,
    agents:agentsReducer,
    weapons:weaponsReducer,
    gears:gearsReducer,
  },
});
