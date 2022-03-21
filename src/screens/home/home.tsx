import React, { ReactElement } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image } from 'react-native';
import styles from './home.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import { LinearGradient } from 'expo-linear-gradient';
import { Title } from 'react-native-paper';

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">
  }
  
  export default function Home(): ReactElement {
    return(
      <LinearGradient
          start={{x: 0.1, y: 0.0}} end={{x: 0.4, y: 0.4}}
          
          colors={['white','blue', 'black']} 
          style={{flex:1}}
            >
    <View  style={styles.container}>
      <View style={{marginLeft:10,flexDirection:'row', alignItems:'center',justifyContent:'center', borderWidth:1, marginBottom: 300}}>
        <Image source={require("../../../assets/kenjoLogo.png")} style={{width:50,height:50}}></Image>
        <Text style={{fontSize:40,fontFamily:'AppleSDGothicNeo-Bold',margin:5}}>KENJOMUSIC</Text>
      </View>
        <View style={{backgroundColor:'rgba(0,0,0,0.5)',
                      flexDirection: "row", justifyContent:"center",alignItems:"center", borderWidth:1, borderColor:'white', width: 250,
                      height: 100,
                      borderRadius: 20,}}>
          <Text style={{color:'white'}}>Ups, there are no albums or artists added in the app! </Text>
        </View>
      </View>
    </LinearGradient>
                  )
}