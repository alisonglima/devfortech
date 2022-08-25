import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  card: {
    backgroundColor: "#ededeb",
    padding: 12,
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 12,
  },
  image: {
    height: 100,
    width: 100,
  },
  infoBox: {},
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
