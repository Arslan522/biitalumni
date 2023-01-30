import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Card, TextInput, Avatar} from 'react-native-paper';
import {Image} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {launchImageLibrary} from 'react-native-image-picker';
import {Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {Modal} from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import {Pressable} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';

const Dinner = ({navigation}) => {
  const [postdescription, setPostDescription] = useState();
  const [getProduct, setProduct] = useState();
  const [Postdata, setPostdata] = useState();
  const [imgsrc, setImagesrc] = useState();
  const [image, setImage] = useState({});
  const [startdate, setstartdate] = useState();
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  const calenderchang = () => {
    console.log('onchange'),
      (<DatePicker onSelectedChange={date => setSelectedDate(date)} />);
  };
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
    // user = {
    //     aid: global.aid,
    //     postdescription: postdescription,
    // }
    //console.log(user);
    const data = new FormData();
    // data.append('name', 'hello')
    data.append('PostPhoto', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });
    //console.log('calling addpost...........', global.apiurl, data)
    //console.log(data);
    let response = await fetch(
      global.apiurl +
        `student/adminaddPosst?aid=${global.aid}&postdiscription=${postdescription}`,
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
      navigation.navigate('Dinner');
    } else {
      alert('Unsuccessfull');
    }
  }
  return (
    <View>
      <View style />
      <Text style={{color: 'black', fontSize: 18, left: 15, marginTop: 10}}>
        Title for the survey
      </Text>
      <TextInput
        style={{
          height: 40,
          width: 350,
          left: 20,
          paddingLeft: 10,
          backgroundColor: 'lightgrey',
        }}
        placeholderTextColor={'grey'}
        placeholder="Title.."
        onChangeText={n => settitle(n)}></TextInput>
      <Text style={{color: 'black', fontSize: 18, left: 15}}>Start Date</Text>
      <View style={{flexDirection: 'row', width: 330}}>
        <TextInput
          style={{
            height: 40,
            width: 320,
            left: 20,
            paddingLeft: 10,
            backgroundColor: 'lightgrey',
          }}
          placeholderTextColor={'grey'}
          placeholder="Enter Date"
          keyboardType="numeric"
          value={startdate}
          onChangeText={n => setstartdate(n)}
          disabled={true}
          onPress={() => setModalVisible1(true)}
        />
        <Icon
          name="calendar-today"
          style={{left: 20, top: 0}}
          size={35}
          onPress={() => setModalVisible1(true)}></Icon>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert('Date not picked');
            setModalVisible1(!modalVisible1);
          }}>
          <View style={styles.centeredView}>
            <DatePicker onSelectedChange={date => setstartdate(date)} />
          </View>
          <Pressable onPress={() => setModalVisible1(!modalVisible1)}>
            <Button color="red" mode="outlined" style={{}}>
              Confirm Date
            </Button>
          </Pressable>
        </Modal>
      </View>
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
              <Icon name="image" size={30} style={{top: 120, right: 5}}></Icon>
              <Image
                source={{uri: imgsrc}}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                  marginBottom: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        </Card.Content>

        <Card.Actions style={{justifyContent: 'flex-end', right: 10}}>
          <Button onPress={() => navigation.navigate('MainScreen')}>
            Cancel
          </Button>
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
const styles = StyleSheet.create({
  question: {
    height: 40,
    width: 350,
    left: 20,
    paddingLeft: 10,
    marginBottom: 6,
    backgroundColor: 'lightgrey',
  },
  PickerView: {
    backgroundColor: 'lightgrey',
    margintop: 10,
    // marginStart:40,
    height: 40,
    width: 350,
    left: 20,
    paddingLeft: 10,
  },
  bg: {
    justifyContent: 'center',
    marginTop: 10,
    width: 100,
    marginBottom: 40,
    height: 100,
    left: 140,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
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
    alignItems: 'center',
  },
  input: {
    // paddingVertical: 15,
    // paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderTopEndRadius: 60,
    borderTopStartRadius: 60,
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
export default Dinner;
