import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// 🔥 Type of entire Redux state
export type RootState = ReturnType<typeof appStore.getState>;

// 🔥 Type of dispatch
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
