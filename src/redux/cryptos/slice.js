import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getCryptos from "../../api/cryptos";

export const fetchCryptos = createAsyncThunk(
  "cryptos/fetchCryptos",
  async () => {
    const response = await getCryptos();
    return response;
  }
);

const cryptosSlice = createSlice({
  name: "cryptos",
  initialState: {
    cryptos: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.status = "success";
        const cryptos = action.payload;
        state.cryptos = Object.values(cryptos.crypto);
      })
      .addCase(fetchCryptos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default cryptosSlice.reducer;
