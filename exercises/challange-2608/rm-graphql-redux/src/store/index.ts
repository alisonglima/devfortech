import { configureStore } from "@reduxjs/toolkit";
import favsData from "./modules/favs/reducer";
import charactersData from "./modules/characters/reducer";

const store = configureStore({
  reducer: {
    favsData,
    charactersData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
