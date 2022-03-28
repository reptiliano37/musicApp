
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import styles from './albums.styles'
import { View, Button, Text, StyleSheet, SafeAreaView, SectionList, FlatList, VirtualizedList, TextInput, Modal, Pressable } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../../components/addButton/addButton";
import { createAlbum,listAllAlbums } from "../../provider/apiRequests";
import { Caption, Divider, Title } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import * as Animatable from 'react-native-animatable';
import {NetworkInfo} from 'react-native-network-info';
import { set } from "react-native-reanimated";



//<a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Freepik - Flaticon</a>

type AlbumsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Albums">
  }


export default function Albums({navigation}: AlbumsProps) {
  // Get Local IP
  // function saveIpPublicV4 (){
  //   NetworkInfo.getIPV4Address().then(ipv4Address => {
  //     console.log(ipv4Address);
  //   });
  // }
  const [modalVisible, setModalVisible] = useState(false);
  const [listAlbums, setListAlbums] = useState([]);
  const [shouldShowList, setShouldShow] = useState(false);

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  }
  const toggleList = () => {
    setShouldShow(!shouldShowList);
  }
  const [data, setData] = React.useState({
    title: '',
    artistId:'',
    coverUrl: '',
    year:parseInt(''),
    genre:''
    });

  const setDataInput = (key: keyof typeof data, value:string) =>{
    setData({...data,[key]: value})
  }
  const ModalContent = () =>{
    return(
      <SafeAreaView>
         <Divider/>
                <View style={{alignItems:'center',backgroundColor:''}}>
                  <Title style={{color:'rgb(193, 244, 228)',fontWeight:'bold' }}>Create an album</Title>
              </View>
          <Divider/>
        <Text style={styles.text_footer}>Title</Text>
        <View style={styles.action}>
            <TextInput 
                placeholder="The album title"
                placeholderTextColor={"grey"}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => 
                    setDataInput("title",val)}
                
            />
          </View>
          <Text style={styles.text_footer}>Genre</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="The album genre"
                    style={styles.textInput}
                    placeholderTextColor={"grey"}
                    autoCapitalize="none"
                    onChangeText={(val) => 
                        setDataInput("genre",val)}
                />
              </View>
          <Text style={styles.text_footer}>Year</Text>
              <View style={styles.action}>
                  <TextInput 
                      placeholder="The album year"
                      style={styles.textInput}
                      placeholderTextColor={"grey"}
                      autoCapitalize="none"
                      onChangeText={(val) => 
                          setDataInput("year",val)}
                  />
                </View>
       <Pressable
            style={[styles.buttonModal]}
            onPress={() => {
              toggleModalVisible()
            }}
          >
      <LinearGradient style={[styles.buttonModal]} colors={['rgb(193, 244, 228)','rgb(193, 224, 288)']} >
        <Text style={[styles.textStyleButtonModal]}>Ready</Text>
      </LinearGradient>
      </Pressable> 
      </SafeAreaView>
    )
  }

  const albumCreated = useCallback(async () => {
    const response = await createAlbum();
        console.log(response)
  }, []);
  const fetchAlbums = useCallback(async () => {

    const response = await listAllAlbums();
    setListAlbums(response)

    return listAlbums
  }, []);

  const Item = ({ title,year }:any) => (
    <View style={styles.item}>
      <Title style={{color:'white', fontWeight:'bold'}}>{title}</Title>
      <Caption style={{color:'white'}}>{year}</Caption>
    </View>
  );
  const ShowListAllAlbums =  () =>{
    return(
    <Animatable.View style={styles.container}
    animation="fadeInDownBig"
    duration={2000}>
      <FlatList
        data={listAlbums}
        renderItem={({ item }:any) => <Item title={item.title} year={item.year}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animatable.View>
    )
  }

  const Albums = () =>{
    const iterationCount= 4
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',flex:1}}>
              <Text style={{color:'black',fontStyle:'italic', fontWeight:'bold', fontSize:24, marginRight:50}}> Your Albums</Text>
              {!shouldShowList ? (
              <AddButton style={styles.buttonStyle} onPress={() => {
                  fetchAlbums();
                  toggleList();
                } } source={require('../../../assets/down-chevron.png')}></AddButton>
              ):(
                <AddButton style={styles.buttonStyle} onPress={() => {
                  toggleList();
                } } source={require('../../../assets/up-chevron.png')}></AddButton>
              )}
              <AddButton style={styles.buttonStyle} onPress={() => {
                  toggleModalVisible();
                } } source={require('../../../assets/plus.png')}></AddButton>
            </View>
            <Divider style={{flex:0.05}}/>
        </View>
    )
  }
  return (
    
      <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1,flexDirection:'column'}}>
          <Albums/>
          <View style={{ flex: 9 }}>
          {shouldShowList ? (
            <ShowListAllAlbums/>
          ) : null}
          </View>

            <Modal
                style={{margin:0,flex:1}}
                animationType="slide"
                visible={modalVisible}
              >
              <ModalContent/>
            </Modal>
      </LinearGradient>
  );
};
