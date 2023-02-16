import { View, Text, StyleSheet, TextInput, Image, ScrollView, ImageBackground, SafeAreaView } from 'react-native'
import { Button, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import React from 'react';
import bgImage from '../assets/bgimg1.png';
import bgImage2 from '../assets/profilepic.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconButton } from 'react-native-paper';
import Endorcement from './Endorcement';
import { useState } from 'react';
import { JumpingTransition } from 'react-native-reanimated';
import { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function ProfileScreen ({ navigation }) {
  // const {newdata}=route.params;
  // console.log("data from prev screen..........", newdata);
  const [profileAbout, setprofileAbout] = useState()
  const [profileExperience, setprofileExperience] = useState()
  const [skill, setskill] = useState()
  const [city, setcity] = useState()
  const [email, setemail] = useState()
  const [education, setEducation] = useState()
  const [Data, setData] = useState([])
  const [exp,setExp] = useState()
  const [Aridno, setAridno] = useState()


//add-a-photo

  useEffect(() => {
    timelineView()
experienceView()
educationView()
  }, [])

  async function educationView() {
    let response = await fetch
      (global.apiurl + 'student/geteducationwithregnumber?arid=' + global.aridno)
    let json = await response.json();
    console.log("arslan...........", { json });
    // return json.email
    setEducation(json);
  }
  async function experienceView() {
    let response = await fetch
      (global.apiurl + 'student/getexperiencewithreg?arid=' + global.aridno)
    let json = await response.json();
    console.log("arslan...........", { json });
    // return json.email
    setExp(json);
  }
  async function timelineView() {
    let response = await fetch
      (global.apiurl + 'student/getalumni?arid=' + global.aridno)
    let json = await response.json();
    console.log("arslan...........",{json});
    // return json.email
    setData(json);
    console.log("..........ProfileScreen............", json)
    console.log("...........Email........here......",json)
global.profileemail=json[0].email;
global.profileskill=json[0].skills;
global.profilecity=json[0].city ;
global.profilefname=json[0].fname;
global.profilelname = json[0].lname;
global.profileimage = json[0].image;

}
  

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Image source={bgImage} style={styles.bgimg1} /> */}
        <Image
          style={styles.bgimg2}
          source={{uri: global.imageUrl + `${global.profileimage}`}}
        />
        <Text
          style={{
            bottom: 120,
            fontSize: 18,
            left: 100,
            fontWeight: 'bold',
          }}>
          {global.profilefname} {global.profilelname}
        </Text>
        <Text style={styles.nametxt}>{global.profileemail}</Text>
        <Text style={styles.nametxt1}>{global.profilecity}</Text>

        <View style={{height: 140, width: 400, left: 5, bottom: 100}}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
          </Text>
          <Text style={{fontSize: 15, left: 10}}>
            I am from Rawalpindi,Pakistan.{'\n'}I am WordPress Developer and
            also have experience in react native. My experties are: {'\n'}
            1. React native{'\n'}
            2. Android
          </Text>
        </View>

        <View
          style={{
            height: 120,
            width: 382,
            borderWidth: 1,
            borderColor: 'black',
            left: 5,
            bottom: 10,
          }}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
            Education
          </Text>

          <FlatList
            data={education}
            // extraData = {query}
            // numColumns='1'
            renderItem={({item}) => {
              return (
                <View style={styles.flatListcontainer}>
                  {/* {console.log(item)} */}
                  {/* <Image style={{ height: 160, width: 130, borderRadius: 20, marginTop: 5 }}
                  source={{ uri: global.imageUrl + `${item.image}` }} /> */}
                  <Text style={styles.flatListtext}>
                    University :- {item.uni_name}
                    {'\n'}Degree :- {item.uni_degree}
                    {'\n'}
                    From :- {item.uni_startdate}
                    {'\n'}To :- {item.uni_enddate}
                  </Text>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            height: 120,
            width: 382,
            borderWidth: 1,
            borderColor: 'black',
            left: 5,
            bottom: 20,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
            Experience
          </Text>
          <FlatList
            data={exp}
            // extraData = {query}
            // numColumns='1'
            renderItem={({item}) => {
              return (
                <View style={styles.flatListcontainer}>
                  <Text style={styles.flatListtext}>
                    Skill :- {item.skill}
                    {'\n'}Company :- {item.Company}
                    {'\n'}
                    From :- {item.joindate}
                    {'\n'}To :- {item.enddate}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            height: 70,
            width: 382,
            borderWidth: 1,
            borderColor: 'black',
            left: 5,
            bottom: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
            Skills
          </Text>
          <FlatList
            data={Data}
            // extraData = {query}
            // numColumns='1'
            renderItem={({item}) => {
              return (
                <View style={styles.flatListcontainer}>
                  {/* {console.log(item)} */}
                  {/* <Image style={{ height: 160, width: 130, borderRadius: 20, marginTop: 5 }}
                  source={{ uri: global.imageUrl + `${item.image}` }} /> */}
                  <Text style={styles.flatListtext}>
                    {item.skills}
                    {'\n'}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  editprofilebtn: {
    left: 120,
    width: 160,
    color: 'cyan'
  },
  nametxt: {
    padding: 3,
    bottom: 125,
    fontSize: 13,
    left: 97,
    fontWeight: "bold",
  },
  nametxt1: {
    padding: 3,
    bottom: 132,
    fontSize: 13,
    left: 97,
    fontWeight: "bold",
  },
  bgimg1: {

    width: 400,
    height: 190,
  },
  bgimg2: {
    width: 70,
    marginTop:70,
    height: 70,
    borderRadius: 90,
    left: 20,
    bottom: 60,
  },
  flatListtext: {
    paddingLeft: 15,
    //marginTop:10, 
    fontSize: 16,
    color: 'grey',
    //marginLeft:20,
    // alignSelf: 'center',


  },
})
