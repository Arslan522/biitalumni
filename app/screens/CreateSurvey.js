import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native';
import Task from './Task';
import bgImage from '../assets/logo.png';
import {Button, TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import job from './Jobs';
import ConductedSurveys from './ConductedSurveys';
import AddQuestion from './AddQuestion';
import {Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ApprovedSurveys from './ApprovedSurveys';
import Calender from './Calender';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-modern-datepicker';
import CalenderModal from '../Components/CalenderModal';
import {Modal, Pressable} from 'react-native';

const CreateSurvey = ({navigation}) => {
  const [title, settitle] = useState();
  const [showCalendar, setShowCalendar] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const [startdate, setstartdate] = useState();
  const [enddate, setenddate] = useState();
  const [alumniid, setalumniid] = useState();
  const [getstatus, setstatus] = useState();
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const calenderchang = () => {
    console.log('onchange'),
      (<DatePicker onSelectedChange={date => setSelectedDate(date)} />);
  };
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  async function saveSurvey() {
    console.log('calling Creating Survey...........');
    let status = 'pending';
    let response = await fetch(global.apiurl + 'student/insertthesurvery', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        start_date: startdate,
        end_date: enddate,
        allumnini_id: global.aid,
        status: status,
      }),
    });
    let json = await response.json();

    if (json != null) {
      global.sid = json.sur_id;

      console.log(aid);
      Alert.alert('Please', " Enter your's Question in next page", [
        {
          text: 'Add Question',
          onPress: () => {
            navigation.navigate('AddQuestion');
          },
        },
      ]);
    } else {
      Alert.alert('Survey', 'Not added ');
    }

  }

  return (
    <View style={{flex: 1}}>
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
          placeholder="Enter Start Date"
          keyboardType="numeric"
          value={startdate}
          onChangeText={n => setstartdate(n)}
          disabled={true}
          onPress={() => setModalVisible1(true)}
        />
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible1(!modalVisible1);
            }}>
            <View style={styles.centeredView}>
              <DatePicker onSelectedChange={date => setstartdate(date)} />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}>
              <Button color="red" mode="outlined" style={{}}>
                Confirm Date
              </Button>
            </Pressable>
          </Modal>
        </View>
        <Icon
          name="calendar-today"
          style={{left: 20, top: 0}}
          size={35}
          onPress={() => setModalVisible1(true)}></Icon>
      </View>
      <Text style={{color: 'black', fontSize: 18, left: 15}}>End Date</Text>
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
          placeholder="Enter End Date"
          keyboardType="numeric"
          value={enddate}
          disabled={true}
          onPress={() => setModalVisible(true)}
          onChangeText={n => setenddate(n)}
        />
        <Icon
          name="calendar-today"
          style={{left: 20, top: 0}}
          size={35}
          onPress={() => setModalVisible(true)}></Icon>
      </View>
      
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <DatePicker onSelectedChange={date => setenddate(date)} />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Button color="red" mode="outlined" style={{}}>
              Confirm Date
            </Button>
          </Pressable>
        </Modal>
      </View>

      <Button
        mode="contained"
        style={{left: 110, width: 160, top: 10}}
        onPress={() => {
          saveSurvey();
        }}>
        Add Questions
      </Button>
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

export default CreateSurvey;
