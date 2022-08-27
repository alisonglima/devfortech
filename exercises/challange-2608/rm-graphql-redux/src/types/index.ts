export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  image: string;
  isFavorite: boolean;
}

export interface IFavs {
  characters: ICharacter[];
}

export interface ICharacterDataState {
  characters: ICharacter[];
  favorites: Array<number>;
}
