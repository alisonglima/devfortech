import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 5,
  },
  cartButton: {
    zIndex: 1,
    width: "100%",
    alignItems: "flex-end",
  },
  modal: {
    width: width,
    height: height,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cartEmptyMessage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
