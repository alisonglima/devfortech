import { Platform, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import Camera from "./screens/camera";
import Maps from "./screens/maps";

function Routes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="Camera" component={Camera} />
          <Screen name="Maps" component={Maps} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});

export default Routes;
