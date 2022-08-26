import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

import { ICart, IProduct } from "../../../types";

interface ICartDataState {
  cart: IProduct[];
}

const initialState = {
  cart: [],
} as ICartDataState;

const cartData = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addNewItem: (state: ICart, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeItem: (state: ICart, action: PayloadAction<number>) => {
      state.cart.splice(action.payload, 1);
      state.cart = state.cart;
    },
  },
});

export const { addNewItem, removeItem } = cartData.actions;
export const cartStateData = (state: RootState) => state.cartData.cart;
export default cartData.reducer;
