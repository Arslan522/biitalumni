import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { parse } from '@babel/core'
//import QRCode from 'react-native-qrcode-generator'

export default function ViewOrder() {
  const [getProduct, setProduct] = useState()
  console.log("get ..............",global.aridnum);
  useEffect(() => {
    OrdersView()
  }, [])
  //console.log("Products shown here",getProduct)

  async function OrdersView() {
    //  let id = await AsyncStorage.getItem("userId")
    let response = await fetch
      (global.apiUrl + 'student/getalumni')
    let json = await response.json();
    console.log(JSON.stringify(json));
    setProduct(json);
    //console.log("this...............",global.apiUrl +'student/getalumni',json)
  }
  console.log(global.aridno)
  ///global.shopPhone
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', backgroundColor: '#16448F', padding: 15, color: 'white', bottom: 0, width: '100%', right: 0 }}>
        <Text style={{ color: 'white', fontSize: 20, }}>Order List</Text>
      </View>
      <View >
        <FlatList
          //style={{ flex: 1 }}
          data={getProduct}
          renderItem={({ item }) => {
            console.log(item);
            return (

              <View style={styles.FlatlistContainer} key={item.key}>
                <View style={styles.infoContainer}>
                  <Text style={{ color: 'black', fontSize: 17 }} >{item.fname}</Text>
                  <Text style={{ color: 'black', fontSize: 17 }} >{item.lname}</Text>
                  <Text style={styles.Text}>{item.aridno}</Text>
                </View>

              </View>)
          }
          } />
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
    backgroundColor: 'grey'
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
    alignItems: 'flex-start',
    justifyContent: "space-evenly",
    width: 180,
    //backgroundColor:'#F0ECD5',

  },
})



