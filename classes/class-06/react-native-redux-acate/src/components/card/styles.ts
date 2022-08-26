import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  card: {
    backgroundColor: "#ededeb",
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 12,
    width: width * 0.9,
  },
  image: {
    height: 100,
    width: 100,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  brandName: {
    fontSize: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addCartButtonContainer: {
    paddingVertical: 4,
  },
  removeCartButtonContainer: {},
  buttonsContainer: {
    justifyContent: "center",
  },
});
