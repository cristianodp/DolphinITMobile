import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './home';

const HomeStack = createStackNavigator({
    Home,
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

HomeStack.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ tintColor }) =>
    <MaterialCommunityIcons name="home" size={25} color={tintColor} />,
};

export default HomeStack;
