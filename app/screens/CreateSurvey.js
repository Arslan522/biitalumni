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
import { ScrollView } from 'react-native-gesture-handler';

const CreateSurvey = ({ navigation }) => {

    const [title, settitle] = useState();
    const [startdate, setstartdate] = useState();
    const [enddate, setenddate] = useState();
    const [aridno, setaridno] = useState();





    async function saveSurvey() {
        console.log('calling Creating Survey...........',)
        let response = await fetch
            (global.apiurl+'student/CreateSurvey',
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
                        aridno:global.aridno,
                    })
                })
        let json = await response.json()
        console.log(JSON.stringify(json))
        if (json == "Survey Created") {
            Alert.alert('Survey', ' Forwarded to Admin')

        }
        else {
            Alert.alert('Survey', 'Notadded ')
            navigation.navigate("AddQuestion")
        }
    }


    return (
        <ScrollView>
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
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Enter at least 5 Questions
            </Text>
            <TextInput style={styles.question}
                placeholderTextColor={'grey'}
                placeholder='Question 1'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 2'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 3'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 4'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 5'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 6'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 7'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 8'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 9'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <TextInput style={styles.question}                placeholderTextColor={'grey'}
                placeholder='Question 10'
                onChangeText={n => setstartdate(n)}>
            </TextInput>
            <Button
                style={{ top: 15, height: 40, width: 350, left: 20, paddingLeft: 10, }}
                mode="contained"
                onPress={() => {
                    console.log(title)
                    console.log(startdate)
                    console.log(enddate)
                    saveSurvey()
                }}>
                Post Survey
            </Button>
        </ScrollView >
    )
}
const styles = StyleSheet.create
    (
        {
            question: { height: 40, width: 350, left: 20, paddingLeft: 10, marginBottom: 6, backgroundColor: 'lightgrey' },
            PickerView: {
                backgroundColor: 'lightgrey',
                margintop: 10,
                // marginStart:40,
                height: 40, width: 350, left: 20, paddingLeft: 10
            },
            bg: {
                justifyContent: 'center',
                marginTop: 10,
                width:100,
                marginBottom:40,
                height:100,
                left: 140,
            },



        }
    )

export default CreateSurvey