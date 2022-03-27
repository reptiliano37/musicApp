
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import styles from './artists.styles'
import { View, Button, Text, StyleSheet, SafeAreaView } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../../components/addButton/addButton";
import { createArtist, listAllArtists } from "../../provider/apiRequests";
import { Divider, Title } from "react-native-paper";


type ArtistsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
  }

export default function Artists({navigation}: ArtistsProps) {
  const [artists, setArtists] = useState([])
  const fetchArtists = useCallback(async () => {
    const response = await listAllArtists();
    // Perform all state updates.
    console.log(response)
  }, []);

  const artistCreated = useCallback(async () => {
    const response = await createArtist();
    
    // Perform all state updates.
    console.log(response)
  }, []);

  const Artists = () =>{
    return(
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',flex:1}}>
        <Title style={{color:'black',fontStyle:'italic', fontWeight:'bold', fontSize:24, marginRight:50}}> Your Artists</Title>
        <AddButton style={styles.buttonStyle} onPress={() => {
            fetchArtists();
          } } source={require('../../../assets/down-chevron.png')}></AddButton>
        <AddButton style={styles.buttonStyle} onPress={() => {
            artistCreated();
          } } source={require('../../../assets/plus.png')}></AddButton>
      </View>
      <Divider style={{flex:0.05}}/>
      </SafeAreaView>
    )
  }
  return (
    <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1,flexDirection:'column'}}>
        <Artists/>
          <View style={{ flex: 9 }} />
      </LinearGradient>
  );
};