import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { connect } from 'react-redux';

import { addItem } from '../../store/itensReducer';
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
        c.customerId =  this.props.navigation.getParam("customerId")
        c.categoryId =  this.props.navigation.getParam("categoryId")
        this.state = { item: c };
    }

    handleSaveClick = async () => {
        const { item } = this.state;
        await this.props.addItem(item.toJson());
        this.props.navigation.goBack();
    }

    render() {
        const { item } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        placeholder={"Code"}
                        keyboardType={"default"}
                        onChangeTextValue={(value) => {
                            const { item } = this.state
                            item.code = value
                            this.setState({ item: item });
                        }}
                        value={item.code}
                    />
                </View>
                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        placeholder={"title"}
                        keyboardType={"default"}
                        onChangeTextValue={(value) => {
                            const { item } = this.state
                            item.title = value
                            this.setState({ item: item });
                        }}
                        value={item.title}
                    />
                </View>

                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        placeholder={"Subtitle"}
                        keyboardType={"default"}
                        onChangeTextValue={(value) => {
                            const { item } = this.state
                            item.subtitle = value
                            this.setState({ item: item });
                        }}
                        value={item.subtitle}
                    />
                </View>


                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        placeholder={"Detail"}
                        keyboardType={"default"}
                        onChangeTextValue={(value) => {
                            const { item } = this.state
                            item.detail = value
                            this.setState({ item: item });
                        }}
                        value={item.detail}
                    />
                </View>


                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        placeholder={"Due Date"}
                        keyboardType={"default"}
                        onChangeTextValue={(value) => {
                            const { item } = this.state
                            item.dueDate = value
                            this.setState({ item: item });
                        }}
                        value={item.dueDate}
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

const mapStateToProps = ({ itens }) => {
    return ({
        loading: itens.loading,
        newItem: itens.newItem,
    })
}

const mapDispatchToProps = { addItem }

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreate)

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

