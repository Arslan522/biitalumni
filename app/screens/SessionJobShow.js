import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import {Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import SessionJob from './SessionJob';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';


import { SafeAreaView } from 'react-native-safe-area-context';

const SessionJobShow = ({navigation}) => {
  const [postdescription, setPostDescription] = useState();
  const [getProduct, setProduct] = useState();
  const [Postdata, setPostdata] = useState();
  const [imgsrc, setImagesrc] = useState();
  const [image, setImage] = useState({});

  useEffect(() => {
    timelineView();
  }, []);
  async function timelineView(item) {
    let response = await fetch(
      global.apiurl + `student/getmessage?session=${global.session}`,
    );
    let json = await response.json();
    if (status === 'withjob' ) {
      console.log('status..hgfchgfhgchgfc..........', global.status);
    
    } else {
      console.log('else status.................');
      setProduct(json);
    }

    
  }
  return (
    <SafeAreaView
      style={{
        padding: 5,
      }}>
       
      <TouchableOpacity onPress={() => navigation.navigate('SessionJob')}>
        <View
          style={{
            backgroundColor: 'lightblue',
            borderRadius: 10,
            width: 60,
            left: 300,
            padding: 2,
          }}>
          <Icon name="add" size={30} color="black" style={{left: 12}} />
          <Text style={{bottom: 8, color: 'black'}}>New Job</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        style={{backgroundColor: 'darkgray'}}
        data={getProduct}
        scrollEnabled
        renderItem={({item}) => {
          console.log('Flatlist items.......', item);
          return (
            <View
              style={{
                backgroundColor: '#fff',
                borderColor: 'black',
                paddingVertical: 10,
                paddingHorizontal: 10,
                elevation: 10,
                marginTop: 5,
                marginBottom: 5,
                marginHorizontal: 10,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
              key={item.key}>
              <View style={{left: 5}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    // top: 7,
                    left: 7,
                    fontWeight: 'bold',
                  }}>
                  {item.title}{' '}
                </Text>
              </View>
            </View>
          );
        }}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  FlatlistContainer: {
    backgroundColor: 'white',
    margin: 5,
    marginTop: 10,
    position: 'relative',
  },

  Text: {
    fontSize: 15,
    color: 'grey',
  },

  QRCode: {
    marginLeft: 20,
  },

  imageContainer: {
    height: 70,
    width: 77,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SessionJobShow;
