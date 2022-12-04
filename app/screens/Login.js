import { View, Text, StyleSheet, TextInput, ImageBackground, Image, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import bgImage from '../assets/logo.png';
import MainScreen from './MainScreen';
import Drawer from '../screens/Drawers';
import { Picker } from '@react-native-picker/picker';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';



export default function Login({ navigation }) {

  const [type, setType] = useState("");
  const [Aridno, setAridno] = useState();
  const [pass, setPass] = useState();
  const [users, setUsers] = useState();

  async function loginUser() {

    let response = await fetch
      ('http://192.168.211.97/FypAlumni/api/student/Login?aridno=' + Aridno + '&password=' + pass + '&isadmin=' + type)
    let json = await response.text();
    console.log(JSON.stringify(json))
    setUsers(json)
    if (json === "\"No Account Found\"") {
      alert("No Account Found. Try Again!")
    }
    else {
      navigation.navigate('Drawer')
    }
    // else if(json=="Shop Verified"){
    //   //i will save pnum in shared preferences
    //   global.user=pnum

    //   navigation.navigate('ShopKeeper Home')
    // }

  }



  return (
    <ScrollView>
      <View style={styles.V1}>
        <Image source={bgImage} style={styles.bg} />
        <Text style={styles.login}>BIIT Alumni</Text>
        <View style={styles.PickerView}>
          <Picker
            selectedValue={type}
            onValueChange={(Itemvalue) => { setType(Itemvalue) }}>
            <Picker.Item label='Admin' value='yes' />
            <Picker.Item label='Alumni' value='no' />
          </Picker>
        </View>
        <Text style={styles.signintxt}>
          Sign In
        </Text>
        <Text style={{ marginRight: 95 }}>
          Hi there! Nice to see you again
        </Text>
        <Text style={styles.regtxt}>
          Reg-No
        </Text>
        <TextInput
          autoCorrect={false}
          require={true}
          placeholderTextColor={'grey'}
          placeholder='Reg-No'
          style={styles.input}
          onChangeText={n => setAridno(n)}
        />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '70%',
          marginTop: -10,
          marginBottom: 5
        }}
        >
          <View style={{
            flex: 1,
            height: 1.5,
          }}
          />
        </View>
        <Text style={styles.passtxt}>
          Password
        </Text>
        <TextInput
          require={true}
          placeholderTextColor={'grey'}
          placeholder='Enter Your Password..'
          secureTextEntry
          style={styles.input2}
          onChangeText={n => setPass(n)} />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '70%',
          marginTop: -10,
          marginBottom: 5
        }}
        >
          <View style={{
            flex: 1,
            height: 1.5,
            backgroundColor: 'darkgrey'
          }}
          />
        </View>
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => {
            console.log(type)
            console.log(Aridno)
            console.log(pass)
            loginUser()
          }}>
          Login
        </Button>
        <Text style={styles.ftr}>
          Don't have an account?
        </Text>
        <Button
          style={styles.sginupbtn}
          onPress={() =>
            navigation.navigate('Signup')}> Signup </Button>
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  regtxt: {
    right: 120,
    color: 'red',
    marginTop: 3,
  },
  passtxt: {
    right: 111,
    color: 'red',
  },
  signintxt: {
    color: '#36454F',
    right: 106,
    fontSize: 25,
    paddingBottom: 5,
  },
  PickerView: {
    backgroundColor: 'lightgrey',
    width: '50%',
    // marginStart:40,
    marginTop: '5%',
    marginBottom: '3%'
  },
  login:
  {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    // marginTop:5,
  },
  usr: {
    fontSize: 90,
    color: 'black'
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginLeft: 10,
    color: 'black',
  },
  input2: {
    width: 300,
    height: 50,
    padding: 10,
    marginLeft: 24,
    color: 'black',
    left: -7.5,
  },
  bg: {

    justifyContent: 'center', marginTop: 30,
  },
  V1: {
    height: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  btn: {
    width: 100,
    borderRadius: 15,
    marginTop: 20,
  },
  sginupbtn: {
    marginLeft: 165,
    marginTop: -29.4,
  },
  ftr: {
    fontSize: 16,
    marginTop: 35,
    color: '#36454F',
    fontWeight: 'bold',
    marginLeft: -60,

  },

});






