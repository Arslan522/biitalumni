// import { View, Text, StyleSheet, ImageBackground, Image, Platform } from 'react-native';
// import React from 'react';
// import { Alert } from 'react-native';
// import bgImage from '../assets/logo.png';
// import { Button, TextInput } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';
// import { useState } from 'react';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';
// import job from './Jobs';

// //global.apiUrl = 'http://192.168.232.97/FypAlumni/api/student/'
// const CreateJob = ({ navigation }) => {

//     const [title, settitle] = useState();
//     const [description, setdescription] = useState();
//     const [platform, setplatform] = useState();
//     const [cgpa, setcgpa] = useState();
//     const [city, setcity] = useState();
//     const [Aridno, setAridno] = useState("aridno");
//     global.aridno
//     console.log('create job page', global.aridno);
//     async function saveUser() {
//         console.log('calling creating job...........',)
//         console.log('create job page', global.aridno);

//         let response = await fetch
//             (global.apiurl+'student/CreateJob',
//                 {
//                     method: 'POST',
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         jobtitle: title,
//                         description: description,
//                         cgpa: cgpa,
//                         platform: platform,
//                         city: city,
//                         aridno: global.aridno,
//                     })
//                 })
//         let json = await response.json()
//         console.log(JSON.stringify(json))
//         if (json == "Job Added") {
//             Alert.alert('Job', ' Posting Unsuccessfull')

//         }
//         else {
//             Alert.alert('Job', 'Added to Server')
//         }
//     }

//     return (
//         <View style={{ height: '100%' }}>
//             <Image source={bgImage} style={styles.bg} />
//             <Text style={{ color: "black", fontSize: 18, left: 15 }}>
//                 Job Title
//             </Text>
//             <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10 }}
//                 placeholderTextColor={'grey'}
//                 placeholder='Title..'
//                 onChangeText={n => settitle(n)}>
//             </TextInput>
//             <Text style={{ color: "black", fontSize: 18, left: 15 }}>
//                 Job Description
//             </Text>
//             <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10 }}
//                 placeholderTextColor={'grey'}
//                 placeholder='Describe whats the job about...'
//                 onChangeText={n => setdescription(n)}>

//             </TextInput>
//             <Text style={{ color: "black", fontSize: 18, left: 15 }}>
//                 Cgpa
//             </Text>
//             <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10 }}
//                 placeholderTextColor={'grey'}
//                 placeholder='Required CGPA'
//                 keyboardType='numeric'
//                 onChangeText={n => setcgpa(n)}>
//             </TextInput>
//             <Text style={{ color: "black", fontSize: 18, left: 15 }}>
//                 Select Skill
//             </Text>
//             <Picker style={styles.PickerView}
//                 selectedValue={platform}
//                 onValueChange={(Itemvalue) => { setplatform(Itemvalue) }}>
//                 <Picker.Item label='Flutter' value='Flutter' />
//                 <Picker.Item label='IOS' value='IOS' />
//                 <Picker.Item label='React Native' value='React Native' />
//                 <Picker.Item label='Web' value='Web' />
//                 <Picker.Item label='Android' value='Android' />
//             </Picker>
//             <Text style={{ color: "black", fontSize: 18, left: 15 }}>
//                 Select City
//             </Text>
//             <Picker style={{
//                 backgroundColor: 'lightgrey',
//                 height: 40, width: 350, left: 20, paddingLeft: 10
//             }}
//                 selectedValue={city}
//                 onValueChange={(Itemvalue) => { setcity(Itemvalue) }}>
//                 <Picker.Item label='Chakwal' value='Chakwal' />
//                 <Picker.Item label='Rawalpindi' value='Rawalpindi' />
//                 <Picker.Item label='Swabi' value='Swabi' />
//                 <Picker.Item label='Islamabad' value='Islamabad' />
//             </Picker>
//             <Button
//                 style={{ top: 10, height: 40, width: 120, left: 130, paddingLeft: 10, }}
//                 mode="contained"
//                 onPress={() => {
//                     console.log(title)
//                     console.log(description)
//                     console.log(cgpa)
//                     console.log(platform)
//                     console.log(city)
//                     console.log(Aridno)
//                     saveUser()
//                 }}>
//                 Post Job
//             </Button>
//         </View>
//     )
// }
// const styles = StyleSheet.create
//     (
//         {
//             PickerView: {
//                 backgroundColor: 'lightgrey',
//                 margintop: 10,
//                 // marginStart:40,
//                 height: 40, width: 350, left: 20, paddingLeft: 10
//             },
//             bg: {
//                 justifyContent: 'center',
//                 marginTop: 30,
//                 left: 80,
//             },
//         }
//     )

// export default CreateJob


