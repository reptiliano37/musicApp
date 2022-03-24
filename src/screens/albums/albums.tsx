
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import styles from './albums.styles'
import { View, Button, Text, StyleSheet } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../../components/addButton/addButton";
import { createAlbum,listAllAlbums } from "../../provider/apiRequests";
import { Title } from "react-native-paper";

type AlbumsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
  }



export default function Albums({navigation}: AlbumsProps) {
  // const [albumCreated, setalbumCreated] = useState(null);
  
  const albumCreated = useCallback(async () => {
    const response = await createAlbum();
    
    // Perform all state updates.
    console.log(response)
  }, []);
  const listAlbums = useCallback(async () => {
    const response = await listAllAlbums();
    
    // Perform all state updates.
    // console.log(response)
  }, []);
  const Albums = () =>{
    return(
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Title style={{color:'black',fontStyle:'italic', fontWeight:'bold',fontSize:20, margin:50}}> Your Albums</Title>
        <AddButton title='v' style={styles.addButtonStyle}  onPress={()=>{
            listAlbums();
          }}></AddButton>
        <AddButton title='+' style={styles.addButtonStyle}  onPress={()=>{
            albumCreated();
          }}></AddButton>
      </View>
    )
  }
  return (
    <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1}}>
        <View style={styles.center}>
          <Albums/>
        </View>
      </LinearGradient>
  );
};
