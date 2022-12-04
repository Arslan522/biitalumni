
import React, { useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import SearchStudent from "./SearchStudent";
import bgImage from '../assets/logoo.png';


const DATA = [
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
      <View style={{ flexDirection:"column" }}>
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

const Job = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "lightgrey";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={(navigation) => navigation.navigate('SearchStudentProfile')}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
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
    fontSize: 20,
    flexDirection: "column"
  },
  job:{
    fontSize:17,
    flexDirection:"row"
  },
  detail:{
    fontSize:14,
    flexDirection:"column"
    
  }
});


  

export default Job