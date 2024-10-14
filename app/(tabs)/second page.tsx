import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import CalculateScreen from './calculate';

const router = useRouter();

export default function TabTwoScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SUMMARY</Text>
      <View style={styles.imageViews}>
        <TouchableOpacity onPress={() => router.push('/sixweek')}>
          <Image source={require('../../assets/images/summary1.jpg')} style={styles.summary1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/sixmonths')}>
          <Image source={require('../../assets/images/summary2.jpg')} style={styles.summary2} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/*button for navigating to 'calculate' page */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/fees')}>
        <Text style={styles.buttonText}>Go to Calculate</Text>
      </TouchableOpacity>
    </View>
  );
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
  imageViews: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summary1: {
    width: 167,
    height: 290,
  },
  summary2: {
    width: 167,
    height: 290,
  },
  // Styles for button
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
