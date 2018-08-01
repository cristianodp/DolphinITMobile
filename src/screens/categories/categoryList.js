import React,{Component} from "react"
import { FlatList, Text } from 'react-native';
import CategoryListItem from "./categoryListItem";

export default class CategoryList extends Component{

    renderItem = ({item}) => <CategoryListItem item={item} onItemSelected={this.props.onItemSelected}/>

    render(){

        const {categories} = this.props;

        return (
            <FlatList
                data={categories}
                renderItem={this.renderItem}
                
            />
        )
    }
}

