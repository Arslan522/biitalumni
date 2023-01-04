import { View, Text, StyleSheet, TextInput, Image, ScrollView, ImageBackground } from 'react-native'
import { Button, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import React from 'react';
import bgImage from '../assets/bgimg1.png';
import bgImage2 from '../assets/profilepic.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconButton } from 'react-native-paper';
import Endorcement from './Endorcement';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Image source={bgImage} style={styles.bgimg1} />
        <Image source={bgImage2} style={styles.bgimg2} />
        <Text style={{
          bottom: 55,
          fontSize: 20,
          left: 130,
          fontWeight: 'bold'
        }}>
          Arslan Jamal</Text>
        <Text style={styles.nametxt}>arsln.jamal71@gmail.com</Text>
        <View style={{ height: 140, width: 400, borderWidth: 1, borderColor: "black", left: 5, bottom: 30 }}>
          <Text style={{ fontSize: 22, left: 5, color: "black" }}>About
            <Icon name="edit" size={20} /></Text>
          <Text style={{ fontSize: 15, left: 10 }}>My name is Arsalan jamal.I am from Rawalpindi, Pakistan{'\n'}
            i am WordPress Developer and also have experience in react native. My experties are: {'\n'}
            1. React native{'\n'}
            2. Android</Text>
        </View>
        <View style={{ height: 120, width: 400, borderWidth: 1, borderColor: "black", left: 5, bottom: 20 }}>
          <Text style={{ fontSize: 22, left: 5, color: "black" }}>Experience
            <Icon name="edit" size={20} /></Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            React Developer
          </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            Global Software House
          </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            From:2019 To:2022
          </Text>
        </View>
        <View style={{ height: 120, width: 400, borderWidth: 1, borderColor: "black", left: 5, bottom: 10 }}>
          <Text style={{ fontSize: 22, left: 5, color: "black" }}>Education
            <Icon name="edit" size={20} /></Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            BIIT
          </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            BSCS      </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            From:sep-2019 To:Present
          </Text>

        </View>
        <Button
          mode='contained'
          width={200}
          left={100}
          onPress={() =>
            navigation.navigate('Endorcement')}
        >
          Endorce on skills
        </Button>
      </View>
    </ScrollView>
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
    bottom: 55,
    fontSize: 13,
    left: 110,
    fontWeight: "bold",
  },
  bgimg1: {

    width: 400,
    height: 190,
  },
  bgimg2: {
    width: 100,
    height: 100,
    borderRadius: 90,
    left: 140,
    bottom: 60,
  }
})
export default ProfileScreen