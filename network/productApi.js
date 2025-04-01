import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "get/product",
  async ({skip=0 ,limit = 10}, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?skip=${skip}&limit=${limit}&select=title,description,category,price,rating,thumbnail`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
