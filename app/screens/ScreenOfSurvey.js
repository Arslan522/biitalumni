import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {  Text, StyleSheet, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
const ScreenOfSurveys = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    return (
    <SafeAreaView>
    <View>
        <Text>
        Question # 1
        Is Flutter Paid?
        </Text> 
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "true" : "false"}</Text>
    </View>
    <View>
        <Text>
        Question # 1
        Is Flutter Paid?
        </Text> 
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "true" : "false"}</Text>
    </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 30,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 10,
    },
  });

export default ScreenOfSurveys