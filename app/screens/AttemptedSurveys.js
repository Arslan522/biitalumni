import { View, Text, SafeAreaView } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AttemptedSurveys = ({ navigation }) => {
    const [Skill, setSkill] = useState();
    const [checked1, setChecked1] = useState('first');
    const [checked2, setChecked2] = useState('first');

    return (
        <SafeAreaView><Text style={{ top: 7, fontSize: 25, color: "black", marginTop: 20, left: 120 }}>
            React Native
        </Text>
            <Text style={{ top: 7, fontSize: 20, color: "black", marginTop: 10, left: 10 }}>
                Questions of survey
            </Text>
            <View style={{ flexDirection: "row", marginTop: 30, left: 10 }}>

                <Text style={{ top: 10, fontSize: 15, color: "black" }}
                    onChangeText={n => setSkill(n)}>
                    Is react native worth to learn in 2023?
                </Text>
                <View style={{ flexDirection: "row", left: 18 }}>
                    <RadioButton
                        value="first"
                        status={checked1 === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1('first')}
                    />
                    <Text style={{ top: 28, right: 25, color: "black" }}>No</Text>
                    <RadioButton
                        value="second"
                        status={checked1 === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1('second')}
                    />
                    <Text style={{ top: 28, right: 28, color: "black" }}>Yes</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, left: 10 }}>
                <Text style={{ top: 7, fontSize: 15, color: "black" }}
                    onChangeText={n => setSkill(n)}>
                    Will react native be dead by 2026?
                </Text>
                <View style={{ flexDirection: "row", left: 40 }}>
                    <RadioButton
                        value="first"
                        status={checked2 === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked2('first')}
                    />
                    <Text style={{ top: 28, right: 26, color: "black" }}>No</Text>
                    <RadioButton
                        value="second"
                        status={checked2 === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked2('second')}
                    />
                    <Text style={{ top: 28, right: 26, color: "black" }}>Yes</Text>
                </View>
            </View>
            <Button
                mode='contained'
                style={{ top: 20 }}
                width={100}
                left={150}
                onPress={() =>
                    Alert.alert('Survey', 'Attempted Successfully !!')
                }>
                Submit
            </Button>
        </SafeAreaView>
    )
}

export default AttemptedSurveys