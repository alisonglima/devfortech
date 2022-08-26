import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

interface ICartModalButtonProps {
  cartLength: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  variation: "open" | "close";
}

const CartModalButton = ({ cartLength, setShowModal, variation }: ICartModalButtonProps) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => setShowModal((isVisible) => !isVisible)}
        style={styles.cartButton}
      >
        <AntDesign name="shoppingcart" size={32} color="black" />
        {variation === "open" ? (
          <View style={styles.contentCart}>
            <Text style={styles.textContentCart}>{cartLength}</Text>
          </View>
        ) : (
          <Text style={styles.textClose}>Fechar</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default CartModalButton;
