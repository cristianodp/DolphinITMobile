import React, { Component } from "react";
import { View, ActivityIndicator, TextInput, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { loadCustomers } from '../../store/customersReducer';
import Topbar, { Buttonbar } from "../../components/topbar"
import CustomersList from "../../components/CustomersList"

export class customerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleSearchChange = query => {
    this.setState({ query });
  };

  handleSearchSubmit = () => {
    this.props.loadCustomers(this.state.query);
  };

  render() {
    const { loading, customers } = this.props
    return (
      <View style={styles.container}>
        <Topbar title="Customers" 
          rightButtons={
            <Buttonbar
              onPress={() =>{ console.log("clicou")}}
            />
          }
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={this.handleSearchChange}
          onSubmitEditing={this.handleSearchSubmit}
          returnKeyType="search"
        />
        {loading
          ? <ActivityIndicator size="large" color="#000" />
          : <CustomersList customers={customers}></CustomersList>
        }
      </View>
    );
  }
}


/*
function mapStateToProps(state){
  return{
      value: state.query
  }
}

*/
const mapStateToProps = ({ customers }) => {
  return ({
    loading: customers.loading,
    customers: customers.customers,
  })
}

/*
function mapDispatchToProps(dispatch){
  return bindActionCreators({ getCustomers }, dispatch )
}
*/

const mapDispatchToProps = { loadCustomers }

export default connect(mapStateToProps, mapDispatchToProps)(customerSearch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingStart: 10,
    paddingEnd: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  headerTitle: {
    fontWeight: 'bold'
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

