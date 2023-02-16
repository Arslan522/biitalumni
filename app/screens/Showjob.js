import { View, Text } from 'react-native'
import React from 'react'

const Showjob = ({navigation, route}) => {
      const {datajob} = route.params;
      console.log('data from prev screen..........', datajob);
  return (
    <View
      style={{
        borderColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        // flexDirection: 'row',
        margin: 7,
        backgroundColor: 'lightgrey',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontSize: 30, fontWeight: 'bold', left: 10, color: 'black'}}>
          {' '}
          About :-
        </Text>
        <Text
          style={{left: 30, color: 'black', top: 10, fontSize: 17, width: 230}}>
          {' '}
          {datajob.job_disc}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontSize: 30, fontWeight: 'bold', left: 10, color: 'black'}}>
          {' '}
          Company :-
        </Text>
        <Text style={{left: 30, color: 'black', top: 10, fontSize: 17}}>
          {' '}
          {datajob.company}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontSize: 30, fontWeight: 'bold', left: 10, color: 'black'}}>
          {' '}
          City :-
        </Text>
        <Text style={{left: 30, color: 'black', top: 10, fontSize: 17}}>
          {' '}
          {datajob.city}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontSize: 30, fontWeight: 'bold', left: 10, color: 'black'}}>
          {' '}
          Salary :-
        </Text>
        <Text style={{left: 30, color: 'black', top: 10, fontSize: 17}}>
          {' '}
          {datajob.salary}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontSize: 30, fontWeight: 'bold', left: 10, color: 'black'}}>
          {' '}
          Required Cgpa :-
        </Text>
        <Text style={{left: 30, color: 'black', top: 10, fontSize: 17}}>
          {' '}
          {datajob.cgpa}
        </Text>
      </View>
    </View>
  );
};

export default Showjob