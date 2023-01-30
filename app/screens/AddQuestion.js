import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Task from './Task';
import { Alert } from 'react-native';

export default function AddQuestion() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [description, setdescription] = useState();

     
    async function saveUser() {
        for (var i = 0; i < taskItems.length;i++){
            console.log(taskItems[i]);
        

        // user = {
        //     description: taskItems[i],
        //     aul_id:global.aid,
        //     ans:"not answered",
        //     sur_id:global.sid,
        //     qid:0 
        // }
        let response = await fetch
            (global.apiurl + 'student/insertquestion',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        description: taskItems[i],
                        aul_id: global.aid,
                        ans: "not answered",
                        sur_id: global.sid,
                        // qid: 0 
                    })
                })
        let json = await response.json()
        console.log(JSON.stringify(json))
            console.log(global.sid);

    }
    }




    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask('');
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.container}>
            {/* Added this scroll view to enable scrolling when list gets longer than the page */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >

                {/* Today's Tasks */}
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Questions List</Text>
                    <Text style={styles.sectionTitle1}>Enter at least 5 question</Text>
                    <View style={styles.items}>
                        {/* This is where the tasks will go! */}
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>

            </ScrollView>

            {/* Write a task */}
            {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a question to add in list'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
                        <Button 
                        style={{width:150,left:125,bottom:15}}
                        mode='contained'
                        onPress={()=>
                        // Alert.alert("Forward to admin")
                    saveUser()}
                        >
                            submit
                        </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    sectionTitle1: {
            
        fontSize: 20,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});