import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { parse } from '@babel/core'
import avatarImage from '../assets/logo.png';
import Icon from "react-native-vector-icons/MaterialIcons";
import CreateJob from './CreateJob';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import SearchStudent from "./SearchStudent";
import bgImage from '../assets/logoo.png';

//import QRCode from 'react-native-qrcode-generator'

export default function ConductedSurveys({ navigation,props }) {
  const [Data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [product, setproduct] = useState([]);
  const [filterProduct, setfilterProduct] = useState([])
  // const [imgsrc, setImagesrc] = useState(Image.resolveAssetSource(avatarImage).uri)
  // const [image, setImage] = useState({})


  useEffect(() => {
    ViewSurveys()
  }, [])
  //console.log("Products shown here",getProduct)

  async function ViewSurveys() {
    //  let id = await AsyncStorage.getItem("userId")
    let response = await fetch
      (global.apiurl + 'student/getsurvey')

    let json = await response.json();
    console.log("survey listt/..........",json);
    setData(json);

    //console.log("this wil  show profile...............",global.apiurl +'student/getalumni',json)
  }
  console.log(global.aridno)
const NextScreen = item => {
  console.log('new data is here from survey page.............', item);
  navigation.navigate('ShowSurvey', {datasurvey: item});
};
  ///global.shopPhone
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
          borderColor: 'black',
          paddingVertical: 10,
          paddingHorizontal: 10,
          elevation: 10,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateSurvey')}>
          <View
            style={{
              backgroundColor: 'lightblue',
              borderRadius: 10,
              width: 60,
              left: 300,
              padding: 2,
            }}>
            <Icon name="add" size={30} color="black" style={{left: 12}} />
            <Text style={{bottom: 8,left:5, color: 'black'}}>Survey</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={Data}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderColor: 'black',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  elevation: 10,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  flexDirection: 'row',
                  margin: 7,
                  backgroundColor: 'lightgrey',
                }}
                key={item.key}>
                <TouchableOpacity
                  onPress={() => {
                    NextScreen(item);
                  }}>
                  <View style={styles.infoContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        Title :{' '}
                      </Text>
                      <Text style={{color: 'black', fontSize: 17, left: 2}}>
                        {' '}
                        {item.title}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 17,
                          fontWeight: 'bold',
                          left: 1.5,
                        }}>
                        Start Date :{' '}
                      </Text>
                      <Text style={{color: 'black', fontSize: 17, left: 4}}>
                        {' '}
                        {item.start_date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View
          style={{
            backgroundColor: 'lightblue',
            borderRadius: 200,
            width: 60,
            left: 300,
            top: '120%',
          }}>
          <Icon
            name="add"
            size={60}
            color="black"
            style={{position: 'relative'}}
            onPress={() => navigation.navigate('CreateSurvey')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FlatlistContainer: {
    //backgroundColor: '#F0ECD5',
    flexDirection: 'row',
    margin: 7,
    //flex:1,
    borderRadius: 10,
    backgroundColor: 'lightgrey'
    //flexGrow:0
  },

  Text: {
    fontSize: 15,
    color: 'grey',

  },

  QRCode: {
    marginLeft: 20,
  },

  imageContainer: {
    height: 70,
    width: 77,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor:'red',

  },

  infoContainer: {
    marginLeft: 20,
    // flexDirection:"row",
    // width:200,
    // alignItems: 'flex-start',
    // justifyContent: "space-evenly",
    // width: 180,
    // //backgroundColor:'#F0ECD5',

  },
})



