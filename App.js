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
import Job from './app/screens/Jobs';
import Survey from './app/screens/Survey';
import CreateSurvey from './app/screens/CreateSurvey';
import RadioButtonss from './app/screens/RadioButtons';

global.apiUrl = 'http://192.168.211.97/FypAlumni/api/student/'
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
        <Stack.Screen name="Jobs" component={Job} />
        <Stack.Screen name="Main Page" component={MainScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="radio" component={RadioButtonss} />
        <Stack.Screen name="CreateSurvey" component={CreateSurvey} />
        <Stack.Screen name="ConductedSurveys" component={ConductedSurveys} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App

