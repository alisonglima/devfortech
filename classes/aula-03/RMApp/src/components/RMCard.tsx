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
  Pressable,
  Modal,
} from "react-native";
import api from "../services/Api";
import { ICharacter } from "../types";

const RMCard: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [characterDetails, setCharacterDetails] = useState<ICharacter>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.get("/").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  const getCharacterData = (id: Number) => {
    if (characters) {
      const character = characters.find((item) => item.id === id);
      setCharacterDetails(character);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {characters?.map((item, index) => (
          <View key={index} style={styles.charactersCard}>
            <Modal
              animationType="slide"
              visible={showModal}
              onRequestClose={() => setShowModal(!showModal)}
            >
              <View style={styles.modal}>
                <Text>{characterDetails?.name}</Text>
                <Pressable onPress={() => setShowModal(!showModal)}>
                  <Text>Fechar</Text>
                </Pressable>
              </View>
            </Modal>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                getCharacterData(item.id);
                setShowModal(!showModal);
              }}
            >
              <Text>Ver mais</Text>
            </Pressable>
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
    backgroundColor: "#fff",
  },
  charactersCard: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#77B14F",
    borderRadius: 10,
    borderColor: "#05AEC8",
    borderWidth: 5,
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
  button: {
    backgroundColor: "#05AEC8",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#77B14F",
  },
});

export default RMCard;
