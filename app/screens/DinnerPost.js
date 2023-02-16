  import { View, Text, StyleSheet, TextInput, Image, ScrollView, ImageBackground, SafeAreaView } from 'react-native'
import { Button, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import React from 'react';
import bgImage from '../assets/bgimg1.png';
import bgImage2 from '../assets/profilepic.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconButton } from 'react-native-paper';
import Endorcement from './Endorcement';
import { useState } from 'react';
import { JumpingTransition } from 'react-native-reanimated';
import { useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



export default function DinnerPost  ({navigation})  {
  const[dinnerView,setDinnerView]= useState();
   useEffect(() => {
     DinnerPostView();
     // NextScreen();
   }, []);
  async function DinnerPostView() {
    let response = await fetch
      (global.apiurl + 'student/getdinnerpost' )  
       let json = await response.json();
    console.log("arslan...........", { json });
    // return json.email
    setDinnerView(json);
  }
   return (
     <SafeAreaView style={{flex:1}}>
       <TouchableOpacity
         style={{
          //  backgroundColor: '#Ff18',
           elevation: 20,

           borderRadius: 200,
           paddingHorizontal: 10,
           paddingLeft  :10,
           marginHorizontal: 15,
           //  width: 60,
           //  left: '77%',
           top: '10%',}}
 onPress={() => {
            navigation.navigate('Dinner')
          }}

         >
         <Text style={{backgroundColor: 'white',borderRadius:20,paddingLeft:20,fontSize:17,paddingVertical:10}}>
            Click to arrange a dinner
         </Text>
       </TouchableOpacity>
       <FlatList
         style={{padding: 10,backgroundColor:"lightgrey",marginTop:"5%"}}
         data={dinnerView}
         // extraData = {query}
         // numColumns='1'
         renderItem={({item}) => {
           return (
             <View
               style={{
                 borderColor: 'black',
                 paddingVertical: 10,
                 paddingHorizontal: 10,
                 elevation: 20,
                 borderTopLeftRadius: 15,
                 borderTopRightRadius: 15,
                 borderBottomLeftRadius: 15,
                 borderBottomRightRadius: 15,
                 // flexDirection: 'row',
                 margin: 7,
                 backgroundColor: 'lightyellow',
               }}
               key={item.key}>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: 'black',
                     fontSize: 18,
                     fontWeight: 'bold',
                     width: '50%',
                   }}>
                   {item.title}
                 </Text>
                 {/* <View></View>
                 <View style={{borderBottomWidth:30,borderBottomColor:"black",borderWidth:2}}></View> */}

                 <Text
                   style={{
                     color: 'black',
                     fontSize: 17,
                     fontWeight: 'bold',

                     top: '1%',
                     marginLeft: '14%',
                   }}>
                   On :- {item.date}
                 </Text>
               </View>
               <View style={{flexDirection: 'row'}}>
                 <Text
                   style={{
                     color: 'black',
                     fontSize: 17,
                     left: '2%',
                     width: '58%',
                   }}>
                   {item.discription}
                 </Text>
                 <Text
                   style={{
                     color: 'black',
                     fontSize: 17,
                     top: '1%',
                     marginLeft: '6.2%',
                   }}>
                   Batch :- {item.year}
                 </Text>
               </View>
             </View>
           );
         }}
       />
     </SafeAreaView>
   );
}
const styles = StyleSheet.create({
  editprofilebtn: {
    left: 120,
    width: 160,
    color: 'cyan'
  },
  nametxt: {
    padding: 3,
    bottom: 125,
    fontSize: 13,
    left: 97,
    fontWeight: "bold",
  },
  nametxt1: {
    padding: 3,
    bottom: 132,
    fontSize: 13,
    left: 97,
    fontWeight: "bold",
  },
  bgimg1: {

    width: 400,
    height: 190,
  },
  bgimg2: {
    width: 70,
    marginTop:70,
    height: 70,
    borderRadius: 90,
    left: 20,
    bottom: 60,
  },
  flatListtext: {
    paddingLeft: 15,
    //marginTop:10, 
    fontSize: 16,
    color: 'grey',
    //marginLeft:20,
    // alignSelf: 'center',


  },
})