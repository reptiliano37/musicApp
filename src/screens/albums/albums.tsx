
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import styles from './albums.styles'
import { View, Button, Text, StyleSheet } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";

type ArtistsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
  }

export default function Albums({navigation}: ArtistsProps) {
  return (
    <View style={styles.center}>
      <Text>This is the ALBUMS screen</Text>
      {/* <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      /> */}
    </View>
  );
};