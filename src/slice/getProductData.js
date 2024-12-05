import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "users/fetchByIdStatus",
  async (thunkAPI) => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

const initialState = {
  data: [],
  value: 0,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
