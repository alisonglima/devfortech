import { useState } from "react";
import { Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { cartStateData, removeItem } from "../../store/modules/cart/reducer";

import Card from "../card";

import styles from "./styles";
import { IProduct } from "../../types";
import CartModalButton from "./cartModalButton";

const Cart = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const cart = useSelector(cartStateData);

  const dispatch = useDispatch();

  const removeCartItem = (item: IProduct, index: number) => {
    dispatch(removeItem(index));
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <SafeAreaView style={styles.modal}>
          <View style={styles.cartButton}>
            <CartModalButton
              setShowModal={setShowModal}
              cartLength={cart.length}
              variation="close"
            />
          </View>

          {cart.length > 0 ? (
            <ScrollView>
              {cart.map((item, index) => (
                <Card
                  item={item}
                  key={index}
                  cardKey={index}
                  icon="minus"
                  action={removeCartItem}
                />
              ))}
            </ScrollView>
          ) : (
            <View style={styles.cartEmptyMessage}>
              <Text>Adicione itens ao seu carrinho.</Text>
            </View>
          )}
        </SafeAreaView>
      </Modal>
      <CartModalButton setShowModal={setShowModal} cartLength={cart.length} variation="open" />
    </View>
  );
};

export default Cart;
