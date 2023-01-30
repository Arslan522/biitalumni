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
import Result from './app/screens/Result';
import AddQuestion from './app/screens/AddQuestion';
import Splash from './app/screens/Splash';
import ScreenOfSurveys from './app/screens/ScreenOfSurvey';
import Endorcement from './app/screens/Endorcement';
import Endorcements from './app/screens/Endorcement';
import CreateJob from './app/screens/CreateJob';
import Modals from './app/screens/Modal';
import CalenderModal from './app/Components/CalenderModal';
import SearchedProfile from './app/screens/SearchedProfile';
import ShowNotification from './app/screens/ShowNotification';
import SearchedprofileScreen from './app/screens/SearchedprofileScreen';
import ShowSurvey from './app/screens/ShowSurvey';
import DinnerPost from './app/screens/DinnerPost';
import CreatePost from './app/screens/CreatePost';
//192.168.100.42 wifi
//192.168.29.97 mobile
global.apiurl = 'http://192.168.29.97/FypAlumni/api/';
global.imageUrl = 'http://192.168.29.97/FypAlumni/Content/Image/';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        component={Splash}
        ScreenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen
          name="SearchedprofileScreen"
          component={SearchedprofileScreen}
        />
        <Stack.Screen name="SearchedStudent" component={SearchedStudent} />
        <Stack.Screen
          name="SearchedStudentProfile"
          component={SearchedStudentProfile}
        />
        <Stack.Screen name="Jobs" component={Job} />
        <Stack.Screen name="Main Page" component={MainScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ShowNotification" component={ShowNotification} />
        <Stack.Screen name="ShowSurvey" component={ShowSurvey} />
        <Stack.Screen name="radio" component={RadioButtonss} />
        <Stack.Screen name="CreateSurvey" component={CreateSurvey} />
        <Stack.Screen name="ConductedSurveys" component={ConductedSurveys} />
        <Stack.Screen name="SearchedProfile" component={SearchedProfile} />
        <Stack.Screen name="DinnerPost" component={DinnerPost} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Add Questions" component={AddQuestion} />
        <Stack.Screen name="ScreenOfSurveys" component={ScreenOfSurveys} />
        <Stack.Screen name="Endorcement" component={Endorcement} />
        <Stack.Screen name="CreateJob" component={CreateJob} />
        <Stack.Screen name="Modal" component={Modals} />
        <Stack.Screen name="AddQuestion" component={AddQuestion} />
        <Stack.Screen name="CalenderModal" component={CalenderModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
