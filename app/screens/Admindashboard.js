import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {Image} from 'react-native';
import bgImage from '../assets/logo.png';

const Admindashboard = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: '0%',
        alignSelf: 'center',
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'black',
        top: '1%',
        padding: 50,
        paddingVertical: 150,
        paddingBottom: 20,
        elevation: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}>
      <Image
        source={bgImage}
        style={{justifyContent: 'center', marginTop: 0, left: 23}}
      />

      <Button
        style={{marginBottom: '0%', margin: 20}}
        width={232}
        mode="contained"
        onPress={() => {
          navigation.navigate('SessionJob');
        }}>
        Send Message
      </Button>
      <Button
        style={{marginBottom: '0%', margin: 20}}
        width={232}
        mode="contained"
        onPress={() => {
          navigation.navigate('ForApproving');
        }}>
        Survey for approving
      </Button>
      <Button
        style={{marginBottom: '5%', margin: 20}}
        width={232}
        mode="contained"
        onPress={() => {
          navigation.navigate('ProfileScreen');
        }}>
        DashBoard
      </Button>
    </View>
  );
};

export default Admindashboard;