import { View, Text, StyleSheet, ImageBackground, Image, Platform, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { Alert } from 'react-native';
import bgImage from '../assets/logo.png';
import { Button, TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import job from './Jobs';

//global.apiUrl = 'http://192.168.232.97/FypAlumni/api/student/'
const CreateJob = ({ navigation }) => {

    const [title, settitle] = useState();
    const [description, setdescription] = useState();
    const [platform, setplatform] = useState();
    const [cgpa, setcgpa] = useState();
    const [city, setcity] = useState();
    const [Aridno, setAridno] = useState("aridno");
    const [company, setcompany] = useState();
    const [salary, setsalary] = useState();

        async function saveUser() {
            let response = await fetch
                (global.apiurl + 'student/addjob',
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            job_title: title,
                            job_disc: description,
                            cgpa: cgpa,
                            platform: platform,
                            city: city,
                            aridno: global.aridno,
                            company:company,
                            salary:salary,
                    })
                    })
            let json = await response.json()
            console.log(JSON.stringify(json))
            if (json == "Job Added") {
                Alert.alert('Job', ' Posting Unsuccessfull')

            }
            else {
                Alert.alert('Job', 'Posted')
            }
    }

    return (
      <SafeAreaView
        style={{
          height: '100%',
          Bottom: 60,
          flex: 1,
          flexGrow: 1,
        }}>
        <ScrollView>
          <Image source={bgImage} style={styles.bg} />
          <Text style={{color: 'black', fontSize: 18, left: 20}}>
            Job Title
          </Text>
          <TextInput
            style={{height: 40, width: 350, left: 25, paddingLeft: 10}}
            placeholderTextColor={'grey'}
            placeholder="Title.."
            onChangeText={n => settitle(n)}></TextInput>
          <Text style={{color: 'black', fontSize: 18, left: 20}}>
            Job Description
          </Text>
          <TextInput
            style={{height: 40, width: 350, left: 25, paddingLeft: 10}}
            placeholderTextColor={'grey'}
            placeholder="Describe whats the job about..."
            onChangeText={n => setdescription(n)}></TextInput>
          <Text style={{color: 'black', fontSize: 18, left: 20}}>Cgpa</Text>
          <TextInput
            style={{height: 40, width: 350, left: 25, paddingLeft: 10}}
            placeholderTextColor={'grey'}
            placeholder="Required CGPA"
            keyboardType="numeric"
            onChangeText={n => setcgpa(n)}></TextInput>
          <Text style={{color: 'black', fontSize: 18, left: 20}}>Salary</Text>
          <TextInput
            style={{height: 40, width: 350, left: 25, paddingLeft: 10}}
            placeholderTextColor={'grey'}
            placeholder="Salary in numbers"
            onChangeText={n => setsalary(n)}></TextInput>
          <Text style={{color: 'black', fontSize: 18, left: 20}}>Company</Text>
          <TextInput
            style={{height: 40, width: 350, left: 25, paddingLeft: 10}}
            placeholderTextColor={'grey'}
            placeholder="Company name"
            onChangeText={n => setcompany(n)}></TextInput>
          <Text style={{color: 'black', fontSize: 18, left: 20}}>
            Select Skill
          </Text>
          <Picker
            style={styles.PickerView}
            selectedValue={platform}
            onValueChange={Itemvalue => {
              setplatform(Itemvalue);
            }}>
            <Picker.Item label="Flutter" value="Flutter" />
            <Picker.Item label="IOS" value="IOS" />
            <Picker.Item label="React Native" value="React Native" />
            <Picker.Item label="Web" value="Web" />
            <Picker.Item label="Android" value="Android" />
          </Picker>
          <Text style={{color: 'black', fontSize: 18, left: 20}}>
            Select City
          </Text>
          <Picker
            style={{
              backgroundColor: 'lightgrey',
              height: 40,
              width: 350,
              left: 25,
              paddingLeft: 10,
            }}
            selectedValue={city}
            onValueChange={Itemvalue => {
              setcity(Itemvalue);
            }}>
            <Picker.Item label="Chakwal" value="Chakwal" />
            <Picker.Item label="Rawalpindi" value="Rawalpindi" />
            <Picker.Item label="Swabi" value="Swabi" />
            <Picker.Item label="Islamabad" value="Islamabad" />
          </Picker>
          <Button
            style={{
              top: 10,
              height: 40,
              width: 120,
              left: 135,
              paddingLeft: 10,
              marginBottom: 50,
            }}
            mode="contained"
            onPress={() => {
              console.log(title);
              console.log(description);
              console.log(cgpa);
              console.log(platform);
              console.log(city);
              console.log(Aridno);
              saveUser();
            }}>
            Post Job
          </Button>
        </ScrollView>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create
    (
        {
            PickerView: {
                backgroundColor: 'lightgrey',
                margintop: 10,
                // marginStart:40,
                height: 40, width: 350, left: 25, paddingLeft: 10
            },
            bg: {
                justifyContent: 'center',
                marginTop: 10,
                left: 80,
            },
        }
    )

export default CreateJob