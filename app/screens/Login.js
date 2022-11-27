import { View, Text, StyleSheet, TextInput, ImageBackground, Image, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import bgImage from '../assets/logo.png';
import MainScreen from './MainScreen';
import Drawer from './Drawers';
import { Picker } from '@react-native-picker/picker';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
export default function Login({navigation,props}) {

    const[type,setType]=useState();
    const[pnum,setPnum]=useState();
    const[pass,setPass]=useState();
    const[users,setUsers]=useState();

  return (
    <ScrollView>
      <View style={styles.V1}>
        <Image source={bgImage} style={styles.bg} />
        <Text style={styles.login}>BIIT Alumni</Text>
        <View style={styles.PickerView}>
          <Picker
          selectedValue={type}
          onValueChange={(Itemvalue)=>{setType(Itemvalue)}}>
            <Picker.Item label='Admin' value='Shopkeeper'/>
            <Picker.Item label='Alumni' value='Customer'/>
          </Picker>
        </View>
        <Text style={styles.signintxt}>
          Sign In
        </Text>
        <Text style={{marginRight:95}}>
          Hi there! Nice to see you again
        </Text>
        <Text style={styles.regtxt}>
          Reg-No
        </Text>
        <TextInput  
          autoCorrect={false}      
          require={true}
          placeholderTextColor={'grey'}
          placeholder='Reg-No'
          style={styles.input} 
          onChangeText={setPnum}
        />
        <View style={{ 
         flexDirection: 'row', 
         alignItems: 'center', 
        width: '70%', 
        marginTop: -10, 
        marginBottom: 5 
                    }}
        >
        <View style={{ 
          flex: 1, 
          height: 1.5,}} 
        />
        </View>
        <Text style={styles.passtxt}>
          Password
        </Text>
        <TextInput
          require={true}
          placeholderTextColor={'grey'}
          placeholder='Enter Your Password..'
          secureTextEntry
          style={styles.input2} 
          onChangeText={setPass}/>
        <View style={{ flexDirection:'row', 
        alignItems: 'center', 
        width: '70%', 
        marginTop:-10, 
        marginBottom: 5 
                    }}
        >
        <View style={{ 
          flex: 1, 
          height: 1.5, 
          backgroundColor:'darkgrey' 
                    }} 
        />
        </View>
        <Button 
          mode="contained"
          style={styles.btn}
          onPress={() =>
          navigation.replace('Drawer')}>
          Login
        </Button>
        <Text style={styles.ftr}>
          Don't have an account?
        </Text>
        <Button
          style={styles.sginupbtn}
          onPress={() =>
          navigation.navigate('Signup')}> Signup </Button>
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  regtxt: {
    right: 120,
    color: 'red',
    marginTop:3,
  },
  passtxt: {
    right: 110,
    color: 'red',
  },
  signintxt: {
    color: '#36454F',
    right: 106,
    fontSize: 25,
    paddingBottom: 5,
  },
   PickerView:{
        backgroundColor:'lightgrey',
        width:'50%',
        // marginStart:40,
        marginTop:'5%',
        marginBottom:'3%'
      },
  login:
  {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    // marginTop:5,
  },
  usr: {
    fontSize: 90,
    color: 'black'
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginLeft: 10,
    color: 'black',
  },
  input2: {
    width: 300,
    height: 50,
    padding: 10,
    marginLeft: 24,
    color: 'black',
    left: -7.5,
  },
  bg: {

    justifyContent: 'center',marginTop:30,
  },
  V1: {
    height: '100%',
    alignItems: 'center',
    justifyContent:"center"
  },
  btn: {
    width: 100,
    borderRadius: 15,
    marginTop:20,
  },
  sginupbtn: {
    marginLeft: 165,
    marginTop: -29.4,
  },
  ftr: {
    fontSize: 16,
    marginTop: 35,
    color: '#36454F',
    fontWeight: 'bold',
    marginLeft: -60,

  },

});








// import { StyleSheet, Text, View, Image, TouchableOpacity,Alert} from 'react-native'
// import React, {useState} from 'react'
// import { Button, TextInput } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';
// import Icon from 'react-native-vector-icons/FontAwesome5';



// //192.168.43.61 my phone ip
// //192.168.0.107 Tenda


// export default function Login({navigation,props}) {
//     const[type,setType]=useState("Shopkeeper");
//     const[pnum,setPnum]=useState();
//     const[pass,setPass]=useState();
//     const[users,setUsers]=useState([]);
//     // const [secure, setSecure] = useState(props.secure);
//     // const [focus, setFocus] = useState(props.focus);
    



//     async function loginUser(){
//         let response = await fetch
//         (global.apiUrl+'login/checklogin?phone='+pnum+'&password='+pass+"&user_type="+type)
//         let json = await response.json();
//         console.log(JSON.stringify(json))
//         setUsers(json)
//         if(json.user_type=="Customer"){
//           //Alert.alert("uthentication","User Verified")
//           //i will save pnum in shared preferences
//           global.user=json.user_address
//           navigation.navigate('ShopSearch')
         
//         }
//         else if(json=="Shop Verified"){
//           //i will save pnum in shared preferences
//           global.user=pnum
   
//           navigation.navigate('ShopKeeper Home')
//         }
//         else{
//           Alert.alert("Authentication","No Account Found. Try Again!!")
//         }
//       }

//   return (
//     <View style={styles.Main}>
//           <View style={styles.ImageView}>
//             <Image 
//                 style={styles.Image} 
//                 source={require('../assets/logonew.jpg')} />
//             <Text 
//                 style={styles.txt1}
//             >Login as </Text> 
//           </View>
        

//           <View style={styles.PickerView}>
//               <Picker style={{color:'white',}} 
//                     selectedValue={type} 
//                     onValueChange={(Itemvalue)=>{ setType(Itemvalue) }}>
//               <Picker.Item label='Shop Keeper' value='Shopkeeper'/>
//               <Picker.Item label='Customer' value='Customer'/>
//           </Picker>
//           </View>                                                        
//           <View 
//               style={{alignItems:'center',justifyContent:'center'}}>
               
//               <TextInput  
//                   autoCorrect={false}      
//                   require={true}
//                   placeholderTextColor={'grey'}
//                   placeholder='Enter Your Phone No..'
//                   keyboardType='phone-pad'
//                   style={styles.input} 
//                   onChangeText={setPnum}
//               />
//               <TextInput
//                   require={true}
//                   placeholderTextColor={'grey'}
//                   placeholder='Enter Your Password..'
//                   secureTextEntry
//                   style={styles.input} 
//                   onChangeText={setPass}
//                   // setFocus={focus}
//                   //   onChangeText={setPass => props.onChangeText(setPass)}
//                   //   onFocus={() => setFocus(true)}
//                   //   onBlur={() => setFocus(false)}
//                   //   secureTextEntry={secure}
//                 />
//                 {/* <Icon style={{ paddingRight: 15, }}
//                       name={secure ? "eye" : 'eye-slash'}
//                       size={20} color='gray' 
//                       onPress={() => setSecure(!secure)} /> */}
//                 {/* <Icon 
//                   style={styles.searchIcon} 
//                   name="search" size={20} 
//                   color="#000"/> */}
                  
      
          
//               </View>
      
//       <Button  
//           style={styles.loginbtn} 
//           textColor='white' 
//           onPress={loginUser}
//           >Sign In</Button>
//       <Text 
//       style={{color:'grey',marginStart:'30%',marginTop:'10%'}}
//       >Don't Have An Account?</Text>
//       <TouchableOpacity
//         onPress={()=>{
//         navigation.navigate('SignUp')}}>
//         <Text style={styles.AccountSignup}
//         >SignUp</Text>
//       </TouchableOpacity>

      

//       {/* <TouchableOpacity>
//         <Text style={styles.forgetpass}>Forget Password</Text>
//       </TouchableOpacity> */}

//       {/* <Button style={styles.loginbtn} textColor='white' onPress={()=>{
//         console.log(pass)
//         console.log(pnum)
//         console.log(type)
//       }}> Check</Button> */}
      

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//       Main:{
//         header: { visible: false }
//         //flex:1,
//         //backgroundColor:'white',
//         //height:'90%',
//         //justifyContent:'center',
//         //alignItems:'center',    
//       },

//       ImageView:{
//         //flex:1,
//         //position:'relative',
//         //backgroundColor:'red',
//         //height:'40%',
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop:30    
//       },

//       PickerView:{
//         backgroundColor:'#16448F',//#16448F
//         width:'80%',
//         marginStart:40,
//         marginTop:'5%',
//         marginBottom:'3%'
//       },

//       AccountSignup:{
//         margin:5,
//         color:'#16448F',
//         marginLeft:'44%',

//       },

//       // forgetpass:{
//       //   left:90,
//       //   bottom:60,
//       //   color:'#16448F',
//       //   backgroundColor:'white',
//       // },

//      Image:{
//         borderRadius:10,
//         alignItems:'center',
//         justifyContent:'center',
//         height:270,
//         width:267,
//         borderRadius:20,
//       },

//       txt1:{
//         color:'grey',
//         fontWeight:'bold',
//         fontSize:17,
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop:'5%',

//       },

//       input:{
//         //color:'black',
//         //padding:8,
//         //borderColor:'grey',
//         // borderWidth:0.7,
//         borderRadius:20,
//         width:'80%',
//         marginTop:5,
//         //paddingStart:0,
//         margin:5,
        
//       },

//       loginbtn:{
//         marginStart:'25%',
//         width:'50%',
//         borderRadius:20, 
//         bottom:-15,
//         backgroundColor:'#16448F'
//       },
    
// })