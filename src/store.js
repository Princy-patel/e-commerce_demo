import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/getProductData";

export const store = configureStore({
  reducer: {
    productData: productReducer,
  },
});
