import React, { ReactElement } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ScrollViewBase, ScrollView, SafeAreaView } from 'react-native';
import styles from './home.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import { LinearGradient } from 'expo-linear-gradient';
import AddButton from '../../components/addButton/addButton'
import { Title,Divider } from 'react-native-paper';

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">
  }
  
  export default function Home(): ReactElement {
    
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
        <View style={{backgroundColor:'rgba(0,0,0,0.2)',
                      flexDirection: "row", justifyContent:"center",alignItems:"center", borderWidth:1, borderColor:'white', width: 300,
                      height: 100,
                      bottom:20,
                      flex:1,
                      borderRadius: 20,}}>
          <Text style={{color:'black',fontSize:20}}>Ups, there are no albums or artists added in the app! </Text>
        </View>
      )
    }
    const Albums = () =>{
      return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'black',fontStyle:'italic', fontWeight:'bold',fontSize:20, margin:5}}> Create an Album</Text>
          <AddButton title='+' style={styles.addButtonStyle}></AddButton>
        </View>
      )
    }
    const Artists = () =>{
      return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',margin:20}}>
          <Text style={{color:'black',fontStyle:'italic', fontWeight:'bold',fontSize:20, margin:5}}> Create an Artist</Text>
          <AddButton title='+' style={styles.addButtonStyle}></AddButton>
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