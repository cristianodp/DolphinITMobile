import React, { Component } from "react";
import { View, ActivityIndicator, TextInput, StyleSheet, Button } from "react-native";
import { connect } from 'react-redux';

import { loadItens } from '../../store/itensReducer';
import ItemList from "./itemList"
import ButtonIcon from "../../components/ButtonIcon"

export class ItemSearch extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Itens',
      headerRight: (
        <ButtonIcon
          iconName="add"
          onPress={() => {
            const customer = navigation.getParam("customerSelected")
            const category = navigation.getParam("categorySelected")
        
            const  customerId = customer? customer["_id"]: null
            const  categoryId  = category? category["_id"]: null

            const { navigate } = navigation;
            navigate('ItemCreate',{customerId,categoryId})
          }}
        />
      ),
    };
  }

  constructor(props) {
    super(props);
    this.state = { query: null };
  }

  getSearchItens = (query) =>{

    const customer = this.props.navigation.getParam("customerSelected")
    const category = this.props.navigation.getParam("categorySelected")

    const  customerId = customer? customer["_id"]: null
    const  categoryId  = category? category["_id"]: null
  
    this.props.loadItens({
      query: query,
      customerId: customerId,
      categoryId: categoryId
    }
    );
  }

  componentDidMount() {

    const customer = this.props.navigation.getParam("customerSelected")
    const category = this.props.navigation.getParam("categorySelected")
    this.setState({customer:customer,category,category})

    this.getSearchItens(this.state.query);
  }



  handleSearchChange = query => {
    this.setState({ query });
  };

  handleSearchSubmit = () => {
    this.getSearchItens(this.state.query);
    
  };

  handlerOnItemSelected = item => {
    const { navigate } = this.props.navigation;
    navigate('ItemDetail', { itemSelected: item })
  }
  render() {
    const { loading, itens } = this.props
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.searchInput}
          placeholder={"Search for a specific item"}
          onChangeText={this.handleSearchChange}
          onSubmitEditing={this.handleSearchSubmit}
          returnKeyType="search"
        />
        {loading
          ? <ActivityIndicator size="large" color="#000" />
          : <ItemList data={itens} onItemSelected={this.handlerOnItemSelected}></ItemList>
        }
      </View>
    );
  }
}

const mapStateToProps = ({ itens }) => {
  return ({
    loading: itens.loading,
    itens: itens.itens,
    newItem: itens.newItem
  })
}

const mapDispatchToProps = { loadItens }

export default connect(mapStateToProps, mapDispatchToProps)(ItemSearch)

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

