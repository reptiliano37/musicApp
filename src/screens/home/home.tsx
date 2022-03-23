import React, { ReactElement, useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ScrollViewBase, ScrollView, SafeAreaView } from 'react-native';
import styles from './home.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerNavigatorParams} from '../../config/DrawerNavigator'
import { LinearGradient } from 'expo-linear-gradient';
import AddButton from '../../components/addButton/addButton'
import { Title,Divider } from 'react-native-paper';
import FadeInOut from 'react-native-fade-in-out';
import mongoose, { Schema } from 'mongoose';

type HomeProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
  }
let infoAlbum =
  {
    "title": "string",
    "artistId": "string",
    "coverUrl": "string",
    "year": 0,
    "genre": "string"
  }
  
  export default function Home({navigation}: HomeProps) {

  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  }
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  }
  const ModalAlbum = () =>{

  }

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
    const Header = () => {
      return(
      // <View style={{flexDirection:'column',margin:-4}}>
        <View style={{flex:1,marginLeft:10,flexDirection:'row', alignItems:'center',justifyContent:'center',bottom:10}}>
          <Image source={require("../../../assets/kenjoLogo.png")} style={{width:50,height:50}}></Image>
          <Text style={{fontSize:40,fontFamily:'AppleSDGothicNeo-Bold',margin:5}}>KENJOMUSIC</Text>
        </View>
        //  <ItemDivider/>
      // </View>
      )
    }
    const HelpMessage = () =>{
      return(
        <FadeInOut visible={visible} rotate={true} scale={true} duration={3000}>
          <View style={{backgroundColor:'rgba(0,0,0,0.2)',
                        flexDirection: "row", justifyContent:"center",alignItems:"center", borderWidth:1, borderColor:'white', width: 300,
                        height: 100,
                        bottom:20,
                        borderRadius: 20,}}>
            <Text style={{color:'black',fontSize:20}}>Ups, there are no albums or artists added in the app! </Text>
          </View>
        </FadeInOut>
      )
    }
    

    const createAlbum = async () => {
      const urlAlbum = "http://192.168.1.46:3000/album"
      try {
        const response = await fetch(
          urlAlbum,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: "Los Carmenes",
          artistId: "6238bdebc38eb300132e0043",
          coverUrl: "www.url.com",
          year: 1936,
          genre: "pop" })
          
      })
      const json = await response.json();
      console.log(json)
      } catch (error) {
          console.error(error);
        }
    }
    const createArtist = async () => {
      const urlArtist = "http://192.168.1.46:3000/artist"
      try {
        const response = await fetch(
          urlArtist,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: "Jose Luis Perales",
          photoUrl: "string",
          birthdate: "1939-05-18",
          deathDate: "2021-05-18" })
      })
      const json = await response.json();
      console.log(json)
      } catch (error) {
          console.error(error);
        }
    }

     const Albums = () =>{
      return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'black',fontStyle:'italic', fontWeight:'bold',fontSize:20, margin:5}}> Create an Album</Text>
          <AddButton title='+' style={styles.addButtonStyle}  onPress={()=>{
              createAlbum();
            }}></AddButton>
        </View>
      )
    }
    const Artists = () =>{
      return(
        
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',margin:20}}>
            <Text style={{color:'black',fontStyle:'italic', fontWeight:'bold',fontSize:20, margin:5}}> Create an Artist</Text>
            <AddButton title='+' style={styles.addButtonStyle} onPress={()=>{
              createArtist()
            }}></AddButton>
          </View>
        
      )
    }

    return(
      <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1}}>
        <View  style={styles.container}>
          <Header/>
          
            <HelpMessage/>
          
          <SafeAreaView style={{flex:3}}>
          <ScrollView style={{flexGrow:1}}>
            <Albums/>
            <Artists/>
          </ScrollView>
          </SafeAreaView>
        </View>
    </LinearGradient>
                  )
}