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

import HomeScreen from "./screens/home/home";
import CustomersSearchScreen from "./screens/customers/customerSearch";

const MainTabs = createBottomTabNavigator({
  Home: HomeScreen,
  Customers: CustomersSearchScreen,
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