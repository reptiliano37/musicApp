
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import styles from './albums.styles'
import { View, Button, Text, StyleSheet, SafeAreaView, SectionList } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../../components/addButton/addButton";
import { createAlbum,listAllAlbums } from "../../provider/apiRequests";
import { Divider, Title } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import * as Animatable from 'react-native-animatable';


//<a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Freepik - Flaticon</a>

type AlbumsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Albums">
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
  // const showListAllAlbums = () =>{

  //   return(
  //   <SafeAreaView style={styles.container}>
  //     <SectionList
  //       sections={albums}
  //       keyExtractor={(item, index) => item + index}
  //       renderItem={({ item }) => <Item title={item} />}
  //       renderSectionHeader={({ section: { title } }) => (
  //         <Text style={styles.header}>{title}</Text>
  //       )}
  //     />
  //   </SafeAreaView>
  //   )
  // }
  const Albums = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row',flex:1}}>
            <Text style={{color:'black',fontStyle:'italic', fontWeight:'bold', fontSize:24, marginRight:50}}> Your Albums</Text>
            <AddButton style={styles.buttonStyle} onPress={() => {
                fetchAlbums();
              } } source={require('../../../assets/down-chevron.png')}></AddButton>
            <AddButton style={styles.buttonStyle} onPress={() => {
                albumCreated();
              } } source={require('../../../assets/plus.png')}></AddButton>
              </View>
          <Divider style={{flex:0.05}}/>
        </SafeAreaView>
    )
  }
  return (
    
      <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1,flexDirection:'column'}}>
       
            <Albums/>
          <View style={{ flex: 9 }} />
       
      </LinearGradient>
  );
};
