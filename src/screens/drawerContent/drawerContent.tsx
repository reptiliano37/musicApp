import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
  import React, { ReactElement, useState } from 'react';
  import { View, Text, Alert, TouchableOpacity,Button,Image, ScrollView, ScrollViewProps } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import styles from './drawerContent.styles'
import Home from '../home/home';
import WelcomeScreen from '../welcomeScreen/welcomeScreen';
import { DrawerNavigationHelpers, DrawerDescriptorMap } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';

 export default function CustomDrawerContent(props: any) {
    const [signingOut, setSigningOut] = useState(false);
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <View style={styles.userInfoSection}>
            
              <View style={{flexDirection:'row'}}>
              
                    <>
                      <Image source={require("../../../assets/user.png")} style={styles.image} />
                      <View style={{flexDirection:'column'}}>
                      <Title style={styles.title}> USERNAME </Title>
                        <Caption style={styles.caption}>Job - Productor</Caption>
                      </View>
                    </>                    
              </View>
              
            </View>
            </Drawer.Section>
            <DrawerItemList {...props} />
          <Drawer.Section style={styles.drawerSection}>
            </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
            icon={({color, size}) => (
              <Icon 
              name="exit-to-app" 
              color={color}
              size={size}
              />
          )}
            label="Exit"
            // loading={signingOut}
            onPress={async ()=>{
              // navigation.navigate("WelcomeScreen")
            }}/>
            </Drawer.Section>
      </View>
    );
  }