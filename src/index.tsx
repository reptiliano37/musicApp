import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './config/DrawerNavigator'


export default function App() {

  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}