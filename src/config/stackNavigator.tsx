import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "../screens/home/home";
import Albums from "../screens/albums/albums";
import Artists from "../screens/artists/artists";
import WelcomeScreen from "../screens/welcomeScreen/welcomeScreen";

export type StackNavigatorParams = {
    Home:undefined;
    Albums:undefined;
    Artists:undefined;
    WelcomeScreen:undefined
}

const screenOptionStyle = {
  headerStyle: {
      backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Albums" component={Albums} />
      <Stack.Screen name="Artists" component={Artists} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };