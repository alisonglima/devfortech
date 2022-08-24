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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  image: {
    height: 100,
    width: 100,
    marginLeft: 0,
  },
  infoBox: {
    margin: 8,
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
  addCart: {
    color: "#000",
  },
  removeCart: {
    color: "#000",
  },
});
