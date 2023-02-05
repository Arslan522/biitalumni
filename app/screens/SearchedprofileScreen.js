import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from 'react-native-paper';
import React from 'react';
import bgImage from '../assets/bgimg1.png';
import bgImage2 from '../assets/profilepic.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton} from 'react-native-paper';
import Endorcement from './Endorcement';
import {useState} from 'react';
import {JumpingTransition} from 'react-native-reanimated';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton} from 'react-native-paper';


export default function SearchedprofileScreen({navigation, route}) {
  const {newdataa} = route.params;
  console.log('data from prev screen..........', newdataa);
  const [profileAbout, setprofileAbout] = useState();
  const [profileExperience, setprofileExperience] = useState();
  const [skill, setskill] = useState();
  const [city, setcity] = useState();
  const [email, setemail] = useState();
  const [education, setEducation] = useState();
  const [Data, setData] = useState([]);
  const [exp, setExp] = useState();
  const [Aridno, setAridno] = useState();
 const [checked1, setChecked1] = useState('first');
 const [checked2, setChecked2] = useState('first');
 const [buttonText, setButtonText] = useState('Endorse');

 async function handlePress() {
  console.log("...................................................",global.aid);
   setButtonText('Endorsed');
   let response = await fetch(global.apiurl + 'student/Endorse', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       endorse_by: global.aid,
       allumni_id: newdataa.allumnini_id,
       skill: newdataa.skills,
       endorsed: 0,
       // qid: 0
     }),
   });
   let json = await response.json();
   console.log(JSON.stringify(json));
 }






      


  useEffect(() => {
    timelineView();
    experienceView();
    educationView();
  }, []);

  async function educationView() {
    // let arid=await AsyncStorage.getItem("aridnum")
    let response = await fetch(
      global.apiurl +
        'student/geteducationwithregnumber?arid=' +
        newdataa.aridno,
    );
    let json = await response.json();
    console.log('education...........', {json});
    // return json.email
    setEducation(json);
  }
  async function experienceView() {
    // let arid=await AsyncStorage.getItem("aridnum")
    let response = await fetch(
      global.apiurl + 'student/getexperiencewithreg?arid=' + newdataa.aridno,
    );
    let json = await response.json();
    console.log('experience...........', json);
    // return json.email
    setExp(json);
  }
  async function timelineView() {
    let response = await fetch(
      global.apiurl + 'student/getalumni?arid=' + newdataa.aridno,
    );
    let json = await response.json();
    console.log('arslan...........', {json});
    // return json.email
    setData(json);
    console.log('..........ProfileScreen............', newdataa.aridno);
    console.log('...........Email........here......', json);
    global.profileemail = json[0].email;
    global.profileskill = json[0].skills;
    global.profilecity = json[0].city;
    global.profilefname = json[0].fname;
    global.profilelname = json[0].lname;
    global.profileimage = json[0].image;
  }

  return (
    <ScrollView>
      <View>
        {/* <Image source={bgImage} style={styles.bgimg1} /> */}
        <Image
          style={styles.bgimg2}
          source={{uri: global.imageUrl + `${newdataa.image}`}}
        />
        <Text
          style={{
            bottom: 120,
            fontSize: 18,
            left: 100,
            fontWeight: 'bold',
          }}>
          {newdataa.fname} {newdataa.lname}
        </Text>
        <Text style={styles.nametxt}>{newdataa.email}</Text>
        <Text style={styles.nametxt1}>{newdataa.city}</Text>

        <View style={{height: 140, width: 400, left: 5, bottom: 100}}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
            <Icon name="edit" size={20} />
          </Text>
          <Text style={{fontSize: 15, left: 10}}>
            My name is Arsalan jamal.I am from Rawalpindi,{'\n'}Pakistan i am
            WordPress Developer and also have experience in react native. My
            experties are: {'\n'}
            1. React native{'\n'}
            2. Android
          </Text>
        </View>

        <View
          style={{
            height: 120,
            width: 400,
            borderWidth: 1,
            borderColor: 'black',
            left: 5,
            bottom: 10,
          }}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
            Education
            <Icon name="edit" size={20} />
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
          {/* <Text style={{ fontSize: 15, left: 10 }}>
           University: BIIT
          </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
           Degree: BSCS      </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            From : sep-2019 {'\n'}To : Present
          </Text> */}
        </View>

        <View
          style={{
            height: 120,
            width: 400,
            borderWidth: 1,
            borderColor: 'black',
            left: 5,
            bottom: 20,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
            Experience
            <Icon name="edit" size={20} />
          </Text>
          <FlatList
            data={exp}
            // extraData = {query}
            // numColumns='1'
            renderItem={({item}) => {
              return (
                <View style={styles.flatListcontainer}>
                  {/* {console.log(item)} */}
                  {/* <Image style={{ height: 160, width: 130, borderRadius: 20, marginTop: 5 }}
                  source={{ uri: global.imageUrl + `${item.image}` }} /> */}
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
          {/* <Text style={{ fontSize: 15, left: 10 }}>
            Skill : React Developer
          </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            Company : Global Software House
          </Text>
          <Text style={{ fontSize: 15, left: 10 }}>
            From:2019 To:2022
          </Text> */}
        </View>
        <View
          style={{
            height: 70,
            width: 400,
            borderWidth: 1,
            borderColor: 'black',
            left: 5,
            bottom: 20,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 22, left: 5, color: 'black'}}>
            Skills
            <Icon name="edit" size={20} />
          </Text>
          <FlatList
            data={Data}
            // extraData = {query}
            // numColumns='1'
            renderItem={({item}) => {
              return (
                <View>
                  <View style={{flexDirection: 'row', marginTop: 10, left: 10}}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      {newdataa.skills}
                    </Text>
                    <View>
                      <Button
                        mode="contained"
                        style={{borderRadius: 20, bottom: 10, left: '150%'}}
                        title={buttonText}
                        onPress={() => handlePress()}>
                        >{buttonText}
                      </Button>
                    </View>
                    {/* <View style={{flexDirection: 'row', left: 180, bottom: 15}}>
                      <RadioButton
                        value="first"
                        status={checked1 === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1('first')}
                      />
                      <Text style={{top: 26, right: 25, color: 'black'}}>
                        No
                      </Text>
                      <RadioButton
                        value="second"
                        status={checked1 === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1('second')}
                      />
                      <Text style={{top: 26, right: 28, color: 'black'}}>
                        Yes
                      </Text>
                    </View> */}
                  </View>
                </View>
              );
            }}
          />
        </View>
       
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  editprofilebtn: {
    left: 120,
    width: 160,
    color: 'cyan',
  },
  nametxt: {
    padding: 3,
    bottom: 125,
    fontSize: 13,
    left: 97,
    fontWeight: 'bold',
  },
  nametxt1: {
    padding: 3,
    bottom: 132,
    fontSize: 13,
    left: 97,
    fontWeight: 'bold',
  },
  bgimg1: {
    width: 400,
    height: 190,
  },
  bgimg2: {
    width: 70,
    marginTop: 70,
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
});






