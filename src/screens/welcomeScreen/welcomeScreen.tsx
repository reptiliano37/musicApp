import React, { ReactElement, useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ScrollViewBase, ScrollView, SafeAreaView } from 'react-native';
import styles from './welcomeScreen.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerNavigatorParams} from '../../config/DrawerNavigator'
import { LinearGradient } from 'expo-linear-gradient';
import AddButton from '../../components/addButton/addButton'
import { Title,Divider } from 'react-native-paper';
import FadeInOut from 'react-native-fade-in-out';
import mongoose, { Schema } from 'mongoose';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


type WelcomeScreenProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "WelcomeScreen">
  }
let infoAlbum =
  {
    "title": "string",
    "artistId": "string",
    "coverUrl": "string",
    "year": 0,
    "genre": "string"
  }
  
  export default function WelcomeScreen({navigation}: WelcomeScreenProps) {

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
    const WelcomeButton = () =>{
        return(
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <LinearGradient
                        colors={['white', 'green']}
                        style={styles.linearGradientStyle}
                    >
                        <Text style={styles.textLinearGradient}>Let's start</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
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
    return(
      <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1}}>
        <View  style={styles.container}>
          <Header/>
          <WelcomeButton/>
        </View>
    </LinearGradient>
                  )
}