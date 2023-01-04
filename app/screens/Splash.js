import React,{useEffect} from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import bgImage from '../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const Splash=({navigation})=> {
useEffect(() => {

    setTimeout(() => {
      getInfo()
     }, 6000);
    }, [])

    const getInfo=async()=> {
        let id = await AsyncStorage.getItem("aridno")
        let type = await AsyncStorage.getItem("isadmin")
        if(id)
         {
          if(type=="yes")
            {
              global.user=address
              global.userphone=id
              navigation.replace('Login')
            }
          else if (type=="no")
            {
              navigation.replace('Login')
            }
          else
            {
              Alert.alert("Authentication","No Account Found. Try Again!!")
            }
         }
          else{
            navigation.replace("Login")
         }
    }
    return (
        <View style={styles.container}>
          <Image source={bgImage} style={styles.image} />
          <Text style={{fontSize:32,color:"black",fontWeight:"bold",fontStyle:"italic"}}>
            BIIT</Text>
            <Text style={{fontSize:30,color:"black",fontWeight:"bold",fontStyle:"italic"}}>
            Alumni
          </Text>
        </View>
      )
    }
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"white",
            alignItems:"center",
            justifyContent:"center",
        },
        image:{
            borderColor:"red",
            marginBottom:30,
            height:270,
            width:267,
            borderRadius:20,
          },
          text:{

          },
    })
    export default Splash;