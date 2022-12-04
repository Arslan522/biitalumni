import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import bgImage from '../assets/logo.png';
import { Button, TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import job from './Jobs';
import ConductedSurveys from './ConductedSurveys';
const CreateSurvey = ({ navigation }) => {

    const [Degree, setDegree] = useState();
    const [City, setCity] = useState();

    return (

        <View style={{ height: '100%' }}>
            <Image source={bgImage} style={styles.bg} />
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Title for the survey
            </Text>
            <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10, backgroundColor: 'lightgrey' }}
                placeholderTextColor={'grey'}
                placeholder='Title..'>
            </TextInput>
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Start Date
            </Text>
            <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10, backgroundColor: 'lightgrey' }}
                placeholderTextColor={'grey'}
                placeholder='Enter Start Date'>

            </TextInput>
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                End Date
            </Text>
            <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10, backgroundColor: 'lightgrey' }}
                placeholderTextColor={'grey'}
                placeholder='Enter End Date'
                keyboardType='numeric'>
            </TextInput>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%', marginTop: -10, marginBottom: 5 }}>
          <View style={{ flex: 1, height: 1.5, backgroundColor: 'darkgrey' }} />
        </View> */}
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Select your degree
            </Text>
            <Picker style={styles.PickerView}
                selectedValue={Degree}
                onValueChange={(Itemvalue) => { setDegree(Itemvalue) }}>
                <Picker.Item label='BSCS' value='BSCS' />
                <Picker.Item label='BSIT' value='BSIT' />
            </Picker>
            <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Select city
            </Text>
            <Picker style={{
                backgroundColor: 'lightgrey',
                // top: 10,
                height: 40, width: 350, left: 20, paddingLeft: 10,
            }}
                selectedValue={City}
                onValueChange={(Itemvalue) => { setCity(Itemvalue) }}>
                <Picker.Item label='Chakwal' value='Chakwal' />
                <Picker.Item label='Rawalpindi' value='Rawalpindi' />
                <Picker.Item label='Swabi' value='Swabi' />
                <Picker.Item label='Islamabad' value='Islamabad' />
            </Picker>
            <Button
                style={{ top: 10, height: 40, width: 350, left: 20, paddingLeft: 10, }}
                mode="contained"
                onPress={() =>
                    navigation.navigate('ConductedSurveys')}>
                Create Survey
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