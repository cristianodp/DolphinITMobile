import React, { Component } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ButtonIcon extends Component {
    render() {

        const { hiden, iconName, color, onPress } = this.props

        if (hiden) {
            return null
        }

        return (
            <View {...styles.button}>
                <TouchableOpacity 
                    onPress={onPress}>
                    <MaterialIcons
                        name={iconName ? iconName : "add"}
                        size={24}
                        color={color ? color : '#000f'}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 8,
        paddingRight: 8,
    },
})