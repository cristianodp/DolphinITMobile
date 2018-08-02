import React, { Component } from "react";
import { View, Text, ActivityIndicator, TextInput, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { loadCategories } from '../../store/categoriesReducer';
import CategoryList from "./categoryList"
import ButtonIcon from "../../components/ButtonIcon"

export class CategoriesSearch extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Categories',
    };
  }

  constructor(props) {
    super(props);
    this.state = { query: null, customer: {} };
  }

  componentDidMount() {
    this.props.loadCategories(this.state.query);
    const customer = this.props.navigation.getParam("itemSelected")
    this.setState({ customer: customer })
  }

  handleSearchChange = query => {
    this.setState({ query });
  };

  handleSearchSubmit = () => {
    this.props.loadCategories(this.state.query);
  };

  handlerOnItemSelected = item => {

    const { navigate } = this.props.navigation;
    navigate('ItemSearch', { categorySelected: item
        , customerSelected: this.state.customer
       , typeList:"itens"
       , typeSource:"loadItens"  })
  }

  render() {
    const { loading, categories } = this.props
    const { customer } = this.state

    if (loading) return <ActivityIndicator size="large" color="#000" />

    return (
      <View style={styles.container}>
        <View style={styles.conatinerCustomer}>
          <Text >Customer selected:</Text>
          <Text style={styles.textCustomer}>{customer.name}</Text>
        </View>
        {false ?
          <TextInput
            style={styles.searchInput}
            placeholder={"Search for a specific category"}
            onChangeText={this.handleSearchChange}
            onSubmitEditing={this.handleSearchSubmit}
            returnKeyType="search"
          /> : null
        }
        <CategoryList categories={categories} onItemSelected={this.handlerOnItemSelected} />

      </View>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return ({
    loading: categories.loading,
    categories: categories.categories,
  })
}

const mapDispatchToProps = { loadCategories }

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSearch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  conatinerCustomer: {
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    marginBottom: 4,
  },
  textCustomer: {
    fontSize: 18,
  },
  searchInput: {

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

