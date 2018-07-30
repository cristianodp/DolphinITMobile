import React,{Component} from "react"
import { FlatList, Text } from 'react-native';
import CustomerListItem from "./CustomerListItem";

export default class CustomerList extends Component{

    renderItem = ({item}) => <CustomerListItem item={item}/>

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


/*

style={{width: '100%'}}
                data={customers}
                keyExtractor={customers => customers._id}
                renderItem={this.renderItem}

                */