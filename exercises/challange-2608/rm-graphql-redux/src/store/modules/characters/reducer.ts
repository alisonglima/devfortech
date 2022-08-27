import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

import { ICharacterDataState, ICharacter } from "../../../types";

interface IPayloadActionFavorite {
  id: number;
  index: number;
}

const initialState = {
  characters: [],
  favorites: [],
} as ICharacterDataState;

const charactersData = createSlice({
  name: "charactersData",
  initialState,
  reducers: {
    addCharacters: (state: ICharacterDataState, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload.map((character) => {
        return (character = {
          ...character,
          isFavorite: false,
        });
      });
    },
    addFavorite: (state: ICharacterDataState, action: PayloadAction<IPayloadActionFavorite>) => {
      const character = state.characters.find((character) => character.id === action.payload.id);
      if (character) {
        character.isFavorite = true;
        state.characters[action.payload.index] = character;
        state.favorites.push(action.payload.id);
      }
    },
    removeFavorite: (state: ICharacterDataState, action: PayloadAction<IPayloadActionFavorite>) => {
      state.favorites.splice(action.payload.index, 1);
      const characterIndex = state.characters.findIndex(
        (character) => character.id === action.payload.id
      );
      if (characterIndex) {
        state.characters[characterIndex].isFavorite = false;
      }
    },
  },
});

export const { addCharacters, addFavorite, removeFavorite } = charactersData.actions;
export const charactersStateData = (state: RootState) => state.charactersData.characters;
export const favoritesStateData = (state: RootState) => state.charactersData.favorites;
export default charactersData.reducer;
