import React, { ReactElement, useState } from 'react';
import { View, Text,Image, ScrollView, SafeAreaView } from 'react-native';
import styles from './home.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerNavigatorParams} from '../../config/DrawerNavigator'
import { LinearGradient } from 'expo-linear-gradient';
import AddButton from '../../components/addButton/addButton'
import * as Animatable from 'react-native-animatable';

import * as apiRequests from '../../provider/apiRequests'

type HomeProps = {
    navigation: NativeStackNavigationProp<DrawerNavigatorParams, "Home">
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
 
  const Header = () => {
    return(
      <Animatable.View 
            animation="zoomInUp"
        >
        {/* <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Open left menu to start navigation</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text> */}
        <View style={{flex:1,marginLeft:10,flexDirection:'row', alignItems:'center',justifyContent:'center',bottom:10}}>
          <Image source={require("../../../assets/kenjoLogo.png")} style={{width:50,height:50}}></Image>
          <Text style={{fontSize:40,fontFamily:'AppleSDGothicNeo-Bold',margin:5}}>KENJOMUSIC</Text>
          
        </View>
      </Animatable.View>
    )
  }
  const HelpMessage = () =>{
    return(
        <View style={{backgroundColor:'rgba(0,0,0,0.2)',
                      flexDirection: "row", justifyContent:"center",alignItems:"center", borderWidth:1, borderColor:'white', width: 300,
                      height: 100,
                      bottom:20,
                      borderRadius: 20,}}>
          <Text style={{color:'black',fontSize:20}}>Ups, there are no albums or artists added in the app! </Text>
        </View>
    )
  }

    return(
      <LinearGradient locations={[0, 0.3]} colors={['white','rgb(193, 244, 228)']} style={{flex:1}}>
        <View  style={styles.container}>
          <Header/>
            {/* <HelpMessage/> */}
        </View>
    </LinearGradient>
    )
}