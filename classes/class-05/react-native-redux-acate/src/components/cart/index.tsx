import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const Cart = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("Carrinho")}>
        <AntDesign name="shoppingcart" size={32} color="black" />
      </TouchableOpacity>

      <View style={styles.contentCart}>
        <Text style={styles.textContentCart}>0</Text>
      </View>
    </View>
  );
};

export default Cart;
