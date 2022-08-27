import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

import { IFavs, ICharacter } from "../../../types";

type IPayloadAction = [ICharacter, number?];

const initialState = {
  characters: [],
} as IFavs;

const favsData = createSlice({
  name: "favsData",
  initialState,
  reducers: {
    addNewFav: (state: IFavs, action: PayloadAction<ICharacter>) => {
      state.characters = [...state.characters, action.payload];
    },
    removeFav: (state: IFavs, action: PayloadAction<IPayloadAction>) => {
      const [item, index] = action.payload;
      if (index) {
        state.characters.splice(index, 1);
        state.characters = state.characters;
      } else {
        state.characters = state.characters.filter((character) => character.id !== item.id);
      }
    },
  },
});

export const { addNewFav, removeFav } = favsData.actions;
export const favsStateData = (state: RootState) => state.favsData.characters;
export default favsData.reducer;
