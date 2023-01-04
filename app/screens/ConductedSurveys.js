import React, { useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import SearchStudent from "./SearchStudent";
import bgImage from '../assets/logoo.png';
import Result from "./Result";
import ScreenOfSurveys from "./ScreenOfSurvey";
import Icon  from "react-native-vector-icons/MaterialIcons";
import AddQuestion from "./AddQuestion";
import RadioButtonss from "./RadioButtons";
import { ScrollView } from "react-native-gesture-handler";
const DATA = [
  {
    id: "s1",
    title: "React Native",
    detail: "Is React Native worth it in 2022",
  },
  {
    id: "s2",
    title:"Flutter",
    detail: "Does Flutter have a future?",
  },
  {
    id: "s3",
    title: "IOS",
    detail:"is ios developer a good career"
  },
  {
    id: "s4",
    title: "SQL Database ",
    detial:"Is SQL database a good career?"
  },
  {
    id: "s4",
    title: "SQL Database ",
    detial:"Is SQL database a good career?"
  }, 
  {
    id: "s4",
    title: "SQL Database ",
    detial:"Is SQL database a good career?"
  }, 
  {
    id: "s4",
    title: "SQL Database ",
    detial:"Is SQL database a good career?"
  },  
];

const Item = ({ item, onPress, backgroundColor, textColor,navigation}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{ flexDirection: 'row' ,backgroundColor:"lightgrey"}}>
      <Image source={bgImage} />
    <View>
      <Text style={{fontSize:15}}> Title of Survey 
      </Text>
      </View>
      <View >
<Text style={{fontSize: 20,
    top:20,
    right:80
  }}>
      {item.title}
      </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ConductedSurveys = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('AddQuestion')}>
        </Item>
         );
  };

  return (
    <SafeAreaView >
      <View 
      style={{
        borderWidth: 1, 
        backgroundColor:"#2196F3",
        borderRadius:30,
        borderBottomColor:"black",
        // height:20,
         width:120,
         height:60,
         left:240,
         top:10,
        
      }}>
      <Icon  
      name="add-circle-outline" 
      size={30}  
      color="#FFFF90"

      onPress={() =>{
        navigation.navigate('CreateSurvey')}}
        style={{textAlign:"right",right:42}}>
      </Icon>
      <Text 
        style={{textAlign:"right",right:16,color:"white"}}>
      Create Survey</Text>
      </View>
      <ScrollView style={{top:40,borderTopColor:"black",borderTopWidth:2,borderColor:"black"}}>
      <SafeAreaView style={styles.container}>
      <FlatList
      style={{bottom:40}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    
    fontSize: 30,
    top:20,
    flexDirection: "column"
  },
  detail:{
    fontSize:15,
  }
});


export default ConductedSurveys