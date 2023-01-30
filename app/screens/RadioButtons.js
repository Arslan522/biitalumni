import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const RadioButtonss = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{flexDirection:"row",left:260,bottom:25}}>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text>yes</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        />
        <Text>no</Text>
    </View>
  );
};

export default RadioButtonss;