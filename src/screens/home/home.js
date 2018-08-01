import React, { Component } from "react"
import { View, Text } from "react-native"


export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View>

        <Text> Home </Text>
      </View>
    );
  }
}
