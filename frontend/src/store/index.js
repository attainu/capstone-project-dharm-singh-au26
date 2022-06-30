import { createSlice, configureStore } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      console.log("hello");
      state.isLoggedIn = true;
      console.log("exit");
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
export const authActions = authSlice.actions;
// export default authSlice.reducer;
export const store = configureStore({
  reducer: authSlice.reducer,
});
