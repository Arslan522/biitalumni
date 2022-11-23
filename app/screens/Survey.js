import React from 'react'
import { Alert } from 'react-native';
import { AlertButton } from 'react-native';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper'

const Survey = () => {
    return (
        <View style={{ top: 20 }}>
            <TextInput placeholder='Survey Title' style={{
                backgroundColor: "lightgrey", fontSize: 30, borderRadius: 30,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
            }} />
            <TextInput placeholder='Type your question' style={{
                backgroundColor: "lightgrey", fontSize: 16, borderRadius: 30,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
            }} />
            <Text style={styles.option}> Option 1</Text>
            <TextInput placeholder='Type here' style={styles.question} />
            <Text style={styles.option}> Option 2</Text>
            <TextInput placeholder='Type here' style={styles.question} />
            <Text style={styles.option}> Option 3</Text>
            <TextInput placeholder='Type here' style={styles.question} />
            <Text style={styles.option}> Option 4</Text>
            <TextInput placeholder='Type here' style={styles.question} />
            <Button mode='contained' style={{ marginTop: 10, }}>
                Add Next Question
            </Button>
            <AlertButton onPress={  ("Survey","has been pending. Wait for Admin to approve!!")}>
                Submit
            </AlertButton>
        </View>
    )
}
const styles = StyleSheet.create({
    question: {
        marginTop: 10,
        borderRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "lightgrey"
    },
    option: {
        left: 10,
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Survey