import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Image} from 'react-native';
import {useEffect} from 'react';
import {IconButton, List, MD3Colors,Switch} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

const Sessionvise = ({navigation}) => {
  const [postdescription, setPostDescription] = useState();
  const [getProduct, setProduct] = useState();
  const [Postdata, setPostdata] = useState();
  const [imgsrc, setImagesrc] = useState();
  const [image, setImage] = useState({});
  const [count, setCount] = useState();
 const [isSwitchOn, setIsSwitchOn] = useState();

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    timelineView();
  }, []);
  async function timelineView() {
    console.log(global.session);
    let response = await fetch(global.apiurl + 'student/showNotification?session='+global.session);
    let json = await response.json();
    console.log(JSON.stringify(json));
    setProduct(json);
  }
  return (
    <SafeAreaView style={{backgroundColor: 'lightgrey', marginTop: 20}}> 
      
      <View style={{flexDirection: 'row'}}>
        {/* <TouchableOpacity
          style={{
            borderRadius: 100,
            paddingLeft: 20,
            width: '55%',
            marginLeft: 10,
            backgroundColor: 'lightgrey',
          }}
          onPress={() => {
            navigation.navigate('CreatePost');
          }}>
          <View style={{flexDirection: 'row'}}>
            <IconButton icon="camera" size={40} />
            <Text style={{fontSize: 20, top: 18, color: 'black'}}>
              Create post
            </Text>
          </View>
         
        </TouchableOpacity> */}
      </View>
      <FlatList
        style={{
          padding: 5,
        }}
        data={getProduct}
        scrollEnabled
        renderItem={({item}) => {
          console.log('Flatlist items.......', item);
          return (
            <View style={styles.FlatlistContainer} key={item.key}>
              <List.Item
                title={item.description}
                description={item.date}
                left={props => <List.Icon {...props} icon="post-outline" />}
              />
            </View>
          );
        }}
        //to get the latest post on top
        inverted
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  FlatlistContainer: {
    backgroundColor: 'white',
    margin: 5,
    // marginTop: 10,
    // position: 'relative',
    borderRadius: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sessionvise;

// import { View, Text } from 'react-native'
// import React from 'react'
// import { useState } from 'react';
// import { Image } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import { useEffect } from 'react';

// import { StyleSheet } from 'react-native';
// const ShowNotification = () => {
//   const [postdescription, setPostDescription] = useState();
//   const [getProduct, setProduct] = useState()
//   const [Postdata, setPostdata] = useState()
//   const [imgsrc, setImagesrc] = useState()
//   const [image, setImage] = useState({})

//   useEffect(() => {
//     timelineView()
//   }, [])
//   async function timelineView() {
//     let response = await fetch
//       (global.apiurl + 'student/showNotification')
//     let json = await response.json();
//     console.log(JSON.stringify(json));
//     setProduct(json);
//   }
//   return (
//     <View>
//       <FlatList
//         style={{ backgroundColor: "darkgray" }}
//         data={getProduct}
//         style={{backgroundColor:"black"}}

//         scrollEnabled
//         renderItem={({ item }) => {
//           console.log("Flatlist items.......", item);
//           return (
//             <View style={styles.FlatlistContainer} key={item.key}>
//               <View style={{ flexDirection: "row", left: 5, top: 0}}>
//                 {/* <Image style={{ backgroundColor: "black", height: 50, width: 50, borderRadius: 50 }} source={{ uri: global.imageUrl + `${item.ProfileImg}` }} /> */}
//                 <Text style={{ color: 'black', fontSize: 18, top: 7, left: 7, fontWeight: "bold" }} >{item.description} </Text>
//               </View>

//               <View style={styles.infoContainer}>
//                 <Text style={{ color: 'black', fontSize: 17, fontFamily: "bold", left: 9, top: 7 }} >Date :- {item.date}</Text>
//               </View>
//               <View style={{
//                 borderColor: "black",
//                 borderTopWidth: 0.5,
//                 top: 7,
//                 paddingTop: 10,

//               }}>
//               </View>

//             </View>)
//         }
//         }
//         //to get the latest post on top
//         inverted />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   FlatlistContainer: {
//     backgroundColor: 'white',
//     margin: 5,
//     // marginTop: 10,
//     position: 'relative',
//   },

//   Text: {
//     fontSize: 15,
//     color: 'grey',

//   },

//   QRCode: {
//     marginLeft: 20,
//   },

//   imageContainer: {
//     height: 70,
//     width: 77,
//     marginLeft: 10,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",

//   },
// })

// export default ShowNotification
