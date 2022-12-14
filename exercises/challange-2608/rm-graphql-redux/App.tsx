import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";

import client from "./src/service";
import store from "./src/store";

import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ focused, color }) => <Feather name="home" color={color} size={24} />,
              }}
            />
            <Tab.Screen
              name="Favorites"
              component={Favorites}
              options={{
                tabBarIcon: ({ focused, color }) => (
                  <Feather name="heart" color={color} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </ApolloProvider>
  );
}
