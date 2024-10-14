import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import childminding from './childminding';
import gardening from './gardening';
import cooking from './cooking';
const router = useRouter()
export default function cookingScreen({}) {
  return (
    <View>
      <Text>sixweek</Text>
      <ScrollView horizontal style={styles.imageViews}>
      <TouchableOpacity onPress={()=> router.push('/childminding') }>
        <Image source={require('../assets/images/childm.png')} style={styles.childm}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/cooking') }>
        <Image source={require('../assets/images/cooking.png')} style={styles.cooking}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/gardening') }>
        <Image source={require('../assets/images/garden.png')} style={styles.garden}/>
        </TouchableOpacity>
        </ScrollView>
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
    imageViews:{

    },
    
      childm: {
        width: 167,
        height: 290,
      },
      garden: {
        width: 167,
        height: 290,
      },
      cooking: {
        width: 167,
        height: 290,
      },

    
});