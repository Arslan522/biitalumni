import { View, Text, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native'
import { Button, } from 'react-native-paper';
//import bgImage from '../assets/logo.png'
import React, { useState } from 'react';
import Login from './Login';
import Imageppicker from './Imageppicker';
import avatarImage from '../assets/logo.png';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-simple-toast'


//global.apiUrl = 'http://192.168.230.97/FypAlumni/api/student/'
export default function Signup({ navigation }) {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [aridno, setaridno] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [session, setsession] = useState();
  const [skill, setskills] = useState();
  const [imgsrc, setImagesrc] = useState(Image.resolveAssetSource(avatarImage).uri)
  const [image, setImage] = useState({})


  const Dialog=()=>
    Alert.alert(
      "Signed Up..",
      "Successfully..",
      [
        {
          text:"Login",
          onPress:(()=>{navigation.navigate("Login")})
      }])

  async function saveUser() {

    user = {
      ufname: fname,
      ulname: lname,
      uarid: aridno,
      upass: password,
      uemail: email,
      ucontact: phone,
      // ucity: "",
      // utype: "",
    }
    //console.log(user);
    const data = new FormData()
    // data.append('name', 'hello')
    data.append('UserPhoto', { uri: image.uri, type: image.type, name: image.fileName })
    console.log('calling saveuser...........', global.apiurl, data)
    //console.log(data);
    let response = await fetch
      (global.apiurl + `student/SignUpp?ufname=${user.ufname}&ulname=${user.ulname}&uarid=${user.uarid}
      &upass=${user.upass}&uemail=${user.uemail}&ucontact=${user.ucontact}`,
        {
          method: 'POST',
          headers: {
           'Content-type':'multipart/form-data'
          },
          body: data
        })
    let json = await response.json()
    console.log(JSON.stringify(json))
    console.log(json);


    if (json == "Registered Successfull") {
      Dialog();
      //Toast.show("User Registered Successfully...")
     
    }
    else {
      Alert.alert('Unsuccessfull')
    }
  }

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    }
  }

  const openGallery = async () => {
    const result = await launchImageLibrary(options)
    setImagesrc(result.assets[0].uri)
    setImage(
      result.assets[0]
    )
    console.log(result)
  }


  return (
    <ScrollView >
      <View style={{alignItems: 'center'}}>
        
        <Text style={styles.con}>Signup</Text>
        {/* //<Imageppicker/> */}
        <View style={{ backgroundColor: "lightgrey", alignItems: 'center',paddingTop:30 }}>
          <Image source={{ uri: imgsrc }} style={{ width: 100, height: 100, backgroundColor: "white", borderRadius: 20, right: 45, borderWidth: 1, borderColor: "black" }} />
          <View style={{ margintop: 10, left: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Button color='black' onPress={openGallery} >select profile</Button>
            </View>
        <Text style={styles.simpletext}>
          Name
        </Text>
        
        <View style={{ flexDirection: 'row', right: 54 }}>

          <TextInput
            onChangeText={n => setfname(n)}
            value={fname}
            placeholder='First Name'
            style={styles.fname} />

          <TextInput
            onChangeText={n => setlname(n)}
              value={lname}
            placeholder='Last Name'
            style={styles.lname} />
        </View>
        <Text style={{ right: 120, bottom: 9 }}>
          Arid-No
        </Text>
        <Text style={{ left: 40, bottom: 28.5 }}>
          Password
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={n => setaridno(n)}
              value={aridno}
            placeholder='2019-Arid-0078'
            style={styles.inputt}
          // left={<Icon name='user'/>}
          //underlineColorAndroid="transparent"
          />
          <TextInput
            label="Password"
            returnKeyType="done"
            onChangeText={n => setpassword(n)}
              value={password}
            placeholder='Enter Password'
            secureTextEntry
              style={{
                height: 40,
                padding: 10,
                right: 18,
                bottom: 24,
                marginLeft: 30,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',}} />
        </View>

        
          <Text style={{ right: 126, bottom: 10 }}>
            Email
          </Text>
          <Text style={{ left: 57, bottom: 28 }}>
            Phone Number
          </Text>
          <View style={{ flexDirection: "row" }}>

            <TextInput
              label="Email"
              returnKeyType="next"
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={n => setemail(n)}
              value={email}
              placeholder='someone@gmail'
              style={{
                height: 40,
                padding: 10,
                right: 28,
                bottom: 24,
                marginLeft: 30,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }}
            />
            <TextInput
              onChangeText={n => setphone(n)}
              value={phone}
              placeholder='03135248603'
              keyboardType='numeric'
              style={{
                height: 40,
                padding: 10,
                right: 38,
                bottom: 24,
                marginLeft: 30,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }} />
              
          </View>
          <Text style={{ right: 126, bottom: 10 }}>
            Skills
          </Text>
          <Text style={{ left: 57, bottom: 28 }}>
            Section
          </Text>
          <View style={{ flexDirection: "row" }}>

            <TextInput
              label="Skill"
              returnKeyType="next"
              autoCapitalize="none"
              // autoCompleteType="email"
              textContentType="emailAddress"
              // keyboardType="email-address"
              onChangeText={n => setskills(n)}
              value={skill}
              placeholder='Enter Skills'
              style={{
                height: 40,
                padding: 10,
                right: 65,
                bottom: 24,
                marginLeft: 30,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }}
            />
            <TextInput
              onChangeText={n => setsession(n)}
              value={session}
              placeholder='Session'
              // keyboardType='numeric'
              style={{
                height: 40,
                padding: 10,
                right: 38,
                bottom: 24,
                marginLeft: 30,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }} />
          </View>

        <Button mode="contained"
          onPress={() => { saveUser() }}
          style={styles.btn}>
          Signup
        </Button>
      </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  simpletext: {
    right: 124,
    bottom: 25,
  },
  lname: {
    // width: 145,
    height: 40,
    padding: 10,
    bottom: 21,
    left: 50,
    marginLeft: 10,

    // marginTop: 10,
    // marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
  fname: {
    // width: 145,
    height: 40,
    padding: 10,
    bottom: 21,
    marginLeft: 3,
    // marginTop: 10,
    // marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
  inputt: {
    // width: 300,
    height: 40,
    padding: 10,
    right: 19,
    bottom: 24,
    marginLeft: 30,
    // marginTop: 10,
    // marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
  bg: {

    justifyContent: 'center',
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
    bottom: 21,
  }
})