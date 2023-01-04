import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { parse } from '@babel/core'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import avatarImage from '../assets/logo.png';
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-simple-toast'
import { Alert } from 'react-native'
//import QRCode from 'react-native-qrcode-generator'

export default function MainScreen() {
    const [postdescription, setPostDescription] = useState();
    const [getProduct, setProduct] = useState()
    const [Postdata, setPostdata] = useState()
    const [imgsrc, setImagesrc] = useState(Image.resolveAssetSource(avatarImage).uri)
    const [image, setImage] = useState({})
    //console.log("get ..............", global.aridno);


    useEffect(() => {
        timelineView()
    }, [])
    //console.log("Products shown here",getProduct)
    //console.log(global.aid);

    const options = {
        title: 'Select Image',
        type: 'library',
        options: {
            maxHeight: 200,
            maxWidth: 200,
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false
        }
    }

    const openGallery = async () => {
        const result = await launchImageLibrary(options)
        setImagesrc(result.assets[0].uri)
        setImage(
            result.assets[0]
        )
        console.log(result)
    }

    //var aid = global.aid;

    async function addpost() {
        // user = {
        //     aid: global.aid,
        //     postdescription: postdescription,
        // }
        //console.log(user);
        const data = new FormData()
        // data.append('name', 'hello')
        data.append('PostPhoto', { uri: image.uri, type: image.type, name: image.fileName })
        //console.log('calling addpost...........', global.apiurl, data)
        //console.log(data);
        let response = await fetch
            (global.apiurl + `student/addPost?aid=${global.aid}&postdiscription=${postdescription}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'multipart/form-data'
                    },
                    body: data
                })
        let json = await response.json()
        console.log(JSON.stringify(json))
        setPostdata(json)
        console.log("Add Post pressed", json);


        if (json == "Post Added") {
            Alert.alert("Post","Added Successfully...")
        }
        else {
            alert('Unsuccessfull')
        }
    }


    async function timelineView() {
        //  let id = await AsyncStorage.getItem("userId")
        let response = await fetch
            (global.apiurl + 'student/TimeLine')
        let json = await response.json();
        console.log(JSON.stringify(json));
        setProduct(json);
        console.log("this...............", json)
    }
    console.log(global.aridno)
    ///global.shopPhone
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={{ borderRadius: 100, paddingLeft: 20, width: "95%", marginLeft: 10 }}
                backgroundColor="lightgrey"
                onChangeText={setPostDescription}
                value={postdescription}
                placeholder="What's on your mind">

            </TextInput>
            <View style={{ flexDirection: "row", height: 100, borderRadius: 30 }}>

                <Image source={{ uri: imgsrc }} style={{
                    width: 75, height: 75,
                    borderRadius: 20, borderColor: "black", left: 20, top: 10, borderColor: "black", borderWidth: 1
                }} /><Button
                    style={{ height: 37.3, left: 155, top: 5 }}
                    mode="contained"
                    color='red'
                    onPress={() => { openGallery() }}>
                    select image
                </Button>
                <Button
                    style={{ height: 37.3, left: 50, top: 45 }}
                    mode="contained"
                    color='red'
                    onPress={() => { addpost() }}>
                    post
                </Button>


            </View>

            <View >

                <FlatList
                    //style={{ flex: 1 }}
                    style={{ backgroundColor: "darkgray" }}
                    data={getProduct}
                    scrollEnabled
                    renderItem={({ item }) => {
                        console.log("Flatlist items.......", item);
                        return (
                            <View style={styles.FlatlistContainer} key={item.key}>
                                <View style={{ flexDirection: "row", left: 5, top: 4 }}>
                                    <Image style={{ backgroundColor: "black", height: 50, width: 50, borderRadius: 50 }} source={{ uri: global.imageUrl + `${item.ProfileImg}` }} />
                                    <Text style={{ color: 'black', fontSize: 18, top: 7, left: 7, fontWeight: "bold" }} >{item.FirstName} {item.LastName}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <Text style={{ color: 'black', fontSize: 17, fontFamily: "bold", left: 9, top: 7.5 }} >{item.PostDis}</Text>
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
                    } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    FlatlistContainer: {
        backgroundColor: 'white',
        //flexDirection: 'row',
        margin: 5,
        marginTop: 10,
        // flex:1,
        // borderRadius: 10,
        // backgroundColor: 'grey',
        // height:90,
        position: 'relative',
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

    // infoContainer: {
    //     // marginLeft: 20,
    //     // bottom:5,
    //     fontFamily:"bold",
    //     left:5,
    //     // alignItems: 'flex-start',
    //     // justifyContent: "space-evenly",
    //     width: 180,
    //     //backgroundColor:'#F0ECD5',

    // },
})



