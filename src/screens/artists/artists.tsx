
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import styles from './artists.styles'
import { View, Button, Text, StyleSheet, SafeAreaView, Pressable, TextInput, Modal, FlatList } from "react-native";
import { DrawerNavigatorParams } from "../../config/DrawerNavigator";
import { LinearGradient } from "expo-linear-gradient";
import AddButton from "../../components/addButton/addButton";
import { createArtist, listAllArtists } from "../../provider/apiRequests";
import { Caption, Divider, Title } from "react-native-paper";


type ArtistsProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
  }

export default function Artists({navigation}: ArtistsProps) {
  const [listArtists, setListArtists] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [shouldShowList, setShouldShow] = useState(false);

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  }
  const toggleList = () => {
    setShouldShow(!shouldShowList);
  }
  const [data, setData] = React.useState({
    name: '',
    birthdate:'',
    deathdate:'',
    photoUrl:'',
    });

  const setDataInput = (key: keyof typeof data, value:string) =>{
    setData({...data,[key]: value})
  }

  const fetchArtists = useCallback(async () => {
    const response = await listAllArtists();
    console.log(response)
    setListArtists(response)
    return listArtists
  }, []);

  const artistCreated = useCallback(async () => {
    const response = await createArtist();
    
    console.log(response)
  }, []);

  const Item = ({ name,_id }:any) => (
    <View style={styles.item}>
      <Title style={{color:'white', fontWeight:'bold'}}>{name}</Title>
      <Caption >{_id}</Caption>
    </View>
  );

  const ShowListAllArtists =  () =>{
    return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listArtists}
        renderItem={({ item }:any) => <Item key={item._id} title={item.name}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
    )
  }

  const ModalContent = () =>{
    return(
      <SafeAreaView>
         <Divider/>
                <View style={{alignItems:'center',backgroundColor:''}}>
                  <Title style={{color:'rgb(193, 244, 228)',fontWeight:'bold' }}>Create an artist</Title>
              </View>
          <Divider/>
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
            <TextInput 
                placeholder="The artist name"
                placeholderTextColor={"grey"}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => 
                    setDataInput("name",val)}
            />
          </View>
          <Text style={styles.text_footer}>Birthdate</Text>
              <View style={styles.action}>
                  <TextInput 
                      placeholder="The artist birthdate"
                      style={styles.textInput}
                      placeholderTextColor={"grey"}
                      autoCapitalize="none"
                      onChangeText={(val) => 
                          setDataInput("birthdate",val)}
                  />
                </View>
          <Text style={styles.text_footer}>Deathdate</Text>
              <View style={styles.action}>
                  <TextInput 
                      placeholder="The artist deathdate"
                      style={styles.textInput}
                      placeholderTextColor={"grey"}
                      autoCapitalize="none"
                      onChangeText={(val) => 
                          setDataInput("deathdate",val)}
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

  const Artists = () =>{
    return(
      <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',flex:1}}>
        <Title style={{color:'black',fontStyle:'italic', fontWeight:'bold', fontSize:24, marginRight:50}}> Your Artists</Title>
        <AddButton style={styles.buttonStyle} onPress={() => {
            fetchArtists();
            toggleList();
          } } source={require('../../../assets/down-chevron.png')}></AddButton>
        <AddButton style={styles.buttonStyle} onPress={() => {
            toggleModalVisible()
          } } source={require('../../../assets/plus.png')}></AddButton>
      </View>
      <Divider style={{flex:0.05}}/>
      </SafeAreaView>
    )
  }
  return (
    <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1,flexDirection:'column'}}>
        <Artists/>
        <View style={{ flex: 9 }}>
          {shouldShowList ? (
            <ShowListAllArtists/>
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