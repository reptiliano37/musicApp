
import React from "react";
import Home from '../screens/home/home';
import Albums from '../screens/albums/albums';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Artists from "../screens/artists/artists";
import { MainStackNavigator } from "./stackNavigator";
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={
            {   
            headerShown: false,
            tabBarActiveTintColor: "#17f832",
            tabBarInactiveTintColor: 'gray',
             }}>
          <Tab.Screen name="Home" component={Home} options={{
              tabBarIcon: ({focused }) => (
                <Icon
                  name={"home"}
                  color={focused ?  "#17f832"  : "gray"}
                  size={28}
                />
              )
          }}
          />
          <Tab.Screen name="Albums" component={Albums} options={{
              tabBarIcon: ({focused }) => (
                <Icon
                  name={"album"}
                  color={focused ?  "#17f832"  : "gray"}
                  size={28}
                />
              )
          }}/>
          <Tab.Screen name="Artists" component={Artists} options={{
              tabBarIcon: ({focused }) => (
                <MaterialCommunityIcons
                  name={"account-music"}
                  color={focused ?  "#17f832"  : "gray"}
                  size={28}
                />
              )
          }}/>
        </Tab.Navigator>
      );
};

export default TabNavigator;