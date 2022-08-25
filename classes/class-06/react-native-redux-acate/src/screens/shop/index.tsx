import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import Cart from "../../components/cart";
import { products } from "../../constants";

import styles from "./styles";
import { IProduct } from "../../types";
import { addNewItem } from "../../store/modules/cart/reducer";

const Shop = () => {
  const dispatch = useDispatch();

  const addCartItem = (item: IProduct) => {
    dispatch(addNewItem(item));
  };

  return (
    <View style={styles.container}>
      <Cart />
      <ScrollView>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoBox}>
              <Text style={styles.productName} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.brandName}>{item.brand}</Text>
              <Text style={styles.price}>
                {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
                  item.price
                )}
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.addCartButtonContainer}>
                <TouchableOpacity onPress={() => addCartItem(item)}>
                  <AntDesign name="plus" size={24} color="blue" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Shop;
