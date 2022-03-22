import React, { ReactElement } from 'react';
import Home from '../screens/home/home';
import DrawerContent from '../screens/drawerContent/drawerContent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator<StackNavigatorParams>();
const Drawer = createDrawerNavigator<StackNavigatorParams>();
const Tab = createBottomTabNavigator();

export type StackNavigatorParams = {
    Home:undefined;
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default function Navigator(): ReactElement {
    return(
    <NavigationContainer>
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
                                     color={focused ? 'cyan' : '#ccc'}
                                  />
                               ),
                               
                            }}/>
                        </Drawer.Navigator>
    </NavigationContainer>
    )
}