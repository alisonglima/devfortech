import { Button, Image, ScrollView, Text, View } from "react-native";

import Cart from "../../components/cart";
import { products } from "../../constants";

import styles from "./styles";

const Shop = () => {
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
                <Button title="adicionar" onPress={() => alert("Adicionado")}></Button>
              </View>
              <View style={styles.removeCartButtonContainer}>
                <Button title="remover" onPress={() => alert("Removido")}></Button>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Shop;
