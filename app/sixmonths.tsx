import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import FirstAid from './FirstAid';
import Sewing from './Sewing';
import LandScaping from './LandScaping';
import LifeSkills from './LifeSkills';
const router = useRouter()
export default function sixmonthsScreen({}) {
  return (
    <View>
      <Text>sixweek</Text>
      <ScrollView horizontal style={styles.imageViews}>
      <TouchableOpacity onPress={()=> router.push('/FirstAid') }>
        <Image source={require('../assets/images/FirstAid.png')} style={styles.FirstAid}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/Sewing') }>
        <Image source={require('../assets/images/Sewing.png')} style={styles.Sewing}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/LandScaping') }>
        <Image source={require('../assets/images/LandScaping.png')} style={styles.LandScaping}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/LifeSkills') }>
        <Image source={require('../assets/images/LifeSkills.png')} style={styles.LifeSkills}/>
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
    
      FirstAid: {
        width: 167,
        height: 290,
      },
      Sewing: {
        width: 167,
        height: 290,
      },
      LandScaping: {
        width: 167,
        height: 290,
      },
      LifeSkills: {
        width: 167,
        height: 290,
      },

    
});