import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TextInput } from 'react-native-paper';
import  Icon  from "react-native-vector-icons/MaterialIcons";


const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Company, setCompany] = useState();
  const [Skills, setSkills] = useState();
  const [Minimum, setMinimum] = useState("0");
  const [Maximum, setMaximum] = useState("100,000");




  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
            <Text 
            style={{
              height: 40,width:350, top:0,fontSize:20,
            }}>
              Company
            </Text>
            <Picker style={{
                backgroundColor: 'lightgrey',
                height: 40,width:250,left:60,top:-50
              }}
                selectedValue={Company}
                onValueChange={(Itemvalue) => { setCompany(Itemvalue) }}>
                <Picker.Item label='MTBC' value='MTBC' />
                <Picker.Item label='Global' value='Global' />
                <Picker.Item label='HighTech' value='HighTech' />
                <Picker.Item label='ProSoftware' value='ProSoftware' />
            </Picker>
          <Text style={{
              height: 23,width:350, top:-15,fontSize:20
            }}
              >
            Skills
          </Text>
          <Picker style={{
                backgroundColor: 'lightgrey',
                height: 40,width:250,left:60,top:-50
              }}
                selectedValue={Skills}
                onValueChange={(Itemvalue) => { setSkills(Itemvalue) }}>
                <Picker.Item label='Flutter' value='Flutter' />
                <Picker.Item label='React Native' value='React Native' />
                <Picker.Item label='IOS' value='IOS' />
                <Picker.Item label='Android' value='Android' />
            </Picker>
            <Text style={{
              height: 26,width:350, top:-20,fontSize:20
            }}
              >
            Salary
          </Text>
          <TextInput 
          keyboardType = 'numeric'
          onChangeText={n => setMinimum(n)}
          placeholder="Minimum"
          style={{
              height: 26,width:100, top:-45
            }}>
           
          </TextInput>
          <TextInput 
           onChangeText={p => setMaximum(p)}
          keyboardType = 'numeric'
          placeholder="Maximum"
          style={{
              height: 26,width:100, top:-71,left:120,color:"lightgrey"
            }}>
          </TextInput>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle1}>Apply Changes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Icon
    name="filter-alt" 
    size={30}  
    color="#FFFF90"

      style={{textAlign:"center",}}>
    </Icon>
        <Text style={styles.textStyle}>Filter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex:4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderWidth: 1, 
    backgroundColor:"#2196F3",
    borderRadius:30,
    // height:20,
     width:100,
     height:50,
     bottom:12,
     
    
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    bottom:6,
  },
  textStyle1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    top:11,
},
  modalText: {
    
    marginBottom: 15,
    textAlign: "center",
  }
});

export default Modals;
