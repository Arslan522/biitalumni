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
import {IconButton, List, MD3Colors, Switch} from 'react-native-paper';

import bgImage from '../assets/logoo.png';

//import QRCode from 'react-native-qrcode-generator'

export default function Jobs({navigation, props}) {
  const [Data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [product, setproduct] = useState([]);
  const [filterProduct, setfilterProduct] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  useEffect(() => {
    ViewJobs();
  }, []);
  //console.log("Products shown here",getProduct)

  async function ViewJobs() {
    //  let id = await AsyncStorage.getItem("userId")
    let response = await fetch(global.apiurl + 'student/getthejobs');

    let json = await response.json();
    console.log(JSON.stringify(json));
    setData(json);
    setproduct(json.slice());

    //console.log("this wil  show profile...............",global.apiurl +'student/getalumni',json)
  }
  console.log(global.aridno);

  const onChangeSearch = text => {
    setQuery(text);
    if (text.length > 0) {
      text = text.toLowerCase();
      const filter = product.filter(ele =>
        ele?.city?.toLowerCase().includes(text),
      );
      setfilterProduct(filter);
    } else {
      setfilterProduct([]);
    }
  };

  const NextScreen = item => {
    console.log('new data is here from Job page.............', item);
    navigation.navigate('Showjob', {datajob: item});
  };

  return (
    <ScrollView style={{flex: 1}}>
      <Searchbar
        style={{
          borderRadius: 50,
          marginTop: 5,
          paddingHorizontal: 5,
          marginHorizontal: 5,
        }}
        onChangeText={e => onChangeSearch(e)}
        value={query}
        // onChange={(e)=>onChangeSearch(e)}
        placeholder="Search by name/skills.."
      />

      <View
        style={{
          padding: 5,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderColor: 'black',
            paddingVertical: 10,
            paddingHorizontal: 10,
            elevation: 20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateJob')}>
              <View
                style={{
                  backgroundColor: 'lightblue',
                  borderRadius: 10,
                  width: 60,
                  left: 300,
                  padding: 2,
                }}>
                <Icon name="add" size={30} color="black" style={{left: 12}} />
                <Text style={{bottom: 8, color: 'black'}}>New Job</Text>
              </View>
            </TouchableOpacity>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{right: '80%', bottom: '4%'}}
            />
            <Text style={{top: '6%', right: '170%', color: 'black'}}>
              View Jobs
            </Text>
          </View>
          {isEnabled && (
            <FlatList
              data={query.length > 0 ? filterProduct : product}
              keyExtractor={i => i.id}
              renderItem={({item}) => {
                // console.log(item);

                return (
                  <SafeAreaView>
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
                            <Text style={{color: 'black', fontSize: 17}}>
                              {item.job_title}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 17,
                                fontWeight: 'bold',
                              }}>
                              Company :{' '}
                            </Text>
                            <Text style={{color: 'black', fontSize: 17}}>
                              {item.company}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 17,
                                fontWeight: 'bold',
                                right: -0.7,
                              }}>
                              City :{' '}
                            </Text>
                            <Text style={{color: 'black', fontSize: 17}}>
                              {item.city}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </SafeAreaView>
                );
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  FlatlistContainer: {
    flexDirection: 'row',
    margin: 7,
    borderRadius: 10,
    backgroundColor: 'lightgrey'
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



