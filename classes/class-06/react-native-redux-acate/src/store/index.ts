import { configureStore } from "@reduxjs/toolkit";
import cartData from "./modules/cart/reducer";

const store = configureStore({
  reducer: {
    cartData: cartData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
