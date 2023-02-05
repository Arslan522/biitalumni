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
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {Modal, Pressable} from 'react-native';
import img from '../assets/dinner.jpg';
import { Picker } from '@react-native-picker/picker';


const Dinner = ({navigation}) => {
  const [postdescription, setPostDescription] = useState();
  const [getProduct, setProduct] = useState();
  const [Postdata, setPostdata] = useState();
  const [imgsrc, setImagesrc] = useState();
  const [image, setImage] = useState({});
  const [startdate, setstartdate] = useState();
  const [modalVisible1, setModalVisible1] = useState(false);
  const [year, setyear] = useState();
  const [date, setdate] = useState();
  const [title, settitle] = useState();
    const [status, setStatus] = useState();

  const [selectedDate, setSelectedDate] = useState();



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
  console.log("dinner............................",date);
   let response = await fetch(
     global.apiurl +
       `student/adminaddPosst?postdiscription=${postdescription}&title=${title}
                &date=${startdate}&year=${year}&aid=${global.aid}&status='decline'`,
     {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body: data,
     },
   );
   let json = await response.json();
   console.log(JSON.stringify(json));
   setPostdata(json)
   console.log(setPostdata);
 }






  return (
    <ScrollView style={{}}>
      <Card>
        <Card.Content>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              left: 150,
              fontWeight: 'bold',
            }}>
            Dinner
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderBottomColor: 'black',
              width: 100,
              left: 145,
              marginBottom: 5,
              bottom: 4,
            }}></View>
          <Image source={img} style={{height: 320, width: 380}} />
          <Text style={{color: 'black', fontSize: 16, left: 15, marginTop: 30}}>
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
          <Text style={{color: 'black', fontSize: 16, left: 15}}>
            Description
          </Text>
          <TextInput
            style={{
              height: 40,
              width: 350,
              left: 20,
              paddingLeft: 10,
              backgroundColor: 'lightgrey',
            }}
            backgroundColor="lightgrey"
            onChangeText={setPostDescription}
            value={postdescription}
            placeholder="What's on your mind"
          />
          <Text style={{color: 'black', fontSize: 16, left: 15}}>Year</Text>
          <Picker
            style={{
              // width: 145,
              // height: 40,
              // padding: 10,
              // right: 2,
              // bottom: 21,
              // width: 150,
              // // marginLeft: 3,
              // marginLeft: 22,
              // // marginTop: 10,
              // // marginBottom: 10,
              // borderColor: 'grey',
              // borderWidth: 1,
              // borderRadius: 18,
              // backgroundColor: '#F8F0E3',
              // color: 'black',
              // height: 40,
              width: 350,
              left: 20,
              paddingLeft: 10,
              backgroundColor: 'lightgrey',
            }}
            selectedValue={year}
            onValueChange={Itemvalue => {
              setyear(Itemvalue);
            }}>
            <Picker.Item label="1992" value="1992" />
            <Picker.Item label="1993" value="1993" />
            <Picker.Item label="1994" value="1994" />
            <Picker.Item label="1995" value="1995" />
            <Picker.Item label="1996" value="1996" />
            <Picker.Item label="1997" value="1997" />
            <Picker.Item label="1998" value="1998" />
            <Picker.Item label="1999" value="1999" />
            <Picker.Item label="2000" value="2000" />
            <Picker.Item label="2001" value="2001" />
            <Picker.Item label="2002" value="2002" />
            <Picker.Item label="2003" value="2003" />
            <Picker.Item label="2004" value="2004" />
            <Picker.Item label="2005" value="2005" />
            <Picker.Item label="2006" value="2006" />
            <Picker.Item label="2007" value="2007" />
            <Picker.Item label="2008" value="2008" />
            <Picker.Item label="2009" value="2009" />
            <Picker.Item label="2010" value="2010" />
            <Picker.Item label="2011" value="2011" />
            <Picker.Item label="2012" value="2012" />
            <Picker.Item label="2013" value="2013" />
            <Picker.Item label="2014" value="2014" />
            <Picker.Item label="2015" value="2015" />
            <Picker.Item label="2016" value="2016" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2021" value="2021" />
            <Picker.Item label="2022" value="2022" />
            <Picker.Item label="2023" value="2023" />
          </Picker>

          <Text style={{color: 'black', fontSize: 16, left: 15}}>
            Start Date
          </Text>
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
              <Pressable style={{flexDirection: 'row'}}>
                <Button
                  onPress={() => navigation.navigate('MainPage')}
                  mode="outlined">
                  Cancel
                </Button>
                <Button
                  onPress={() => setModalVisible1(!modalVisible1)}
                  mode="contained"
                  style={{}}>
                  Confirm Date
                </Button>
              </Pressable>
            </Modal>
          </View>
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
    </ScrollView>
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
    height: 40,
    width: 350,
    left: 20,
    paddingLeft: 10,
  },
  bg: {
    justifyContent: 'center',
    // marginTop: 10,
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
