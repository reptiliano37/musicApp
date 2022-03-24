
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import styles from './artists.styles'
import { View, Button, Text, StyleSheet } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../../components/addButton/addButton";
import { createArtist, listAllArtists } from "../../provider/apiRequests";


type ArtistsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
  }

export default function Artists({navigation}: ArtistsProps) {
  const artistCreated = useCallback(async () => {
    const response = await createArtist();
    
    // Perform all state updates.
    console.log(response)
  }, []);

  const Artist = () =>{
    return(
      
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',margin:20}}>
          <Text style={{color:'black',fontStyle:'italic', fontWeight:'bold',fontSize:20, margin:20}}> Your Artists </Text>
          <AddButton title='v' style={styles.addButtonStyle} onPress={()=>{
            listAllArtists();
          }}></AddButton>
          <AddButton title='+' style={styles.addButtonStyle} onPress={()=>{
            artistCreated();
          }}></AddButton>
        </View>
      
    )
  }
  return (
    <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1}}>
        <View style={styles.center}>
          <Artist/>
          {/* <Button
            title="Go to About Screen"
            onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
          /> */}
        </View>
    </LinearGradient>
  );
};