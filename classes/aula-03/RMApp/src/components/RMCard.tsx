import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import api from "../services/Api";
import { ICharacter } from "../types";

const RMCard: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>();

  useEffect(() => {
    api.get("/").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {characters?.map((item, index) => (
          <View key={index} style={styles.charactersContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#77B14F",
  },
  charactersContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderColor: "#05AEC8",
    borderRadius: 10,
    backgroundColor: "#05AEC8",
    paddingBottom: 10,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height * 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default RMCard;
