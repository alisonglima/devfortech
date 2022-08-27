import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  card: {
    height: height * 0.5,
    width: width * 0.9,

    margin: 16,
    marginBottom: 2,
    padding: 16,
    paddingBottom: 32,

    backgroundColor: "#fff",

    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 2,
    elevation: 2,
    width: "100%",
    height: "100%",
  },
  characterDescription: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginTop: 2,
  },
  favoriteButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
