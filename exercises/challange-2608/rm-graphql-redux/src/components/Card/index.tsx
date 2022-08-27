import { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, Feather } from "@expo/vector-icons";

import { addNewFav, removeFav } from "../../store/modules/favs/reducer";

import { ICharacter } from "../../types";

import styles from "./styles";
import { addFavorite, removeFavorite } from "../../store/modules/characters/reducer";

export interface ICardProps {
  character: ICharacter;
  favKey: number;
}

function Card({ character, favKey }: ICardProps) {
  const dispatch = useDispatch();

  function handleClickFavoriteButton() {
    if (character.isFavorite) {
      dispatch(removeFavorite({ id: character.id, index: favKey }));
    } else {
      dispatch(addFavorite({ id: character.id, index: favKey }));
    }
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.characterDescription}>
        <Text style={styles.text}>{`${character.name}`}</Text>
        <Text style={styles.text}>{`${character.gender}`}</Text>
      </View>
      <View style={styles.favoriteButton}>
        <TouchableOpacity onPress={() => handleClickFavoriteButton()}>
          {character.isFavorite ? (
            <AntDesign name="heart" size={40} color="#ff0000" />
          ) : (
            <Feather name="heart" size={40} color="#ff0000" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;
