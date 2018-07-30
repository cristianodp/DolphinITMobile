import React, { Component } from "react"
import { View, Text } from "react-native"

import Topbar from "../../components/topbar"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View>
        <Topbar title="Home" />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
