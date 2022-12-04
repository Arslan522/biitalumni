import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { Button } from 'react-native-paper'
import bgImage from '../assets/logo.png';
import { StyleSheet } from 'react-native';
import CreateSurvey from './CreateSurvey';


const Survey = ({navigation}) => {
  return (
    <View>
    <Image source={bgImage} style={styles.bg} />
    <Button style={{top:10 , width: 250,left:80}} 
      mode="contained"
      onPress={() =>
        navigation.navigate('CreateSurvey')}>
        Create Survey
      </Button>
      <Button style={{top:14 , width: 250,left:80}} 
      mode="contained"
      onPress={() =>
        navigation.navigate('ConductedSurveys')}>>
        Pending Surveys
      </Button>
      <Button style={{top:18, width: 250,left:80}} 
      mode="contained">
        Approved Surveys
      </Button>
      <Button style={{top:22, width: 250,left:80}} 
      mode="contained"
      onPress={() =>
        navigation.navigate('CreateSurvey')}>>
        Requested for approving
      </Button>
      
    </View>
  )
}
const styles = StyleSheet.create({


bg: {
    marginTop:30,alignContent:"center",left:87,
  },
})
export default Survey