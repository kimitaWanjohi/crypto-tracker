import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mapCountryAirPollution from "../../api/airpollution";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchAirPollution = createAsyncThunk(
  "airpollution/fetchAirPollution",
  async () => {
    const response = await mapCountryAirPollution();
    return response;
  }
);

const airPollutionSlice = createSlice({
  name: "airpollution",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirPollution.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAirPollution.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAirPollution.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default airPollutionSlice.reducer;
