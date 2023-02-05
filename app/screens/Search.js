import { StyleSheet, Text, View, FlatList, Alert, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import {  ImageBackground } from "react-native";
import { DrawerGestureContext } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Search = ({navigation,props}) => {
    //const [searchQuery, setSearchQuery] = useState('');
    //const onChangeSearch = query => setSearchQuery(query);
    // const [data, setData] = useState([]);
    // const [query, setQuery] = useState('');
    // const [product, setproduct] = useState([]);
    // const { cart, setCart, navigation } = props;
    const [Data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [product, setproduct] = useState([]);
    const [filterProduct, setfilterProduct] = useState([])


    useEffect(() => {
        getalumni();
        // NextScreen();
    }, [])

    async function getalumni() {
        let response = await fetch
            (global.apiurl + 'student/getallumnis')
        let json = await response.json();
        console.log(JSON.stringify(json));
        setData(json);
        setproduct(json.slice())
 }
//  const funt=()=>{
//     <Text style={{backgroundColor:"black"}}></Text>
//  }

    const onChangeSearch = text => {
        setQuery(text);
        
        if (text.length > 0) {
            text = text.toLowerCase();
            const filter = product.filter(ele =>
                ele?.fname?.toLowerCase().includes(text),                
            ); 
            setfilterProduct(filter);
        }
        else {
            setfilterProduct([])
        }
    };

//    const NextScreen = (item)=>{
//         console.log("new data is here.............",item);
//         navigation.navigate('SearchedprofileScreen', { newdataa: item })
//     }


    return (
        <View style={{ flex: 1 }}>
            <Searchbar
                style={styles.Searchbar}
                onChangeText={(e) => onChangeSearch(e)}
                value={query}
                placeholder="Search by name/skills.."
            />

            <FlatList
            style={{padding:10}}
                data={query.length > 0 ? filterProduct :  product}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => {
                    global.aridnumber = item.aridno;
                    console.log(global.aridnumber);
                    return (
                        <View style={styles.flatListcontainer}>
                            {/* {console.log(item)} */}
                            
                            <TouchableOpacity 
                            onPress={()=>{
                                navigation.navigate('SearchedprofileScreen', {
                                  newdataa: item, 
                                });
                            }}
                            style={{flexDirection:"row"}}>
                            <Image style={{ height: 100, width: 100, borderRadius: 60, marginTop:5 ,marginLeft:5 }}
                                 source={{ uri: global.imageUrl + `${item.image}` }} /> 
                            <Text style={styles.flatListtext}>Aridno :  {item.aridno}{'\n'}Name  :  {item.fname} {item.lname}{'\n'}Skill     :  {item.skills}{'\n'}
                            </Text>
                            </TouchableOpacity>
                        </View>

                    )
                }}
            />
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    Searchbar: {
        width: '85%',
        margin: 15,
        borderRadius: 20,
        alignSelf: 'center'
    },

    FlatListButton: {
        width: 150,
        alignSelf: 'center',
        marginBottom: 10
    },
    flatListcontainer: {
        flex: 1,
        flexDirection:"row",
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 20,
        margin: 15,
        backgroundColor: '#F0ECD5',


    },

    flatListtext: {
        paddingLeft: 15, 
        //marginTop:10, 
        fontSize: 14,
        color: 'black',
        //marginLeft:20,
        alignSelf: 'center',


    },
})