import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image } from "react-native";
import api from "../services/Api";

interface IPokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: IPokemonTypes[];
}

interface IPokemonTypes {
  type: {
    name: string;
  };
}

const PokeCard: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    api.get("/1").then((res) => {
      setPokemon(res.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pokeContainer}>
        <Image
          source={{ uri: pokemon?.sprites.other["official-artwork"].front_default }}
          style={styles.image}
        />
        <Text>{pokemon?.name || "unkown pokemon"}</Text>
        <Text>{pokemon?.types[0].type.name || "unkown type"}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  pokeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default PokeCard;
