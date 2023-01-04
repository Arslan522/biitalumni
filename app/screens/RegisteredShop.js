import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Button, TextInput, Searchbar} from 'react-native-paper';
import { FAB, Provider as PaperProvider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';



export default function RegisteredShops({navigation,route}) {
  //const user=route.params.item.user_name+item.user_phoneno;
  // const [shop, setShop] = useState([]);
  // const [user, setUser] = useState([]);
  const [RegShops, setRegShops] = useState([]);


    useEffect(()=>{
    getRegShops()
  },[])

  //global.userphone
  async function getRegShops() {

    let response = await fetch
    (global.apiurl +'shop/registerShopList?custnumber='+global.userphone);
    let json = await response.json();
    //alert(JSON.stringify(json));
    setRegShops(json);
    //console.log(json);

  }



  // async function getSearchedShop() {
   

  //   let response = await fetch
  //   (global.apiUrl +'shop/ShopSearchByCity?name='+user +'&city=' +global.user,
  //   {
  //     method:'GET',
  //   })
  //   let json = await response.json()
  //   console.log(JSON.stringify(json))
  //   setShop(json);
  //   //let shop1=json.user_phoneno;
  //   console.log(json)
  //     if (json == null) {
  //       Alert.alert('Shop Verification..', 'Shop Not Found In This Area');
  //     }
  //   }

  // const getCurrentDate=()=>{
 
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   var yyyy = today.getFullYear();

  //   today = mm + '/' + dd + '/' + yyyy;
  //       return today ;//format: d-m-y;+ '-' + month + '-' + year
  // }

  // async function SendRequest( from,to ){
  //   //console.log(global.apiUrl+'RequestHandler/sendRequest?from= '+from+' &to= '+to+' &date= '+getCurrentDate())
  //   let response = await fetch(global.apiUrl+'RequestHandler/sendRequest?from='+from+'&to='+to+'&date='+getCurrentDate(),{
  //       method:'POST',
  //       headers:{
  //           Accept:'application/json',
  //           'Content-Type':'application/json'
  //       },
  //       body:JSON.stringify(user)
  //   })
  //   let json = await response.json()
  //   //console.log(JSON.stringify(json))
  // //setShop(json);
  // //console.log(shop);

  //   if(json=="Request Send"){
  //     alert("Request Sent Successfully...")
  //   }
  //   else if (json=="Already Send"){
  //     alert("Already Send....")
  //   }
  // }


  return (
    <PaperProvider>
    <View style={{flex:1}}>
      <View style={{backgroundColor: '#16448F',height:60}}>
      <Text
        style={{
          //flexDirection: 'row',
          fontSize: 20,
          padding: 15,
          color: 'white',
          //bottom: 0,
          width: '100%',
          right: 0,
        }}> 
        Registered Shops
      </Text>
        </View>

        <Icon name="md-log-out-outline" size={35} color="grey" style={{position:'absolute',left:'89%',top:'2%'}}
      onPress={()=>{
        navigation.navigate('Log Out')}}/>

      {/* //////////////////////// Reg shops list ////////////////////// */}

      <Text style={{color:'#4169e1',left:'35%'}}>Registered in Shop</Text>
        <FlatList  
            style={{flex:1}}
              data={RegShops}  
              renderItem={({item}) =>  
              <View style={styles.FlatlistContainer} key={item.key}>
                <TouchableOpacity 
                onPress={()=>{
                  navigation.navigate('GroceryHome',{Shoppno:item.user_phoneno})}}>
                <Text style={styles.Text}>{item.user_name}{"\n"}{item.user_phoneno}</Text>
                </TouchableOpacity>
                
              </View>
              }
          />  
 
      <View style={styles.MainContainer}>
        <FAB
          style={styles.fabStyle}
          animated={true}
          color='white'
          disabled={false}
          visible={true}
          loading={false}
          onPress={()=>{navigation.navigate('Shop Search')}}
          small
          icon="search-web"
          //label='EXTENDED FAB'
          />    
      </View>
    


    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  FlatlistContainer: {
    //flex:2,
    backgroundColor: '#fff5ee',
    //flexDirection: 'row',
    justifyContent: 'space-between',
    //height:80,
    flexGrow:0,
  },
  Text: {
    fontSize: 18,
    margin:15,
    //backgroundColor:'white',
    color: 'grey',
  },
  Button: {
    backgroundColor: '#16448F',
     width: 140,
     top: 6,
     marginEnd: 15,
     height:40,
  },
  MainContainer: {
    //flex: 1,
    //margin:20,
    //height:130,
    //width:20,
    //justifyContent: 'center',
    // alignItems: 'center',
  },
  fabStyle: {
    //flex:1,
    margin: 35,
    left: 145,
    backgroundColor:'#16448F', //'#ff4081'
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
