import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/MaterialIcons';

const MyComponent = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="search bar" />
    <Appbar.Action icon="weight" onPress={() => {}} />
    <Appbar.Action icon="" onPress={() => {}} />
  </Appbar.Header>
);

export default MyComponent;