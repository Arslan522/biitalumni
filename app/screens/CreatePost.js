import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Card, TextInput, Avatar} from 'react-native-paper';
import {Image} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import avatarImage from '../assets/logo.png';
import { Alert } from 'react-native';



const CreatePost = ({navigation}) => {
  const [postdescription, setPostDescription] = useState();
  const [getProduct, setProduct] = useState();
  const [Postdata, setPostdata] = useState();
  const [imgsrc, setImagesrc] = useState(
  );
  const [image, setImage] = useState({});
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setImagesrc(result.assets[0].uri);
    setImage(result.assets[0]);
    console.log(result);
  };

  //var aid = global.aid;

  async function addpost() {
    const data = new FormData();
    data.append('PostPhoto', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });
    let response = await fetch(
      global.apiurl +
        `student/addPosst?aid=${global.aid}&postdiscription=${postdescription}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'multipart/form-data',
        },
        body: data,
      },
    );
    let json = await response.json();
    console.log(JSON.stringify(json));
    setPostdata(json);
    console.log('Add Post pressed', json);

    if (json == 'Post Added') {
      Alert.alert('Post', 'Added Successfully...');
      navigation.navigate('MainScreen')
    } else {
      alert('Unsuccessfull');
    }
  }
  return (
    <View>
      <Card>
        <Card.Content>
          <TextInput
            backgroundColor="lightgrey"
            onChangeText={setPostDescription}
            value={postdescription}
            placeholder="What's on your mind"
          />
          <TouchableOpacity
            onPress={() => {
              openGallery();
            }}>
            <View
              style={{
                marginTop: 10,
                borderRadius: 10,
                height: 250,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey',
              }}>
              <Icon name="image" size={30} style={{top:120,right:5}}></Icon>
              <Image
                source={{uri: imgsrc}}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                  marginBottom:30,
                }}
              />
            </View>
          </TouchableOpacity>
        </Card.Content>
        <Card.Actions>
          <Button onPress={()=>navigation.navigate("MainScreen")}>Cancel</Button>
          <Button
            mode="contained"
            onPress={() => {
              addpost();
            }}>
            Post
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CreatePost;
