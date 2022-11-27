import { View, Text } from 'react-native';
import React from 'react';
import ProfileScreen from './ProfileScreen';
import SearchStudent from './SearchStudent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './MainScreen';
import MyComponent from './Appbar';
import Imageppicker from './Imageppicker';
import CreateJob from './CreateJob';
import CreateSurvey from './CreateSurvey';

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
        options={{ drawerLabel: 'SerachStudent' }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: 'ProfileScreen' }}
      />
      <Drawer.Screen
        name="Create Job"
        component={CreateJob}
        options={{ drawerLabel: 'Create Jobs' }}
      />
      <Drawer.Screen
        name="Create Survey"
        component={CreateSurvey}
        options={{ drawerLabel: 'Create Survey' }}
      />
    </Drawer.Navigator>
  );
}
export default Drawers