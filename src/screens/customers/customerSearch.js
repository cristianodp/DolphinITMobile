import React, { Component } from "react";
import { View, ActivityIndicator, TextInput, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux';

import { loadCustomers } from '../../store/customersReducer';
import CustomerList from "./customerList"
import ButtonIcon from "../../components/ButtonIcon"

export class customerSearch extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Customers',
      headerRight: (
        <ButtonIcon
          iconName="add"
          onPress={() => {
            const { navigate } = navigation;
            navigate('CustomerCreate')
          }}
        />
      ),
    };
  }

  constructor(props) {
    super(props);
    this.state = { query: null };
  }

  componentDidMount(){
    this.props.loadCustomers(this.state.query);
  }

  handleSearchChange = query => {
    this.setState({ query });
  };

  handleSearchSubmit = () => {
    this.props.loadCustomers(this.state.query);
  };

  handlerOnItemSelected = item =>{
    const { navigate } = this.props.navigation;
    navigate('CategorySearch',{itemSelected: item})
  }
  render() {
    const { loading, customers } = this.props
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.searchInput}
          placeholder={"Search for a specific customer"}
          onChangeText={this.handleSearchChange}
          onSubmitEditing={this.handleSearchSubmit}
          returnKeyType="search"
        />
        {loading
          ? <ActivityIndicator size="large" color="#000" />
          : <CustomerList customers={customers} 
              onItemSelected={this.handlerOnItemSelected} 
              refreshing={loading}
              handleRefresh={this.handleSearchSubmit}></CustomerList>
        }
      </View>
    );
  }
}

const mapStateToProps = ({ customers }) => {
  return ({
    loading: customers.loading,
    customers: customers.customers,
  })
}

const mapDispatchToProps = { loadCustomers }

export default connect(mapStateToProps, mapDispatchToProps)(customerSearch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    margin: 8,
    borderRadius: 6,
    borderWidth: 1,
    paddingTop: 5,
    paddingEnd: 10,
    paddingBottom: 5,
    paddingStart: 10,
  },
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

