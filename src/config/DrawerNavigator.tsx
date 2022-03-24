import React, { ReactElement, useState } from 'react';
import Home from '../screens/home/home';
import DrawerContent from '../screens/drawerContent/drawerContent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Albums from '../screens/albums/albums';
import Artists from '../screens/artists/artists';


export type DrawerNavigatorParams = {
  Home:undefined;
  Albums:undefined;
  Artists:undefined;
  WelcomeScreen:undefined;
}

const Drawer = createDrawerNavigator<DrawerNavigatorParams>();

export default function Navigator(): ReactElement {
    const [firstScreenVisible, setVisible] = useState(true);
    const toggleVisible = () => {
        setVisible(!firstScreenVisible);
      }
    return(
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
                                          screenOptions={{
                                                drawerStyle: {
                                                backgroundColor: 'white',
                                                width: 240,
                                                },
                                                headerTintColor: 'black'
                                            }}>
                            <Drawer.Screen name = "Home" component={Home} options={ {
                               title: 'Home',
                               drawerActiveTintColor:"black",
                               drawerIcon: ({focused, size}) => (
                                  <Icon
                                     name="home"
                                     size={size}
                                     color={focused ? '#17f832' : '#ccc'}
                                  />
                               ),
                               
                            }}/>
                            <Drawer.Screen name = "Albums" component={Albums} options={ {
                               title: 'Albums',
                               drawerActiveTintColor:"black",
                               drawerIcon: ({focused, size}) => (
                                  <Icon
                                     name="album"
                                     size={size}
                                     color={focused ? '#17f832' : '#ccc'}
                                  />
                               ),                               
                            }}/>
                            <Drawer.Screen name = "Artists" component={Artists} options={ {
                               title: 'Artists',
                               drawerActiveTintColor:"black",
                               drawerIcon: ({focused, size}) => (
                                  <MaterialCommunityIcons
                                     name="account-music"
                                     size={size}
                                     color={focused ? '#17f832' : '#ccc'}
                                  />
                               ),
                            }}/>
      </Drawer.Navigator>
    )
}