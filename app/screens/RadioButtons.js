import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioButtonss = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
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