import React,{Component} from "react"
import { FlatList, RefreshControl } from 'react-native';
import ItemListItem from "./itemListItem";

export default class ItemList extends Component{

    renderItem = ({item}) => <ItemListItem item={item} onItemSelected={this.props.onItemSelected}/>

    render(){

        const {data,refreshing,handleRefresh} = this.props;

        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
                refreshControl={
                    <RefreshControl
                     refreshing={refreshing}
                     onRefresh={handleRefresh}
                    />
                  }
                
            />
        )
    }
}

