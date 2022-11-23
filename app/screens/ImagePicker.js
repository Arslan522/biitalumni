import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import CheckBox from '@react-native-community/checkbox';
import {RadioButton} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Login from './Login';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
global.apiUrl = 'http://192.168.43.150/FYPPROJECT/API/';
export default function AddToys(props) {
  let [image, setImage] = useState('');
  const [option, setOption] = useState('Exchange');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [adress, setAdress] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [modalState, setModalState] = useState(false);
  const [imagelink, setimagepath] = useState({});
  console.log(global.userid);
  console.log(option);
  async function onCameraButtonClick() {
    let options = {
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    };
    const result = await launchCamera(options);
    imageupload(result.assets[0]);
    console.log(result);
    setimagepath(result.assets[0]);
    // let src = result.assets[0].base64;
    // setImage(src);
  }
  const imageupload = imagepath => {
    alert(JSON.stringify(imagepath));
  };
  // async function saveToys() {
  //   let user = {
  //     images: `data:image/png;base64,${image}`,
  //     Title: title,
  //     Price: price,
  //     Adress: adress,
  //     category: category,
  //     descriptions: description,
  //     Options: option,
  //     userid: global.userid,
  //   };
  //   let response = await fetch(global.apiUrl + 'UploadToy/Upload', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data ',
  //     },
  //     body: JSON.stringify(user),
  //   });
  //   let json = await response.json();
  //   let jsonresponse = JSON.stringify(json);
  //   console.log(jsonresponse);
  //   alert(JSON.stringify(json));
  // }
  async function saveToys() {
    const data = new FormData();
    data.append('images', {
      uri: imagelink.uri,
      type: imagelink.type,
      name: imagelink.fileName,
    });
    data.append('Title', title);
    data.append('Price', price);
    data.append('Adress', adress);
    data.append('category', category);
    data.append('descriptions', description);
    data.append('Options', option);
    data.append('userid', global.userid);

    fetch(global.apiUrl + 'UploadToy/Upload', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data ',
      },
    })
      .then(response => response.json())
      .then(resp => {
        alert('successfully upload' + resp);
      })
      .catch(err => {
        alert(err);
      });
  }
  async function onLibraryButtonClick() {
    let options = {
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
    const result = await launchImageLibrary(options);
    imageupload(result.assets[0]);
    console.log(result);
    setimagepath(result.assets[0]);

    // let src = result.assets[0];
    // setImage(src);
  }

  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon2
            name="arrow-left"
            size={40}
            color={'#ffffff'}
            style={{marginTop: 10}}
          />
        </TouchableOpacity>
        <Text style={styles.headertext}>ADD TOYS</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              setModalState(true);
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 60,
              position: 'absolute',
              backgroundColor: '#0080ff',
              marginTop: 50,
              elevation: 10,
              right: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="photo-camera" size={40} color={'#ffffff'} />
          </TouchableOpacity>
          <View
            style={{
              width: 200,
              height: 200,
              borderColor: 'black',
              borderWidth: 1.4,
              position: 'relative',
              marginLeft: 90,
              borderRadius: 200,
            }}>
            <Image
              source={{uri: imagelink.uri}}
              style={{width: 200, height: 200, borderRadius: 200}}
            />
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                elevation: 4,
              }}>
              Title:
            </Text>
            <TextInput
              onChangeText={n => setTitle(n)}
              style={styles.inputtitle}></TextInput>
          </View> */}
          <View style={styles.Inputboxcontainer}>
            <Icon1 name="format-title" size={30} color={'#0080FF'}></Icon1>
            <TextInput
              onChangeText={n => setTitle(n)}
              placeholder="Title"
              style={{fontSize: 15, marginHorizontal: 10}}
            />
          </View>
          <View style={styles.Inputboxcontainer}>
            <Icon1 name="currency-rupee" size={30} color={'#0080FF'}></Icon1>
            <TextInput
              onChangeText={n => setPrice(n)}
              placeholder="Price"
              style={{fontSize: 15, marginHorizontal: 10}}
            />
          </View>
          <View style={styles.Inputboxcontainer}>
            <Icon name="category" size={30} color={'#0080FF'}></Icon>
            <TextInput
              onChangeText={n => setCategory(n)}
              placeholder="Category"
              style={{fontSize: 15, marginHorizontal: 10}}
            />
          </View>
          <View style={styles.Inputboxcontainer}>
            <Icon1 name="home-analytics" size={30} color={'#0080FF'}></Icon1>
            <TextInput
              onChangeText={n => setAdress(n)}
              placeholder="Address"
              style={{fontSize: 15, marginHorizontal: 10}}
            />
          </View>

          <View style={styles.Inputboxcontainerlast}>
            <Icon name="description" size={30} color={'#0080FF'}></Icon>
            <TextInput
              onChangeText={n => setDescription(n)}
              placeholder="description"
              style={{fontSize: 15, marginHorizontal: 10}}
            />
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                elevation: 4,
              }}>
              Price:
            </Text>
            <TextInput
              onChangeText={n => setPrice(n)}
              style={styles.inputtitle}></TextInput>
          </View> */}
          {/* <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <TextInput
              onChangeText={n => setAdress(n)}
              style={styles.inputdes}
              placeholder="Address"
              multiline></TextInput>
          </View> */}
          {/* <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <TextInput
              onChangeText={n => setCategory(n)}
              style={styles.inputdes}
              placeholder="Category"
              multiline></TextInput>
          </View> */}
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              onChangeText={n => setDescription(n)}
              style={styles.inputdes}
              placeholder="Description"
              multiline></TextInput>
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <RadioButton
                value="Exchange"
                status={option === 'Exchange' ? 'checked' : 'unchecked'}
                onPress={() => setOption('Exchange')}
              />
              <Text
                style={{fontSize: 18, fontFamily: 'Arial', color: '#000000'}}>
                EXCHANGE
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: -5,
              }}>
              <RadioButton
                value="Donate"
                status={option === 'Donate' ? 'checked' : 'unchecked'}
                onPress={() => setOption('Donate')}
              />
              <Text
                style={{fontSize: 18, fontFamily: 'Arial', color: '#000000'}}>
                DONATE
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <RadioButton
                value="Exchange  Donate"
                status={option === 'Exchange  Donate' ? 'checked' : 'unchecked'}
                onPress={() => setOption('Exchange  Donate')}
              />
              <Text
                style={{fontSize: 18, fontFamily: 'Arial', color: '#000000'}}>
                Both
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            saveToys();
          }}
          style={styles.save}>
          <Text style={styles.txtsave}>SAVE</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalState}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              backgroundColor: 'white',
              padding: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                onCameraButtonClick();
                setModalState(false);
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  justifyContent: 'center',
                  margin: 10,
                }}>
                On Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onLibraryButtonClick();
                setModalState(false);
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  justifyContent: 'center',
                  margin: 10,
                }}>
                Select From Library
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#FFFFF0',
    elevation: 3,
  },
  Inputboxcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    margin: 10,
    borderRadius: 13,
    borderColor: '#0080FF',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#0080ff',
    height: 60,

    flexDirection: 'row',
    borderColor: 'green',
    borderWidth: 1,
  },
  headertext: {
    fontSize: 30,
    marginLeft: 80,
    color: 'white',
    width: '80%',
    marginTop: 4,
  },
  circlebtn: {
    width: 60,
    height: 60,
    borderRadius: 60,
    position: 'absolute',
    backgroundColor: '#0080ff',
    bottom: 30,
    elevation: 10,
    right: 30,
  },
  body: {
    padding: 10,
    justifyContent: 'space-evenly',
  },
  inputtitle: {
    flex: 4,
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#0080ff',
    backgroundColor: '#ffffff',
    textAlign: 'left',
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 12,
    elevation: 3,
    marginTop: 10,
  },
  inputdes: {
    flex: 3,
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#0080ff',
    backgroundColor: '#ffffff',
    textAlign: 'left',
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 12,
    elevation: 3,
    marginTop: 15,
  },
  save: {
    width: '100%',
    height: 50,
    backgroundColor: '#0080ff',

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -40,
    marginLeft: 10,
    position: 'absolute',
  },
  txtsave: {
    fontSize: 30,
    color: '#ffffff',
  },
  Inputboxcontainerlast: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    margin: 10,
    borderRadius: 13,
    borderColor: '#0080FF',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});