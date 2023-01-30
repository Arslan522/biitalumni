import { View, Text, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native'
import { Button, getCombinedStyles, } from 'react-native-paper';
//import bgImage from '../assets/logo.png'
import React, { useState } from 'react';
import Login from './Login';
import Imageppicker from './Imageppicker';
import avatarImage from '../assets/logo.png';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-simple-toast'
import { Picker } from '@react-native-picker/picker';


export default function Signup({ navigation }) {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [aridno, setaridno] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [session, setsession] = useState();
  const [skill, setskill] = useState();
  const [gender, setgender] = useState();
  const [type, settype] = useState();
  const [city, setcity] = useState();
  const [degree, setdegree] = useState();
  const [imgsrc, setImagesrc] = useState(Image.resolveAssetSource(avatarImage).uri)
  const [image, setImage] = useState({})

  const Dialog = () =>
    Alert.alert(
      "Signed Up..",
      "Successfully..",
      [
        {
          text: "Login",
          onPress: (() => { navigation.navigate("Login") })
        }])

  async function saveUser() {

    user = {
      ufname: fname,
      ulname: lname,
      uarid: aridno,
      upass: password,
      uemail: email,
      ucontact: phone,
      uskills: skill,
      usession:session,
      ugender:gender,
      utype:type,
      ucity:city,
      udegree:degree,
    }
    const data = new FormData()
    data.append('UserPhoto', { uri: image.uri, type: image.type, name: image.fileName })
    console.log('calling saveuser...........', global.apiurl, data)
    let response = await fetch
      (global.apiurl +`student/signupp?ufname=${user.ufname}&ulname=${user.ulname}&uarid=${user.uarid}&upass=${user.upass}
      &uemail=${user.uemail}&ucontact=${user.ucontact}&uskills=${user.uskills}
      &usession=${user.usession}&ugender=${user.ugender}&utype=${user.utype}&ucity=${user.ucity}&udegree=${user.udegree}
      `,
        {
          method: 'POST',
          headers: {
            'Content-type': 'multipart/form-data'
          },
          body: data
        })
    let json = await response.json()
    if (json == "Registered Successfull") {
      Dialog();
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
      <View style={{ alignItems: 'center' }}>

        {/* //<Imageppicker/> */}
        <View style={{ backgroundColor: "lightgrey", alignItems: 'center', paddingTop: 30 }}>
          <Image source={{ uri: imgsrc }} style={{ width: 100, height: 100, backgroundColor: "white", borderRadius: 20,left:2,bottom:19, borderWidth: 1, borderColor: "black" }} />
          <View style={{ margintop: 10, left: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Button 
              mode="contained"
            color='red' onPress={openGallery}  style={{bottom:15,width:155}} >select profile</Button>
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
          <Text style={{ right: 144, bottom: 9 }}>
            Arid-No
          </Text>
          <Text style={{ left: 76, bottom: 28.5 }}>
            Password
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              onChangeText={n => setaridno(n)}
              value={aridno}
              placeholder='2019-Arid-0078'
              style={{
                // width: 145,
                height: 40,
                padding: 10,
                bottom: 21,
                width: 150,
                // marginLeft: 3,
                marginLeft: 22,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }}
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
                width:150,
                bottom: 24,
                right:20,
                marginLeft: 80,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }} />
          </View>


          <Text style={{ right: 151, bottom: 10 }}>
            Email
          </Text>
          <Text style={{ left: 90, bottom: 28 }}>
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
                // width: 145,
                height: 40,
                padding: 10,
                bottom: 21,
                width: 150,
                // marginLeft: 3,
                marginLeft: 22,
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
                right: 18,
                width: 150,
                bottom: 24,
                right: 20,
                marginLeft: 80,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }} />

          </View>
          <Text style={{ right: 152, bottom: 10 }}>
            Skills
          </Text>
          <Text style={{ left: 67, bottom: 28 }}>
            Session
          </Text>
          <View style={{ flexDirection: "row" }}>

            <TextInput
              label="Skill"
              returnKeyType="next"
              autoCapitalize="none"
              // autoCompleteType="email"
              textContentType="emailAddress"
              // keyboardType="email-address"
              onChangeText={n => setskill(n)}
              value={skill}
              placeholder='Enter Skills'
              style={{
                // width: 145,
                height: 40,
                padding: 10,
                bottom: 21,
                width: 150,
                // marginLeft: 3,
                marginLeft: 22,
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
                right: 18,
                width: 150,
                bottom: 24,
                right: 20,
                marginLeft: 80,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }} />
          </View>







          <Text style={{ right: 153, bottom: 10 }}>
            Type
          </Text>
          <Text style={{ left: 66, bottom: 28 }}>
            Degree
          </Text>
          <View style={{ flexDirection: "row" }}>

            <TextInput
              label="Email"
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={n => settype(n)}
              value={type}
              placeholder='Alumni/student'
              style={{
                // width: 145,
                height: 40,
                padding: 10,
                right:2,
                bottom: 21,
                width: 150,
                // marginLeft: 3,
                marginLeft: 22,
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
              label="Degree"
              returnKeyType="next"
              autoCapitalize="none"
              onChangeText={n => setdegree(n)}
              value={degree}
              placeholder='Enter your Degree'
              style={{
                height: 40,
                padding: 10,
                right: 18,
                width: 150,
                bottom: 24,
                right: 20,
                marginLeft: 80,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }}
            />


            
          </View>

            <Text style={{ right: 145, bottom: 7}}>
              Gender
            </Text>
          <Text style={{ left: 76, bottom: 28 }}>
            Select City
          </Text>
<View style={{flexDirection:"row"}}>

            <Picker style={styles.PickerView1}
              style={{
                // width: 145,
                height: 40,
                padding: 10,
                right: 2,
                bottom: 21,
                width: 150,
                // marginLeft: 3,
                marginLeft: 22,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }}
              selectedValue={gender}
              onValueChange={(Itemvalue) => { setgender(Itemvalue) }}>
              <Picker.Item label='Male' value='Male' />
              <Picker.Item label='Female' value='Female' />
            </Picker>


            <Picker 
              style={{
                height: 40,
                padding: 10,
                right: 18,
                width: 150,
                bottom: 24,
                right: 20,
                marginLeft: 80,
                // marginTop: 10,
                // marginBottom: 10,
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 18,
                backgroundColor: '#F8F0E3',
                color: 'black',
              }}

              selectedValue={city}
              onValueChange={(Itemvalue) => { setcity(Itemvalue) }}>
              <Picker.Item label='islamabad' value='islamabad' />
              <Picker.Item label='Rawalpindi' value='Rawalpindi' />
              <Picker.Item label='Faisalabad' value='Faisalabad' />
              <Picker.Item label='Chakwal' value='Chakwal' />
              <Picker.Item label='Mansehra' value='Mansehra' />
              <Picker.Item label='Lahore' value='Lahore' />
              <Picker.Item label='Multan' value='Multan' />
              <Picker.Item label='Swabi' value='Swabi' />
              <Picker.Item label='Karachi' value='Karachi' />
              <Picker.Item label='Rawat' value='Rawat' />
            </Picker>
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
    right: 144,
    bottom: 25,
  },
  lname: {
    // width: 145,
    height: 40,
    padding: 10,
    bottom: 21,
    width:150,

    // left: 50,
    marginLeft:60,

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
    width:150,
    // marginLeft: 3,
    marginLeft:110,
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
    color:'red'
  },
  
            PickerView: {
              height: 40,
              padding: 10,
              right: 18,
              width: 140,
              bottom: 24,
              right: 20,
              marginLeft: 85,
              // marginTop: 10,
              // marginBottom: 10,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 18,
              backgroundColor: '#F8F0E3',
              color: 'black',
            },
  PickerView1: {
    height: 40,
    padding: 10,
    // right: 18,
    width: 140,
    bottom: 24,
    right:146,
    // right: 20,
    marginLeft: 85,
    // marginTop: 10,
    // marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
})