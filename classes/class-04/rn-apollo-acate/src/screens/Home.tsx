import { useQuery } from "@apollo/client";
import { FlatList, Text, SafeAreaView } from "react-native";

import Card from "../components/Card";
import INFO_PERSON from "../queries";

function Home() {
  const { loading, error, data } = useQuery(INFO_PERSON);

  return (
    <SafeAreaView>
      {loading && <Text>Loading ...</Text>}
      {error && <Text>Error ...</Text>}
      {data && (
        <FlatList data={data.characters.results} renderItem={({ item }) => <Card card={item} />} />
      )}
    </SafeAreaView>
  );
}

export default Home;
