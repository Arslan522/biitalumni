import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import bgImage from '../assets/logo.png';
import { Button, TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import job from './Jobs';
import ConductedSurveys from './ConductedSurveys';
import AddQuestion from './AddQuestion';
import { Alert } from 'react-native';

const CreateSurvey = ({ navigation }) => {

    const [title, settitle] = useState();
    const [startdate, setstartdate] = useState();
    const [enddate, setenddate] = useState();




    async function saveUser() {
        console.log('calling Creating Survey...........',)
        let response = await fetch
            ('http://192.168.100.42/FypAlumni/api/student/CreateSurvey',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        start_date: startdate,
                        end_date: enddate,
                    })
                })
        let json = await response.json()
        console.log(JSON.stringify(json))
        if (json == "Survey Added") {
            Alert.alert('Survey', ' Posting Unsuccessfull')

        }
        else {
            Alert.alert('Survey', 'Added to database')
            navigation.navigate("AddQuestion")
        }
    }


    return (
        <View style={{ height: '100%' }}>
            <Image source={bgImage} style={styles.bg} />
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Title for the survey
            </Text>
            <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10, backgroundColor: 'lightgrey' }}
                placeholderTextColor={'grey'}
                placeholder='Title..'
                onChangeText={n => settitle(n)}>

            </TextInput>
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Start Date
            </Text>
            <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10, backgroundColor: 'lightgrey' }}
                placeholderTextColor={'grey'}
                placeholder='Enter Start Date'
                onChangeText={n => setstartdate(n)}>

            </TextInput>
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                End Date
            </Text>
            <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10, backgroundColor: 'lightgrey' }}
                placeholderTextColor={'grey'}
                placeholder='Enter End Date'
                keyboardType='numeric'
                onChangeText={n => setenddate(n)}>

            </TextInput>
            <Button
                style={{ top: 15, height: 40, width: 350, left: 20, paddingLeft: 10, }}
                mode="contained"
                onPress={() => {
                    console.log(title)
                    console.log(startdate)
                    console.log(enddate)
                    saveUser()
                }}>
                Post Survey
            </Button>
        </View>
    )
}
const styles = StyleSheet.create
    (
        {
            PickerView: {
                backgroundColor: 'lightgrey',
                margintop: 10,
                // marginStart:40,
                height: 40, width: 350, left: 20, paddingLeft: 10
            },
            bg: {
                justifyContent: 'center',
                marginTop: 30,
                left: 80,
            },



        }
    )

export default CreateSurvey