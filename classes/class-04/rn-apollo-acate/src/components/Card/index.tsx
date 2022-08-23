import { Image, Text, View } from "react-native";

import { IProps } from "../../types";

import styles from "./styles";

function Card({ card }: IProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <View style={styles.imageDescriptionContainer}>
        <Text style={styles.text}>{`${card.name}, ${card.gender}`}</Text>
      </View>
    </View>
  );
}

export default Card;
