import React,{Component} from "react"
import { FlatList, Text } from 'react-native';
import ItemListItem from "./itemListItem";

export default class ItemList extends Component{

    renderItem = ({item}) => <ItemListItem item={item} onItemSelected={this.props.onItemSelected}/>

    render(){

        const {data} = this.props;

        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
                
            />
        )
    }
}

