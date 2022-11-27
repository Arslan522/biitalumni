import React, { useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import SearchStudent from "./SearchStudent";
import bgImage from '../assets/logoo.png';

const DATA = [
  {
    id: "s1",
    title: "ReactNative",
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
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{ flexDirection: 'row' }}>
      <Image source={bgImage} />
      <View style={{ flexDirection:"column" }}>
      <Text style={[styles.title, textColor]}>Title: {item.title}
      </Text>
      <Text style={[styles.detail, textColor]}> Detail: {item.detail}
      </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ConductedSurveys = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
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
  detail:{
    fontSize:15,
  }
});


export default ConductedSurveys