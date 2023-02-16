import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import { Alert } from 'react-native';
import bgImage from '../assets/logo.png';
import { Image } from 'react-native';


const SessionJob = ({navigation}) => {
  const [title, settitle] = useState([]);
  const [checked, setChecked] = React.useState('Jobless');

  const [toyear, settoyear] = useState();
  const [fromyear, setfromyear] = useState();
  async function saveSessionJob() {
    console.log('calling Creating Job with Session...........');
    let response = await fetch(
      global.apiurl +
        `student/SendMessage?title=${title}&tosession=${toyear}&fromsession=${fromyear}&status=${checked}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    let json = await response.json();
    if (json != null) {
       Alert.alert('Job', 'Added ');

  } else {
    Alert.alert('Job', 'Not Added ');
  }

  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
          borderColor: 'black',
          elevation: 20,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          flex: 1,
        }}>
        <Image
          source={bgImage}
          style={{justifyContent: 'center', marginTop: 0, left: 78}}
        />
        <Text style={{color: 'black', fontSize: 16, top:"6%",left:"5%"}}>Description</Text>
        <TextInput
          style={{
            height: 40,
            width: 350,
            borderRadius: 20,
            marginTop: 50,
            left: 20,
            paddingLeft: 10,
            backgroundColor: 'lightgrey',
          }}
          onChangeText={settitle}
          value={title}
          placeholderTextColor={'navy'}
          placeholder="Tell something about job......"></TextInput>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <Text style={{color: 'black', fontSize: 16, left: '100%'}}>To</Text>

          <Text style={{color: 'black', fontSize: 16, left: '980%'}}>From</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Picker
            style={{
              width: 150,
              left: 20,
              paddingLeft: 10,
              backgroundColor: 'lightgrey',
            }}
            selectedValue={toyear}
            onValueChange={Itemvalue => {
              settoyear(Itemvalue);
            }}>
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

          <Picker
            style={{
              width: 150,
              left: '140%',
              // paddingLeft: 10,
              backgroundColor: 'lightgrey',
            }}
            selectedValue={fromyear}
            onValueChange={Itemvalue => {
              setfromyear(Itemvalue);
            }}>
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
        </View>
        <View style={{flexDirection: 'column', left: 12, top: 10}}>
          <RadioButton
            value="first"
            status={checked === 'Jobless' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Jobless')}
          />
          <Text style={{left: 40, bottom: 28}}>Jobless</Text>
          <RadioButton
            value="second"
            status={checked === 'With job' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('With job')}
          />
          <Text style={{left: 40, bottom: 28}}>With job</Text>
          <RadioButton
            value="With job but need other job"
            status={
              checked === 'With job but need other job'
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => setChecked('With job but need other job')}
          />
          <Text style={{left: 40, bottom: 28}}>
            With job but need other job
          </Text>
        </View>
        <Button
          mode="outlined"
          onPress={() => {
            saveSessionJob();
          }}>
          Post
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SessionJob;
