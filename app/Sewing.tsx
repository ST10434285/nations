import React from 'react';
import { StyleSheet, Image, } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View , } from '@/components/Themed';
import { useRouter } from 'expo-router';
import Sewing from './Sewing';

const router = useRouter()
export default function SewingScreen({}) {
  return (
    <View>
      <Text>sixweek</Text>
        <Image source={require('../assets/images/SewingDetails.png')} style={styles.SewingDetails}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
    ImageView:{

    },
    SewingDetails:{
      width: 328,
      height: 678,
    },
  
    
});
    