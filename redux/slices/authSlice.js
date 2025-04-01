import { login, register } from "@/network/authApi";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: "",
    loading: false,
    error: null,
  },

  reducers: {
    logOut: (state) => {
      state.token= "";
      state.user = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {})
      .addCase(register.fulfilled, (state, action) => {})
      .addCase(register.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {logOut} = authSlice.actions
export { login };
export default authSlice.reducer;
