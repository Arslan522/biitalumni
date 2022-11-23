import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import { Button, } from 'react-native-paper';
import bgImage from '../assets/logo.png'
import React from 'react';
import Login from './Login';
const Signup = ({navigtion}) => {
  return (
    <ScrollView>
      <View style={styles.V1}>
        <Image source={bgImage} style={styles.bg} />
        <Text style={styles.con}>Signup</Text>
        <Text style={styles.simpletext}>
First Name
          </Text>
        <View style={{flexDirection:'row'}}>
          
        <TextInput
          placeholder='First Name'
          style={styles.fname}/>
        <TextInput
          placeholder='Last Name'
          style={styles.lname}/>
          </View>
          <Text style={{right:121}}>
          Arid-No
          </Text>
        <TextInput
          placeholder='2019-Arid-0078'
          style={styles.inputt}
        // left={<Icon name='user'/>}
        //underlineColorAndroid="transparent"
        />
      <Text style={{right:113}}>
        Password
          </Text>
        <TextInput
          placeholder='password'
          secureTextEntry
          style={styles.inputt} />
          <Text style={{right:127}}>
          Email
          </Text>
        <TextInput
          placeholder='arslan.jamal@gmail.com'
          style={styles.inputt} />
          <Text style={{right:90}}>
          Phone Number
          </Text>
        <TextInput
          placeholder='03135248603'
          style={styles.inputt} />

        <Button mode="contained"
          onPress={() =>
            navigation.navigate("Login")
          }
          style={styles.btn}>
          Signup
        </Button>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  simpletext:{
    right:110,
  },
  lname:{
    width: 145,
      height: 40,
      padding: 10,
      marginLeft:10,
      marginTop: 10,
      marginBottom: 10,
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 18,
      backgroundColor: '#F8F0E3',
      color: 'black',
   },
 fname:{
  width: 145,
    height: 40,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
 },
  inputt: {
    width: 300,
    height: 40,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#F8F0E3',
    color: 'black',
  },
  bg: {

    justifyContent: 'center',
  },
  V1: {
    alignItems: 'center',

  },
  con: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 30,
    //color:'green'
    fontStyle: 'italic',
    color: 'black'
  },
  btn: {
    marginTop: 11,
    borderRadius: 20,
  }
})
export default Signup





// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import React,{useState} from 'react';
// import { Button } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';


// //192.168.218.15 my phone ip
// //192.168.0.107 Tenda
// global.apiUrl = 'http://192.168.218.15/EasyKhataFYP/api/'
// export default function SignUp({navigation}) {
//     const[type,setType]=useState("Shopkeeper");
//     const[username,setUsername]=useState();
//     const[pnum,setPnum]=useState();
//     const[pass,setPass]=useState();
//     const[address,setAddress]=useState();

//   async function saveUser(){
    
//     // let arr = []
//     // arr.push(user)
//     let user={
//       user_phoneno:pnum,
//       user_name:username,
//       user_address:address,
//       user_password:pass,
//       user_type:type,
//     };
//     let response = await fetch
//       (global.apiUrl+'Customer/CustomerSignup',
//       {
//         method:'POST',
//         headers:{
//             Accept:'application/json',
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(user)
//     })
//     let json = await response.json()
//     console.log(JSON.stringify(json))
//     if(json=="Customer Registered"){
//       navigation.navigate('Login')
//     }
//     else if (json=="Shop Registered"){
//       navigation.navigate('Login')
//     }
//     else{
//       Alert.alert('Unsuccessfull')
//     }
// }


//   return (
//     <View style={styles.MainView}>
//           <Text   
//               style={{flexDirection:'row',backgroundColor:'#16448F', fontSize:20, 
//                       padding:15,color:'white',bottom:30, width:'110%',right:21}}
//             >Easy Khata Signup</Text>

//       <Text style={styles.text}>Please select User Type</Text>
//       <View style={styles.PickerView}>
//               <Picker style={{color:'white',}} 
//                     selectedValue={type} 
//                     onValueChange={(Itemvalue)=>{ setType(Itemvalue) }}>
//               <Picker.Item label='Shop Keeper' value='Shopkeeper'/>
//               <Picker.Item label='Customer' value='Customer'/>
//           </Picker>
//           </View>      

//       <View>
//       <Text style={styles.text}>UserName</Text>
//       <TextInput 
//         required
//         style={styles.inputfield}
//         onChangeText={n=>setUsername(n)}  />

//       <Text style={styles.text}>Phone no.</Text>
//       <TextInput 
//         keyboardType='phone-pad' 
//         secureTextEntry 
//         required
//         style={styles.inputfield} 
//         onChangeText={n=>setPnum(n)} />

//       <Text style={styles.text}>Address</Text>
//       <TextInput 
//       required style={styles.inputfield} 
//       onChangeText={n=>setAddress(n)} />

//       <Text style={styles.text}>Password</Text>
//       <TextInput 
//       required 
//       minLength='8' 
//       textColor='black' 
//       style={styles.inputfield} 
//       onChangeText={n=>setPass(n)} />

//       <Text style={{marginStart:10,color:'red',fontSize:11}}>*Password must be 8 characters minimum !</Text>
//       </View>

//       <Button  style={styles.btn} textColor='white' onPress={()=>{saveUser()}}>Create Account</Button>

//       <Text style={{left:65,bottom:10,color:'grey',width:'60%'}}>Already have an account ?</Text>
//       <TouchableOpacity
//       onPress={()=>{
//         navigation.navigate('Login')
//       }}>
//         <Text style={{left:140,color:'#16448F',bottom:5}}>Login</Text>
//       </TouchableOpacity>
      
      
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//       MainView:{
//         //flex:1,
//         //justifyContent:'flex-start',
//         //alignItems:'flex-start',
//         marginStart:20,
//         marginTop:30,
//       },

//       PickerView:{
//         backgroundColor:'#16448F',//#16448F
//         width:'90%',
//         marginStart:5,
//         margin:10
//       },

//       text:{
//         fontSize:13,
//         fontWeight:'bold',
//         marginLeft:20,
//         color:'black',
//         //fontFamily:'',
//       },

//       inputfield:{
//         borderWidth:0.4,
//         width:'90%',
//         borderRadius:10,
//         paddingLeft:20,
//         margin:5,
//         color:'black'
//       },

//       btn:{
//         width:'80%',
//         backgroundColor:'#16448F',
//         marginLeft:22,
//         margin:30,
//         borderRadius:20,
//         color:'white',
//       },
// })