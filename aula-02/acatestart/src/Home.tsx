import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  View,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image style={styles.profileImage} source={require("./img/mussum.jpeg")} />
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
            Aenean aliquam molestie leo, vitae iaculis nisl.Viva Forevis aptent taciti sociosqu ad
            litora torquent.
          </Text>
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
            Aenean aliquam molestie leo, vitae iaculis nisl.Viva Forevis aptent taciti sociosqu ad
            litora torquent.
          </Text>
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
            Aenean aliquam molestie leo, vitae iaculis nisl.Viva Forevis aptent taciti sociosqu ad
            litora torquent.
          </Text>
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
            Aenean aliquam molestie leo, vitae iaculis nisl.Viva Forevis aptent taciti sociosqu ad
            litora torquent.
          </Text>
          <Text style={styles.text}>
            Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
            Aenean aliquam molestie leo, vitae iaculis nisl.Viva Forevis aptent taciti sociosqu ad
            litora torquent.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#999",
  },
  text: {
    fontSize: 20,
    color: "#000",
    margin: 10,
    textAlign: "justify",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
  },
});

export default Home;
