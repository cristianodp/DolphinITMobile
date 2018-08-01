import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"


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
      <View style={styles.container}>

        <View style={{backgroundColor:"green",...styles.row}} >
          <Text style={styles.text}> Itens OK </Text>
          <Text style={styles.text}> 10 </Text>
        </View>

        <View style={{backgroundColor:"yellow",...styles.row}} >
          <Text style={styles.text}> Itens Warning </Text>
          <Text style={styles.text}> 10 </Text>
        </View>

        <View style={{backgroundColor:"red",...styles.row}} >
          <Text style={styles.text}> Itens Error </Text>
          <Text style={styles.text}> 10 </Text>
        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  row: {
   width:130,
   height:130,
   margin:16,
   paddingTop:45,
   alignSelf:"stretch",
  
    borderRadius:100,
  },
  text: {
    textAlign:"center"
   }


});

