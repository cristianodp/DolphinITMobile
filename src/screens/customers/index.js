import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomerCreate from './customerCreate';
import CustomerSearch from './customerSearch';
import CategorySearch from "../categories/categorySearch";
import ItemCreate from '../itens/itemCreate';
import ItemSearch from '../itens/itemSearch';

const CustomerStack = createStackNavigator({
  CustomerCreate,
  CustomerSearch,
  CategorySearch,
  ItemCreate,
  ItemSearch,
}, {
    initialRouteName: 'CustomerSearch',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

CustomerStack.navigationOptions = {
  title: 'Customer',
  tabBarIcon: ({ tintColor }) =>
    <MaterialCommunityIcons name="account-group" size={25} color={tintColor} />,
};

export default CustomerStack;
