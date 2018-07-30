import React, { Component } from "react"
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Toolbar extends Component {

    render() {

        const { title, leftButtons, rightButtons } = this.props

        return (
            <View style={styles.container}>
                <View>
                    {leftButtons}
                </View>
                <View >
                    <Text style={styles.title}>{title ? title : "Title"}</Text>
                </View>
                <View >
                    {rightButtons}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonRight: {

    }

});