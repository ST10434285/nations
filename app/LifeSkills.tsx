import React from 'react';
import { StyleSheet, Image, } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View , } from '@/components/Themed';
import { useRouter } from 'expo-router';
import LifeSkills from './LifeSkills';

const router = useRouter()
 export default function LifeSkillsScreen({}) {


  // const Lifeskills = ({navigation}) => {
    // const courseDetails = {
        // name: "Life Skills",
        // price: 750,
      // };
// 
      // const { addToCart, cartItems } = useCart(); // Use cart context
// 
  // const handleAddCourse = () => {
    // addToCart(courseDetails);
  // };


  return (
    <View>
      <Text>Life Skills</Text>
        <Image source={require('../assets/images/LifeSkillsDetails.png')} style={styles.LifeSkills}/>
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
    LifeSkills:{
      width: 340,
      height: 678,
      alignItems: 'center',
    },
  
});