import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './app/screens/ProfileScreen';
import MainScreen from './app/screens/MainScreen';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import Tabs from './app/screens/Tabs';
import EditProfile from './app/screens/EditProfile';
import SearchedStudentProfile from './app/screens/SearchedStudentProfile';
import SearchedStudent from './app/screens/SearchedStudent';
import { NavigationContainer } from '@react-navigation/native';
import job from './app/screens/Jobs';
import Drawer from './app/screens/Drawers';
import ConductedSurveys from './app/screens/ConductedSurveys';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login" ScreenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Drawer' component={Drawer} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SearchedStudent" component={SearchedStudent} />
        <Stack.Screen name="SearchedStudentProfile" component={SearchedStudentProfile} />
        <Stack.Screen name="Jobs" component={job} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ConductedSurveys" component={ConductedSurveys} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

