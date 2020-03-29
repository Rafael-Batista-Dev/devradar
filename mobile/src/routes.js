import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Mapa from "./pages/Main";
import Perfil from "./pages/Profile";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Mapa" component={Mapa} />
        <AppStack.Screen name="Perfil" component={Perfil} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
