import React, { useState } from "react";
import { Image, ImageBackground, View } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import SearchStudent from "./SearchStudent";

const DATA = [
    {
      id: "s3",
      title: "React Developer",
      detail: "BSCS",
      job: "Need as Software Developer",
      company: "Global",
    },
    {
      id: "s2",
      title: "Flutter Developer",
    },
    {
      id: "s1",
      title: "React JS",
    },
    {
      id: "s4",
      title: "IOS/Swift",
    },
    {
      id: "s5",
      title: "Andriod Developer",
    },
    {
      id: "s6",
      title: "Laravel Developer Needed",
    },
    {
      id: "s8",
      title: "Sql Database",
    },
    {
      id: "s9",
      title: "React Native Developer",
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
        <Text style={[styles.title, textColor]}>{item.title}
  
        </Text>
      </View>
    </TouchableOpacity>
  );
  
  const ConductSurvey = () => {
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
      fontSize: 24,
      flexDirection: "column"
    },
  });
  
  export default ConductSurvey