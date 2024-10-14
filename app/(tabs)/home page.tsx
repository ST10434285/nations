import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
const router = useRouter()
export default function TabOneScreen({}) {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Empowering The Nations</Text>
        <TouchableOpacity onPress={()=> router.push('/(tabs)/second page') }>
        <Image source={require('../../assets/images/home.jpg')} style={styles.FirstPage} />
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      </View>
    );
  };

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
  },
  FirstPage: {
    width: 328,
    height: 678,
  },
});
