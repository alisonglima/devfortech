import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import Shop from "./screens/shop";
import store from "./store";

import styles from "./styles";

function AppStartup() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Shop />
      </SafeAreaView>
    </Provider>
  );
}

export default AppStartup;
