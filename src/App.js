/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createBottomTabNavigator } from "react-navigation"
import { Provider } from 'react-redux';
import store from './store';

import Home from "./screens/home";
import Customers from "./screens/customers";

const MainTabs = createBottomTabNavigator({
  Home: Home,
  Customers: Customers,
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

const App = () => (
  <Provider store={store}>
    <MainTabs />
  </Provider>
)

export default App;