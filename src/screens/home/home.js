import React, { Component } from "react"
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native"
import { connect } from 'react-redux';

import { loadItensExpiredCount, loadItensNormalCount, loadItensWarningCount } from '../../store/itensReducer';

const boxHeight = Dimensions.get('window') / 2;

export class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.loadItensExpiredCount();
    this.props.loadItensNormalCount();
    this.props.loadItensWarningCount();
  }

  render() {
    const { itensNormalCount, itensWarningCount, itensExpiredCount } = this.props
    console.log(itensNormalCount, itensWarningCount, itensExpiredCount )
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: "100%", height: 200, }}
            resizeMode="contain"
            source={require('../../resources/banner.png')}>

          </Image>
        </View>
        <View style={styles.panelContainer}>
          <View style={[styles.panel, styles.panel1]}>
            <TouchableOpacity style={{ width: "100%", height: "100%" }}
            onPress={()=>{
              const { navigate } = this.props.navigation;
              navigate('ItemSearch', { typeList:"itensNormal"
                 , typeSource:"loadItensNormal"  })
            }}>
              <Text style={styles.title}>Regular</Text>
              <Text style={styles.value}>{itensNormalCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.panel, styles.panel2]}>
            <TouchableOpacity style={{ width: "100%", height: "100%" }}
            onPress={()=>{
              const { navigate } = this.props.navigation;
              navigate('ItemSearch', { typeList:"itensWarning"
                 , typeSource:"loadItensWarning"  })
            }}
            >
              <Text style={styles.title}>Warning</Text>
              <Text style={styles.value}>{itensWarningCount}</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={[styles.panel, styles.panel2]}>
          <TouchableOpacity style={{ width: "100%", height: "100%" }}
            onPress={()=>{
              const { navigate } = this.props.navigation;
              navigate('ItemSearch', { typeList:"itensExpired"
                 , typeSource:"loadItensExpired"  })
            }}
          >
            <Text style={styles.title}>Expired</Text>
            <Text style={styles.value}>{itensExpiredCount}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = ({ itens }) => {
  return ({
    itensNormalCount: itens.itensNormalCount,
    itensWarningCount: itens.itensWarningCount,
    itensExpiredCount: itens.itensExpiredCount,
  })
}

const mapDispatchToProps = { loadItensExpiredCount, loadItensNormalCount, loadItensWarningCount }

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,

  },
  panelContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  panel: {

    height: boxHeight,
    borderWidth: .5,

    textAlign: "center",

  },
  panel1: {

    flex: 1,


  },
  panel2: {

    flex: 1,


  },
  title: {
    textAlign: "center",
    margin: 16,
  },
  value: {
    textAlign: "center",
    margin: 16,
    fontSize: 30,
  }


});

