import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { SigninScreen } from './Screens/SigninScreeen';
import { SignupScreen } from './Screens/SignupScreen';
import { MainScreen } from './Screens/MainScreen';
import { HomeScreen } from './Tabs/HomeScreen';
import { ProfileScreen } from './Tabs/ProfileScreen';
import {MenuScreen} from './Tabs/MenuScreen';

const AuthStack = createStackNavigator(
  {
    Main: MainScreen,
    Signin: SigninScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);

const TabStack = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name="ios-home" size={25}/>
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name="md-contact" size={25}/>
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      tabBarIcon: <Ionicons name="md-menu" size={25}/>
    }
  }
})



export default createAppContainer(TabStack);