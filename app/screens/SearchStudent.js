import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import { Button, } from 'react-native-paper';
import React from 'react';
import { useState } from 'react';
import bgImage from '../assets/search.png'
import { Picker } from '@react-native-picker/picker';
const SearchStudent = ({ navigation }) => {
  const[city,setcity]=useState();

  return (
    <View style={{}}>
      <ScrollView>
        <Image source={bgImage} style={{ alignContent: "center", justifyContent: "center", marginLeft: 80 }} />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ flex: 1, top: 13, fontWeight: 'bold', left: 7 }}>
            Enter Arid-No     :
          </Text>
          <TextInput style={{ flex: 2, }} placeholder='Enter Arid-No' />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ flex: 1, top: 13, fontWeight: 'bold', left: 7 }}>
            Enter Name        :
          </Text>
          <TextInput style={{ flex: 2, left: 1 }} placeholder='Enter Name' />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ flex: 1, top: 18, fontWeight: 'bold', left: 7 }}>
            Select Category :
          </Text>
          <Picker selectedValue={city} onValueChange={(itemvalue, itemindex) =>
            setcity(itemvalue)} style={{ flex: 2 }}>
            <Picker.Item label='BSCS' value='j' />
            <Picker.Item label='BSIT' value='cs' />
            <Picker.Item label='BSAI' value='cp' />
          </Picker>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ flex: 1, top: 12.5, fontWeight: 'bold', left: 7 }}>
            Passing Year      :
          </Text>
          <TextInput placeholder='Enter Passing year' style={{ flex: 2, left: 2 }}>

          </TextInput>
        </View>
        <Button style={{ left: 110, marginTop: 20, width: 160 }} mode='contained'
          onPress={() =>
            navigation.navigate('SearchedStudent')}>
          Search Alumni
        </Button>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

})
export default SearchStudent