
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import styles from './artists.styles'
import { View, Button, Text, StyleSheet, SafeAreaView, Pressable, TextInput, Modal } from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  }

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
                // onChangeText={(val) => 
                //    {textInputChange(val);
                //     setDataInput("username",val)}
                // }
            />
          </View>
          <Text style={styles.text_footer}>Birthdate</Text>
              <View style={styles.action}>
                  <TextInput 
                      placeholder="The artist birthdate"
                      style={styles.textInput}
                      placeholderTextColor={"grey"}
                      autoCapitalize="none"
                      // onChangeText={(val) => 
                      //    {textInputChange(val);
                      //     setDataInput("username",val)}
                      // }
                  />
                </View>
          <Text style={styles.text_footer}>Deathdate</Text>
              <View style={styles.action}>
                  <TextInput 
                      placeholder="The artist deathdate"
                      style={styles.textInput}
                      placeholderTextColor={"grey"}
                      autoCapitalize="none"
                      // onChangeText={(val) => 
                      //    {textInputChange(val);
                      //     setDataInput("username",val)}
                      // }
                  />
                </View>
       <Pressable
            style={[styles.buttonModal]}
            onPress={() => {
              toggleModalVisible()
              // startTraining(selected);
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
          <View style={{ flex: 9 }} />
          <Modal
                style={{ flex: 9 }}
                animationType="slide"
                visible={modalVisible}
              >
              <ModalContent/>
            </Modal>
      </LinearGradient>
  );
};