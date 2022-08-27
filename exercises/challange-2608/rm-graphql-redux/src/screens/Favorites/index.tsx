import { FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import Card from "../../components/Card";
import { charactersStateData, favoritesStateData } from "../../store/modules/characters/reducer";

import styles from "./styles";

function Favorites() {
  const favIds = useSelector(favoritesStateData);
  const characters = useSelector(charactersStateData).filter((character) =>
    favIds.includes(character.id)
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item, index }) => {
          return <Card character={item} favKey={index} />;
        }}
      />
    </SafeAreaView>
  );
}

export default Favorites;
