
import React, { useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import SearchStudent from "./SearchStudent";
import bgImage from '../assets/logoo.png';
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import Modals from "./Modal";


const  DATA = [
  {
    id: "s3",
    title: "React Native Developer",
    job: "BSCS",
    detail: "working as Software Developer",
    company: "Global",
  },
  {
    id: "s2",
    title: "Flutter FrontEnd",
  },
  {
    id: "s1",
    title: "IOS/Swift ",
  },
  {
    id: "s4",
    title: "Sql DataBase Creater",
  },
  {
    id: "s5",
    title: "Android Developer Needed",
  },
  {
    id: "s6",
    title: "Swift Developer Needed Experience 2 year",
  },
  {
    id: "s8",
    title: "",
  },
  {
    id: "s9",
    title: "Student 8",
  },
  {
    id: "s10",
    title: "Student 9",
  },
  {
    id: "s11",
    title: "Student 10",
  },
  {
    id: "s12",
    title: "Student 11",
  },
  {
    id: "s31",
    title: "Student 12",
    detail: "BCS",
    job: ""

  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{ flexDirection: 'row' }}>
      <Image source={bgImage} />
      <View style={{ flexDirection: "column" }}>
        <Text style={[styles.title, textColor]}>{item.title}
        </Text>
        <Text style={[styles.job, textColor]}>Degree: {item.job}
        </Text>
        <Text style={[styles.detail, textColor]}>Detail: {item.detail}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Job = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "lightgrey";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('Signup')}>
      </Item>


    );
  };

  return (
    <View >
      <View style={{
        flexDirection: "row",
        borderColor: "black",
        top: 10,
        backfaceVisibility: "hidden"
      }}>
        <View
          style={{
            left: 40,
            borderRadius: 70,
          }}>
          <Modals></Modals>
        </View>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#2196F3",
            borderRadius: 30,
            width: 100,
            height: 50,
            left: 165,
            bottom: 1,
          }}>
          <Icon
            name="add-circle-outline"
            size={30}
            color="#FFFF90"
            onPress={() => {
              navigation.navigate('CreateJob')
            }}
            style={{ textAlign: "right", right: 33, top: 2 }}>
          </Icon>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              bottom: 1
            }}>
            Create Job</Text>
        </View>
      </View>
         
       
          <FlatList
            style={{ top: 17, borderTopColor: "black", 
            borderTopWidth: 2, borderColor: "black" }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            />
    
       
            </View>

    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    top: 50,
  },
  item: {
    padding: 16,

    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {

    fontSize: 20,
    flexDirection: "column"
  },
  job: {
    fontSize: 17,
    flexDirection: "row"
  },
  detail: {
    fontSize: 14,
    flexDirection: "column"

  }
});




export default Job