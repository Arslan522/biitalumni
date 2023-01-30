import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { parse } from '@babel/core'
import avatarImage from '../assets/logo.png';

//import QRCode from 'react-native-qrcode-generator'

export default function ViewOrder() {
  const [getdata, setdata] = useState()
  const [imgsrc, setImagesrc] = useState(Image.resolveAssetSource(avatarImage).uri)
  const [image, setImage] = useState({})

  const data = new FormData()
  // data.append('name', 'hello')
  data.append('PostPhoto', { uri: image.uri, type: image.type, name: image.fileName })

  console.log("get ..............", global.aridnum);
  useEffect(() => {
    OrdersView()
  }, [])
  //console.log("Products shown here",getProduct)

  async function OrdersView() {
    //  let id = await AsyncStorage.getItem("userId")
    let response = await fetch
      (global.apiurl + 'student/getalumni')

    let json = await response.json();
    console.log(JSON.stringify(json));
    setdata(json);

    //console.log("this wil  show profile...............",global.apiurl +'student/getalumni',json)
  }
  console.log(global.aridno)
  ///global.shopPhone
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', backgroundColor: '#16448F', padding: 15, color: 'white', bottom: 0, width: '100%', right: 0 }}>
        <Text style={{ color: 'white', fontSize: 20, }}>Searched Result</Text>
      </View>
      <View >
        <FlatList
          //style={{ flex: 1 }}
          data={getdata}
          renderItem={({ item }) => {
            console.log(item);
            return (

              <View style={styles.FlatlistContainer} key={item.key}>
                <View style={styles.infoContainer}>
                  <Image style={{
                    backgroundColor: "black", height: 70,
                    width: 70, borderRadius: 50, top: 15, right: 10
                  }}
                    source={{ uri: global.imageUrl + `${item.image}` }} />
                  <Text style={{ color: 'black', fontSize: 18, left: 70, bottom: 50 }} >{item.fname} {item.lname} ({item.aridno})</Text>
                  <Text style={{ color: 'black', fontSize: 17, left: 70, bottom: 50 }}>{item.skills}</Text>
                </View>
              </View>)
                                    }
                       } 
              />
      </View>
    </View>
  )
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