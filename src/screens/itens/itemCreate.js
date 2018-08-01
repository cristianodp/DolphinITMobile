import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { connect } from 'react-redux';

import { addCustomer } from '../../store/customersReducer';
import Item from "../../http/model/item"
import config from "../../../config"


export class ItemCreate extends Component {
    static navigationOptions = {
        title: 'New Item',
    };

    constructor(props) {
        super(props);
        let c = new Item()
        c.ownerId = config._ownerId
        this.state = { customer: c };
    }

    handleSaveClick = async () => {
        const { customer } = this.state;
        await this.props.addCustomer(customer.toJson());
        this.props.navigation.goBack();
    }

    render() {
        const { customer } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        placeholder={"Name"}
                        keyboardType={"default"}
                        onChangeTextValue={(value) => {
                            const { customer } = this.state
                            customer.name = value
                            this.setState({ customer: customer });
                        }}
                        value={customer.name}
                    />

                </View>
                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        keyboardType={"default"}
                        placeholder={"Description"}
                        onChangeTextValue={(value) => {
                            const { customer } = this.state
                            customer.description = value
                            this.setState({ customer: customer });
                        }}
                        value={customer.description}
                    />

                </View>


                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        keyboardType={"email-address"}
                        placeholder={"E-mail"}
                        onChangeTextValue={(value) => {
                            const { customer } = this.state
                            customer.email = value
                            this.setState({ customer: customer });
                        }}
                        value={customer.email}
                    />

                </View>

                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        keyboardType={"phone-pad"}
                        placeholder={"Phone"}
                        onChangeTextValue={(value) => {
                            const { customer } = this.state
                            customer.phone = value
                            this.setState({ customer: customer });
                        }}
                        value={customer.phone}
                    />

                </View>

                <View style={{ marginTop: 16 }}>
                    <Button
                        onPress={this.handleSaveClick}
                        title="Salvar" />

                </View>



            </View>
        );
    }
}

const mapStateToProps = ({ customers }) => {
    return ({
      loading: customers.loading,
      newCustomer: customers.newCustomer,
    })
  }
  
  const mapDispatchToProps = { addCustomer }
  
export default connect(mapStateToProps, mapDispatchToProps)(CustomerCreate)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16
    },
    containerInput: {
        height: 55,
        borderStyle: "solid",
        borderColor: "#858584",
        borderBottomWidth: 0.5,
    }


});

