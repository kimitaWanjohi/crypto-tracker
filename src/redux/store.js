import { configureStore } from "@reduxjs/toolkit";
import cryptosReducer from "./cryptos/slice";

export default configureStore({
  reducer: {
    cryptos: cryptosReducer,
  },
});
