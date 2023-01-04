import { View, Text, Image } from 'react-native';
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
import ScreenOfSurvey from './ScreenOfSurvey';
import  Icon  from 'react-native-vector-icons/MaterialIcons'; 
import ConductedSurveys from './ConductedSurveys';
import AddQuestion from './AddQuestion';
import RadioButtonss from './RadioButtons';
import bgImage from '../assets/logo.png';
import Job from './Jobs';
import Modals from './Modal';
import { Touchable } from 'react-native';
import Login from './Login';
import ImagePicker from './Imageppicker';
import ViewOrder from './ViewOrder';


const Drawer = createDrawerNavigator();
const Drawers = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="Main Page"
        component={MainScreen}
        options={{ drawerLabel:'Timeline',
        drawerIcon:({focused,size})=>(
          <Icon 
        name="contact-page"
        size={25}
        color={focused ? '#2196F3' : 'black'}/>
        ),
      }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel:'Profile',
        drawerIcon:({focused,size})=>(
          <Icon 
        name="person"
        size={25}
        color={focused ? '#2196F3' : 'black'}/>
        ),
      }}
      />
      <Drawer.Screen
        name="Search Alumni"
        component={SearchStudent}
        options={{ drawerLabel:'Search Alumni',
        drawerIcon:({focused,size})=>(
          <Icon 
        name="search"
        size={25}
        color={focused ? '#2196F3' : 'black'}/>
        ),
      }}
      />
      <Drawer.Screen
        name="Job"
        component={Job}
        options={{ drawerLabel:'Job',
        drawerIcon:({focused,size})=>(
          <Icon 
        name="add-task"
        size={25}
        color={focused ? '#2196F3' : 'black'}/>
        ),
      }}
      />
      <Drawer.Screen
        name="ConductedSurveys"
        component={ConductedSurveys}
        options={{ drawerLabel:'Surveys',
        drawerIcon:({focused,size})=>(
          <Icon 
        name="post-add"
        size={25}
        color={focused ? '#2196F3' : 'black'}/>
        ),
      }}
        />
      <Drawer.Screen
        name="Image"
        component={Imageppicker}
        options={{
          drawerLabel: 'Surveys',
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="post-add"
              size={25}
              color={focused ? '#2196F3' : 'black'} />
          ),
        }}
      />

        <Drawer.Screen
        
        name="vieworder"
        component={ViewOrder}
        
        options={{ drawerLabel:'vieworder',
        headerShown: false,
        
        drawerIcon:({focused,size})=>(
          <Icon 
        name="logout"
        size={25}
        color={focused ? '#2196F3' : 'black'}/>
        ),
      }}
      />
              
    </Drawer.Navigator>
  );
}
export default Drawers