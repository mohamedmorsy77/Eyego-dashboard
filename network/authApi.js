import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    console.log(formData);
    try {
      const res = await axios.post("http://localhost:5001/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res.data);
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data;
      return rejectWithValue(errorMessage)
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5001/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
