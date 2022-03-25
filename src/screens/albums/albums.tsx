
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import styles from './albums.styles'
import { View, Button, Text, StyleSheet, SafeAreaView, SectionList } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../../components/addButton/addButton";
import { createAlbum,listAllAlbums } from "../../provider/apiRequests";
import { Title } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

type AlbumsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
  }



export default function Albums({navigation}: AlbumsProps) {
  const [albums, setAlbums] = useState([])
  
  const albumCreated = useCallback(async () => {
    const response = await createAlbum();
    
    // Perform all state updates.
    console.log(response)
  }, []);
  const fetchAlbums = useCallback(async () => {
    const response = await listAllAlbums();
    // Perform all state updates.
    console.log(response)
  }, []);
  const showListAllAlbums = () =>{

    return(
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={albums}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
    )
  }
  const Albums = () =>{
    return(
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Title style={{color:'black',fontStyle:'italic', fontWeight:'bold', fontSize:24, margin:50}}> Your Albums</Title>
        <AddButton title='v' style={styles.addButtonStyle}  onPress={()=>{
            fetchAlbums();
          }}></AddButton>
        <AddButton title='+' style={styles.addButtonStyle}  onPress={()=>{
            albumCreated();
          }}></AddButton>
      </View>
      </SafeAreaView>
    )
  }
  return (
    <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1}}>
          <Albums/>
      </LinearGradient>
  );
};
