import { View, Text } from 'react-native';
import React from 'react';
import { NavigationAction } from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import SearchStudent from './SearchStudent';
import EditProfile from './EditProfile';
import MainScreen from './MainScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Jobs from './Jobs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import job from './Jobs';

const Tab = createMaterialBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator initialRouteName="MainScreen" color='#345678'>
      <Tab.Screen name='Home' component={MainScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused, size }) => (
          <Icon
            name='home'
            size={focused ? 33 : 29}
            color={focused ? '#2B65EC' : 'grey'}
          />
        ),
      }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused, size }) => (
          <Icon
            name='person'
            size={focused ? 33 : 29}
            color={focused ? '#2B65EC' : 'grey'}
          />
        ),
      }} />
      <Tab.Screen name='SearchAlumni' component={SearchStudent} options={{
        headerShown: false,
        tabBarIcon: ({ focused, size }) => (
          <Icon
            name='search'
            size={focused ? 33 : 29}
            color={focused ? '#2B65EC' : 'grey'}
          />
        ),
      }} />
      <Tab.Screen name="job" component={job} options={{
        headerShown: false,
        tabBarIcon: ({ focused, size }) => (
          <Icon
            name='home'
            size={focused ? 33 : 29}
            color={focused ? '#2B65EC' : 'grey'}
          />
        ),
      }} />
    </Tab.Navigator>
  );
}
export default Tabs