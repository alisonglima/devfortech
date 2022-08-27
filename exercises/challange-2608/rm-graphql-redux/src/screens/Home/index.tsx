import { useState } from "react";
import { FlatList, Text, SafeAreaView } from "react-native";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import { addCharacters, charactersStateData } from "../../store/modules/characters/reducer";

import Card from "../../components/Card";
import INFO_PERSON from "../../queries";

import styles from "./styles";
import { ICharacter } from "../../types";

function Home() {
  const { loading, error, data } = useQuery(INFO_PERSON);
  const dispatch = useDispatch();

  if (data) {
    dispatch(addCharacters(data.characters.results));
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Text>Loading ...</Text>}
      {error && <Text>Error ...</Text>}
      {data && (
        <FlatList
          data={data.characters.results}
          renderItem={({ item, index }) => {
            return <Card character={item} favKey={index} />;
          }}
        />
      )}
    </SafeAreaView>
  );
}

export default Home;
