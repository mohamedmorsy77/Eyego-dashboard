import { fetchProducts } from "@/network/productApi";
import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
export const productAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});
export const productsSlice = createSlice({
  name: "product",
  initialState: productAdapter.getInitialState({
    loading: false,
    error: null,
  }),

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload.products)
        productAdapter.setAll(state,action.payload.products);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const productSelectors = productAdapter.getSelectors(
  (state) => state.products
);
export default productsSlice.reducer;
