import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ItemListItem extends Component {

    render() {
        const { item,onItemSelected } = this.props;
        if (item === undefined) return null
        return (

            <View style={styles.container}>
                <TouchableOpacity
                        onPress={ () => {
                            if (onItemSelected) onItemSelected(item) 
                        }
                    }>
                    <View style={styles.itemContainer}>
                        <View >
                            <Text>{item.title}</Text>
                            <Text>{item.subtitle}</Text>
                            <Text>{item.detail}</Text>
                        </View>
                        
                        <View style={styles.arrow} >
                            <MaterialIcons
                                name={"chevron-right"}
                                size={34}
                                color={'#000f'}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "#858584",
       
    },
    itemContainer:{
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    arrow: {
        position: 'absolute',
        right: 0,
        top: "30%",

    }
});
