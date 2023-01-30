import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";
import DatePicker from 'react-native-modern-datepicker';



const CalenderModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
 
    const [selectedDate, setSelectedDate] = useState('');





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
                        <DatePicker
                            onSelectedChange={date => setSelectedDate(date)}
                        />
                       
                       
                    
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
               
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 4,
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
        backgroundColor: "#2196F3",
        borderRadius: 30,
        // height:20,
        width: 100,
        height: 50,
        bottom: 12,


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
        bottom: 6,
    },
    textStyle1: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        top: 11,
    },
    modalText: {

        marginBottom: 15,
        textAlign: "center",
    }
});

export default CalenderModal;
