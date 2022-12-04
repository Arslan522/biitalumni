import { View, Text } from 'react-native';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import SearchStudent from '../screens/SearchStudent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import MyComponent from './Appbar';
import Imageppicker from '../screens/Imageppicker';
import CreateJob from '../screens/CreateJob';
import CreateSurvey from '../screens/Survey';
import Survey from '../screens/Survey';

const Drawer = createDrawerNavigator();
const Drawers = () => {
  return (
    <Drawer.Navigator ScreenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="home"
        component={MainScreen}
        
        ScreenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ImagePicker"
        component={Imageppicker}
        
        ScreenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Notifications"
        component={SearchStudent}
        options={{ drawerLabel: 'Serach Alumni' }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name="Job"
        component={CreateJob}
        options={{ drawerLabel: 'Jobs' }}
      />
      <Drawer.Screen
        name="Survey"
        component={Survey}
        options={{ drawerLabel: 'Surveys' }}
      />
    </Drawer.Navigator>
  );
}
export default Drawers