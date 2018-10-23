import React from 'react';
import {StyleSheet,Text,view} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login:LoginScreen,
  Home:HomeScreen
})

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
}),
