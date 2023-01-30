import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react';

const ShowNotification = () => {
    const [postdescription, setPostDescription] = useState();
    const [getProduct, setProduct] = useState()
    const [Postdata, setPostdata] = useState()
    const [imgsrc, setImagesrc] = useState()
    const [image, setImage] = useState({})

    useEffect(() => {
        timelineView()
    }, [])
    async function timelineView() {
        let response = await fetch
            (global.apiurl + 'student/showNotification')
        let json = await response.json();
        console.log(JSON.stringify(json));
        setProduct(json);
        console.log("this..........hgfhg.....", json)
    }
  return (
    <View>
          <FlatList
              style={{ backgroundColor: "darkgray" }}
              data={getProduct}

              scrollEnabled
              renderItem={({ item }) => {
                  console.log("Flatlist items.......", item);
                  return (
                      <View style={{
                          backgroundColor: 'white',
                          margin: 5,
                          marginTop: 10,
                          position: 'relative',}} key={item.key}>
                          <View style={{ flexDirection: "row", left: 5, top: 4 }}>
                              <Image style={{ backgroundColor: "black", height: 50, width: 50, borderRadius: 50 }} source={{ uri: global.imageUrl + `${item.ProfileImg}` }} />
                              <Text style={{ color: 'black', fontSize: 18, top: 7, left: 7, fontWeight: "bold" }} >{item.description} </Text>
                          </View>

                          <View style={{
                              height: 70,
                              width: 77,
                              marginLeft: 10,
                              borderRadius: 10,
                              alignItems: "center",
                              justifyContent: "center",}}>
                              <Text style={{ color: 'black', fontSize: 17, fontFamily: "bold", left: 9, top: 7.5 }} >{item.date}</Text>
                          </View>
                          <View style={{
                              borderColor: "black",
                              borderTopWidth: 0.5,
                              top: 7,
                              paddingTop: 10,

                          }}>
                              <Image style={{
                                  backgroundColor: "black", height: 386,
                                  width: 388, borderRadius: 10,
                                  marginBottom: 15,
                                  right: 3,
                                  justifyContent: "center",
                                  alignContent: "center",

                              }} source={{ uri: global.imageUrl + `${item.PostImg}` }} />
                          </View>

                      </View>)
              }
              }
              //to get the latest post on top
              inverted />
    </View>
  )
}


const styles = StyleSheet.create({
    FlatlistContainer: {
        backgroundColor: 'white',
        margin: 5,
        marginTop: 10,
        position: 'relative',
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

    },
})

export default ShowNotification