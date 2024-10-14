import React from 'react';
import { StyleSheet, Image, } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View , } from '@/components/Themed';
import { useRouter } from 'expo-router';
import Gardening from './gardening';

const router = useRouter()
export default function gardeningScreen({}) {
  return (
    <View>
      <Text>Gardening</Text>
        <Image source={require('../assets/images/GardenDetails.png')} style={styles.gardening}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
    gardening:{
      width: 340,
      height: 678,
      alignItems: 'center',
    },
  
});