import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import { Button, } from 'react-native-paper';
import bgImage from '../assets/logo.png'
import React, { useState } from 'react';
import Login from './Login';


global.apiUrl = 'http://192.168.92.97/FypAlumni/api/student/'
export default function Signup({ navigation }) {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [aridno, setaridno] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();

  async function saveUser() {
    console.log('calling saveuser...........',)
    let response = await fetch
      ('http://192.168.211.97/FypAlumni/api/student/Signup',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fname: fname,
            lname: lname,
            aridno: aridno,
            password: password,
            email: email,
            Contact: phone,
          })
        })
    let json = await response.json()
    console.log(JSON.stringify(json))
    if (json == "Registered") {
      navigation.navigate('Login')
    }
    else {
      Alert.alert('Unsuccessfull')
    }
  }


  return (
    <ScrollView>
      <View style={styles.V1}>
        <Image source={bgImage} style={styles.bg} />
        <Text style={styles.con}>Signup</Text>
        <Text style={styles.simpletext}>
          Name
        </Text>
        <View style={{ flexDirection: 'row' }}>

          <TextInput
            onChangeText={n => setfname(n)}
            placeholder='First Name'
            style={styles.fname} />

          <TextInput
            onChangeText={n => setlname(n)}
            placeholder='Last Name'
            style={styles.lname} />
        </View>
        <Text style={{ right: 120, bottom: -8 }}>
          Arid-No
        </Text>
        <TextInput
          onChangeText={n => setaridno(n)}
          placeholder='2019-Arid-0078'
          style={styles.inputt}
        // left={<Icon name='user'/>}
        //underlineColorAndroid="transparent"
        />
        <Text style={{ right: 113, bottom: -8 }}>
          Password
        </Text>
        <TextInput
          label="Password"
          returnKeyType="done"
          onChangeText={n => setpassword(n)}
          placeholder='Enter Password'
          secureTextEntry
          style={styles.inputt} />
        <Text style={{ right: 126, bottom: -8 }}>
          Email
        </Text>
        <TextInput

          label="Email"
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={n => setemail(n)}
          placeholder='someone@gmail.com'
          style={styles.inputt} />
        <Text style={{ right: 96, bottom: -8 }}>
          Phone Number
        </Text>
        <TextInput
          onChangeText={n => setphone(n)}
          placeholder='03135248603'
          keyboardType='numeric'
          style={styles.inputt} />
        <Button mode="contained"
          onPress={() => { saveUser() }}
          style={styles.btn}>
          Signup
        </Button>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  simpletext: {
    right: 124,
    bottom: -8
  },
  lname: {
    width: 145,
    height: 40,
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
  fname: {
    width: 145,
    height: 40,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
  inputt: {
    width: 300,
    height: 40,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
  bg: {

    justifyContent: 'center',
  },
  V1: {
    alignItems: 'center',

  },
  con: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 30,
    //color:'green'
    fontStyle: 'italic',
    color: 'black'
  },
  btn: {
    marginTop: 11,
    borderRadius: 20,
  }
})