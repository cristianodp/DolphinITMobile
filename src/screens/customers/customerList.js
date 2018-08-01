import React,{Component} from "react"
import { FlatList, Text } from 'react-native';
import CustomerListItem from "./customerListItem";

export default class CustomerList extends Component{

    renderItem = ({item}) => <CustomerListItem item={item} onItemSelected={this.props.onItemSelected}/>

    render(){

        const {customers} = this.props;

        return (
            <FlatList
                data={customers}
                renderItem={this.renderItem}
                
            />
        )
    }
}

