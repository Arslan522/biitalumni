// import { View, Text, Image, useState } from 'react-native';
// import React from 'react';
// import ProfileScreen from '../screens/ProfileScreen';
// import SearchStudent from '../screens/SearchStudent';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MainScreen from '../screens/MainScreen';
// import MyComponent from './Appbar';
// import Imageppicker from '../screens/Imageppicker';
// import CreateJob from '../screens/CreateJob';
// import CreateSurvey from '../screens/Survey';
// import Survey from '../screens/Survey';
// import ScreenOfSurvey from './ScreenOfSurvey';
// import  Icon  from 'react-native-vector-icons/MaterialIcons';
// import ConductedSurveys from './ConductedSurveys';
// import AddQuestion from './AddQuestion';
// import RadioButtonss from './RadioButtons';
// import bgImage from '../assets/logo.png';
// import Job from './Jobs';
// import Modals from './Modal';
// import { Touchable } from 'react-native';
// import Login from './Login';
// import ImagePicker from './Imageppicker';
// import ViewOrder from './ViewOrder';
// import Search from './Search';

// const Drawers = () => {
// const Drawer = createDrawerNavigator();
// // async function getalumni() {
// //   let response = await fetch
// //   (global.apiurl + 'student/getalumni')
// //   let json = await response.json();
// //   console.log(JSON.stringify(json));
// //   setData(json);
// // }
//   return (

//       {/* <Image style={{ height: 160, width: 130, borderRadius: 20, marginTop: 5 }}
//        source={{ uri: global.imageUrl + `${Data.image}` }} />  */}

//     <Drawer.Navigator >
//       <Drawer.Screen
//         name="Main Page"
//         component={MainScreen}
//         options={{ drawerLabel:'Timeline',
//         drawerIcon:({focused,size})=>(
//           <Icon
//         name="contact-page"
//         size={25}
//         color={focused ? '#2196F3' : 'black'}/>
//         ),
//       }}
//       />
//       <Drawer.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ drawerLabel:'Profile',
//         drawerIcon:({focused,size})=>(
//           <Icon
//         name="person"
//         size={25}
//         color={focused ? '#2196F3' : 'black'}/>
//         ),
//       }}
//       />
//       <Drawer.Screen
//         name="Job"
//         component={Job}
//         options={{ drawerLabel:'Job',
//         drawerIcon:({focused,size})=>(
//           <Icon
//             name="fiber-new"
//         size={25}
//         color={focused ? '#2196F3' : 'black'}/>
//         ),
//       }}
//       />
//       <Drawer.Screen
//         name="Search"
//         component={Search}
//         options={{
//           drawerLabel: 'Search Alumni',
//           drawerIcon: ({ focused, size }) => (
//             <Icon
//               name="search"
//               size={25}
//               color={focused ? '#2196F3' : 'black'} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="ConductedSurveys"
//         component={ConductedSurveys}
//         options={{ drawerLabel:'Surveys',
//         drawerIcon:({focused,size})=>(
//           <Icon
//         name="post-add"
//         size={25}
//         color={focused ? '#2196F3' : 'black'}/>
//         ),
//       }}
//         />

//     </Drawer.Navigator></>
//   );
// }
// export default Drawers

import {useState} from 'react';
import {View, Text, Image} from 'react-native';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import SearchStudent from '../screens/SearchStudent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import MyComponent from './Appbar';
import Imageppicker from '../screens/Imageppicker';
import CreateJob from '../screens/CreateJob';
import CreateSurvey from '../screens/Survey';
import Survey from '../screens/Survey';
import ScreenOfSurvey from './ScreenOfSurvey';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConductedSurveys from './ConductedSurveys';
import AddQuestion from './AddQuestion';
import RadioButtonss from './RadioButtons';
import bgImage from '../assets/logo.png';
import Job from './Jobs';
import Modals from './Modal';
import {Touchable} from 'react-native';
import Login from './Login';
import ImagePicker from './Imageppicker';
import ViewOrder from './ViewOrder';
import Search from './Search';
import {DrawerRouter} from '@react-navigation/native';
import Sessionvise from './Sessionvise';
import ShowNotification from './ShowNotification';
import DinnerPost from './DinnerPost';
import Dinner from './Dinner';
import ForApproving from './ForApproving';
import Result from './Result';
import SessionJob from './SessionJob';
import SessionJobShow from './SessionJobShow';
import Admindashboard from './Admindashboard';

const Drawer = createDrawerNavigator();

const Drawerone = () => {
  const [getProduct, setProduct] = useState();

  async function timelineView() {
    let response = await fetch(global.apiurl + 'student/TimeLine');
    let json = await response.json();
    console.log(JSON.stringify(json));
    setProduct(json);
    console.log('this..........hgfhg.....', json);
  }
  return (
    <Drawer.Navigator initialRouteName="MainScreen">
      {/* scrollEnabled={false} */}

      <Drawer.Screen
        name="Main Page"
        component={MainScreen}
        options={{
          drawerLabel: 'Timeline',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="contact-page"
              size={25}
              color={focused ? '#2196F3' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: '',
          drawerIcon: () => (
            <Image
              style={{
                backgroundColor: 'black',
                marginBottom: 60,
                left: 70,
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
              source={{uri: global.imageUrl + `${global.profileimage}`}}
            />

            //<View><Text>{global.fname}</Text></View>
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="person"
              size={25}
              color={focused ? '#2196F3' : 'black'} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Job"
        component={Job}
        options={{
          drawerLabel: 'Job',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="add-task"
              size={25}
              color={focused ? '#2196F3' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="search"
        component={Search}
        options={{
          drawerLabel: 'Search Alumni',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="search"
              size={25}
              color={focused ? '#2196F3' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ConductedSurveys"
        component={ConductedSurveys}
        options={{
          drawerLabel: 'Surveys',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="post-add"
              size={25}
              color={focused ? '#2196F3' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="DinnerPost"
        component={DinnerPost}
        options={{
          drawerLabel: 'Dinner',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="dinner-dining"
              size={25}
              color={focused ? '#2196F3' : 'black'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ForApproving"
        component={ForApproving}
        options={{
          drawerLabel: 'Approve',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="dinner-dining"
              size={25}
              color={focused ? '#2196F3' : 'black'}
            />
          ),
        }}
      />
     
      <Drawer.Screen
        name="SessionJobShow"
        component={SessionJobShow}
        options={{
          drawerLabel: 'SessionJobShow',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="dinner-dining"
              size={25}
              color={focused ? '#2196F3' : 'black'}
            />
          ),
        }}
      />
      
      {/* <Drawer.Screen
        name="Image"
        component={Imageppicker}
        options={{
          drawerLabel: 'imagepicker',
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="post-add"
              size={25}
              color={focused ? '#2196F3' : 'black'} />
          ),
        }}
      /> */}

      {/* <Drawer.Screen

        name="vieworder"
        component={ViewOrder}

        options={{
          drawerLabel: 'vieworder',
          headerShown: false,

          drawerIcon: ({ focused, size }) => (
            <Icon
              name="logout"
              size={25}
              color={focused ? '#2196F3' : 'black'} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};
export default Drawerone;
