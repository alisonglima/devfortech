import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function Home() {
  const navigation = useNavigation();

  function handleScreen(screenName: any) {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!</Text>

      <Button title="Home" onPress={() => handleScreen("Home")} />
      <Button title="Camera" onPress={() => handleScreen("Camera")} />
      <Button title="Maps" onPress={() => handleScreen("Maps")} />
    </View>
  );
}

export default Home;
