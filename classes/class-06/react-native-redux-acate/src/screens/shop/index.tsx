import React from "react";
import { ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";

import Cart from "../../components/cart";
import Card from "../../components/card";

import { products } from "../../constants";
import { IProduct } from "../../types";

import { addNewItem } from "../../store/modules/cart/reducer";

import styles from "./styles";

const Shop = () => {
  const dispatch = useDispatch();

  const addCartItem = (item: IProduct, index: number) => {
    dispatch(addNewItem(item));
  };

  return (
    <View style={styles.container}>
      <Cart />
      <ScrollView>
        {products.map((item, index) => (
          <Card item={item} key={index} cardKey={index} icon="plus" action={addCartItem} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Shop;
