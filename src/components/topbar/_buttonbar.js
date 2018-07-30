import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Buttonbar extends Component {
    render() {

        const { hiden, iconName, color, onPress } = this.props

        if (hiden) {
            return null
        }

        return (

            <TouchableOpacity
                onPress={onPress}
                >
                <MaterialIcons
                    name={iconName ? iconName : "add"}
                    size={24}
                    color={color ? color : '#000f'}
                />
            </TouchableOpacity>

        )
    }
}
