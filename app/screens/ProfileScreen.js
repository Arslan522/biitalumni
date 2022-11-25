import { View, Text, StyleSheet, TextInput, Image, ScrollView, ImageBackground } from 'react-native'
import { Button, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import React from 'react';
import bgImage from '../assets/bgimg1.png';
import bgImage2 from '../assets/profile.png'

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Image source={bgImage} style={styles.bgimg1} />
      <Image source={bgImage2} style={styles.bgimg2} />
      <Text style={styles.nametxt}>Arslan Jamal</Text>
      <Text style={styles.nametxt}>0313 5248603</Text>
      <Text style={styles.nametxt}>Rawalpindi</Text>
      <Button style={styles.editprofilebtn}
        mode="contained"
        onPress={() =>
          navigation.navigate('SearchStudent')}>
        Edit Profile
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  editprofilebtn: {
    left: 120,
    width: 160,
    color: 'cyan'
  },
  nametxt: {
    padding: 3,
    bottom: 70,
    fontSize: 20,
    left: 40,
    fontWeight: "bold",
  },
  bgimg1: {

    width: 400,
    height: 190,
  },
  bgimg2:{
    width:100,
    height:100,
    borderRadius:90,
    left:140,
    bottom:60,
  }
})
export default ProfileScreen