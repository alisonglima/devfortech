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
      console.log("Payload", action.payload);
      console.log("State", state.cart);

      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addNewItem } = cartData.actions;
export const cartStateData = (state: RootState) => state.cartData.cart;
export default cartData.reducer;
