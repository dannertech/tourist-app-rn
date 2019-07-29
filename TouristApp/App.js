/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';

import {createAppContainer,createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import React, {Component} from 'react';


import Homepage from '../TouristApp/Homepage';
import Searchpage from '../TouristApp/Searchpage';
import Resultspage from '../TouristApp/Results';

 export default class App extends Component {
   
   render(){
     return(
       <AppContainer/>
     )
   }
 }

 const HomeStack = createStackNavigator({
   Home: {
     screen: Homepage
   },
   Search: {
     screen: Searchpage
   }
 })

 const SearchStack = createStackNavigator({
   Search: {
     screen: Searchpage
   },
   Results: {
     screen: Resultspage
   }
 })



 const stackNavigator = createBottomTabNavigator({
   Home: HomeStack,
  Search: SearchStack
 })

 const AppContainer = createAppContainer(stackNavigator);