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
import Sessionvise from './app/screens/Sessionvise';
import Dinner from './app/screens/Dinner';
import ForApproving from './app/screens/ForApproving';
import ReasultShow from './app/screens/ReasultShow';
import SessionJob from './app/screens/SessionJob';
import Admindashboard from './app/screens/Admindashboard';
import SessionJobShow from './app/screens/SessionJobShow';
import Drawerone from './app/screens/Drawerone';
import Showjob from './app/screens/Showjob';
//192.168.100.42 wifi
//192.168.227.97 mobile
global.apiurl = 'http://192.168.227.97/FypAlumni/api/';
global.imageUrl = 'http://192.168.227.97/FypAlumni/Content/Image/';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        ScreenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MainScreen" component={MainScreen} />

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="Drawerone"
          component={Drawerone}
          options={{headerShown: false}}
        />

        <Stack.Screen name="SessionJob" component={SessionJob} />
        <Stack.Screen name="Showjob" component={Showjob} />

        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ReasultShow" component={ReasultShow} />
        <Stack.Screen
          name="SearchedprofileScreen"
          component={SearchedprofileScreen}
        />
        <Stack.Screen name="SearchedStudent" component={SearchedStudent} />
        <Stack.Screen
          name="SearchedStudentProfile"
          component={SearchedStudentProfile}
        />
        <Stack.Screen name="Admindashboard" component={Admindashboard} />

        <Stack.Screen name="ForApproving" component={ForApproving} />
        <Stack.Screen name="Jobs" component={Job} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ShowNotification" component={ShowNotification} />
        <Stack.Screen name="ShowSurvey" component={ShowSurvey} />
        <Stack.Screen name="radio" component={RadioButtonss} />
        <Stack.Screen name="CreateSurvey" component={CreateSurvey} />
        <Stack.Screen name="ConductedSurveys" component={ConductedSurveys} />
        <Stack.Screen name="SearchedProfile" component={SearchedProfile} />
        <Stack.Screen name="DinnerPost" component={DinnerPost} />
        <Stack.Screen name="Dinner" component={Dinner} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="SessionVise" component={Sessionvise} />
        <Stack.Screen name="Add Questions" component={AddQuestion} />
        <Stack.Screen name="ScreenOfSurveys" component={ScreenOfSurveys} />
        <Stack.Screen name="Endorcement" component={Endorcement} />
        <Stack.Screen name="CreateJob" component={CreateJob} />
        {/* <Stack.Screen name="ForApproving" component={ForApproving} /> */}
        <Stack.Screen name="Modal" component={Modals} />
        <Stack.Screen name="AddQuestion" component={AddQuestion} />
        <Stack.Screen name="CalenderModal" component={CalenderModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App









///////////////////Fade in out view ////////////////////////








// import React, {useRef} from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from 'react-native';

// const App = () => {
//   // fadeAnim will be used as the value for opacity. Initial Value: 0
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 5000,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {
//     // Will change fadeAnim value to 0 in 3 seconds
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[
//           styles.fadingContainer,
//           {
//             // Bind opacity to animated value
//             opacity: fadeAnim,
//           },
//         ]}>
//         <Text style={styles.fadingText}>Fading View!</Text>
//       </Animated.View>
//       <View style={styles.buttonRow}>
//         <Button title="Fade In View" onPress={fadeIn} />
//         <Button title="Fade Out View" onPress={fadeOut} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: 'powderblue',
//   },
//   fadingText: {
//     fontSize: 28,
//   },
//   buttonRow: {
//     flexBasis: 100,
//     justifyContent: 'space-evenly',
//     marginVertical: 16,
//   },
// });

// export default App;







