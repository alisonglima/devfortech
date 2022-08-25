import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { cartStateData } from "../../store/modules/cart/reducer";

import styles from "./styles";
import { useState } from "react";

const Cart = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const cart = useSelector(cartStateData);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <AntDesign name="shoppingcart" size={32} color="black" />
            <Text>Fechar</Text>
          </TouchableOpacity>

          {cart.length > 0 ? (
            <View>
              {cart.map((item) => (
                <View key={item.id}>
                  <Text>{item.name}</Text>
                </View>
              ))}
            </View>
          ) : (
            <View>
              <Text>Adicione itens ao seu carrinho</Text>
            </View>
          )}
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setShowModal(!showModal)}>
        <AntDesign name="shoppingcart" size={32} color="black" />
      </TouchableOpacity>

      <View style={styles.contentCart}>
        <Text style={styles.textContentCart}>{cart.length}</Text>
      </View>
    </View>
  );
};

export default Cart;
