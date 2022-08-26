import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { IProduct } from "../../types";

import styles from "./styles";

interface ICardProps {
  item: IProduct;
  cardKey: number;
  icon: keyof typeof AntDesign.glyphMap;
  action(item: IProduct, index: number): void;
}

const Card = ({ item, cardKey, icon, action }: ICardProps) => {
  return (
    <View key={cardKey} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.brandName}>{item.brand}</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.addCartButtonContainer}>
          <TouchableOpacity onPress={() => action(item, cardKey)}>
            <AntDesign name={icon} size={24} color="#000540" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
