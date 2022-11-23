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
import Survey from './app/screens/Survey';
import Drawer from './app/screens/Drawers';
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
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

// import { View, Text } from 'react-native';
// import React from 'react';
// import ProfileScreen from './app/screens/ProfileScreen';
// import SearchStudent from './app/screens/SearchStudent';
// import MainScreen from'./app/screens/MainScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// const Drawers = createDrawerNavigator();

// const App = () => {
//     return(
//         <NavigationContainer>
//     <Drawer.Navigator >
//       <Drawer.Screen
//         name="home"
//         component={ProfileScreen}
//         options={{ drawerLabel: 'Home' }}
//       />
//       <Drawer.Screen
//         name="Notifications"
//         component={SearchStudent}
//         options={{ drawerLabel: 'Updates' }}
//       />
//       <Drawer.Screen
//         name="Profile"
//         component={MainScreen}
//         options={{ drawerLabel: 'Profile' }}
//       />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// export default Drawer