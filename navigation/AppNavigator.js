import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Prompts from '../screens/Prompt';
import UserInfo from '../screens/UserInfo';
import Login from '../screens/Login';


const AppNavigator = createStackNavigator({
  Home: Home,
  Login: Login,
  UserInfo: UserInfo,
  Prompts: Prompts
});

  export default createAppContainer(AppNavigator);

