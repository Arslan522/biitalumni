import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import ScreenOfSurveys from './ScreenOfSurvey'

const AddQuestion = ({navigation}) => {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 18, left: 15 }}>
                Question 
            </Text>
            <TextInput style={{ height: 40, width: 350, left: 20, paddingLeft: 10, backgroundColor: 'lightgrey' }}
                placeholderTextColor={'grey'}
                placeholder='Type here..'>
            </TextInput>
            
            <Button
                style={{ top: 15, height: 40, width: 350, left: 20, paddingLeft: 10, }}
                mode="contained"
                >
                Add
            </Button>
            <Text style={{ color: "black", fontSize: 18, left: 15 ,top:30,backgroundColor:"lightgrey",height:40,paddingTop:4,right:2}}>
                Is Flutter Paid? 
                <Icon name="delete" size={15} />
            </Text>
            <Text style={{ color: "black", fontSize: 18, left: 15 ,top:40,backgroundColor:"lightgrey",height:40,paddingTop:4,right:2}}>
                Is Android in C++?
                <Icon name="delete" size={15} />
            </Text>
            <Button
                style={{ top: 50, height: 40, width: 350, left: 20, paddingLeft: 10, }}
                mode="contained"
                onPress={() =>
                    alert("Survey has been forwarded to the admin for approval !! \n Wait until the response !")}>
                Submit Survey
            </Button>
    </View>
  )
}

export default AddQuestion