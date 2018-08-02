import React, { Component } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { connect } from 'react-redux';

import { addItem } from '../../store/itensReducer';
import Item from "../../http/model/item"
import config from "../../../config"
import DateTimePicker from 'react-native-modal-datetime-picker';



export class ItemCreate extends Component {
    static navigationOptions = {
        title: 'New Item',
    };

    constructor(props) {
        super(props);
        let c = new Item()
        c.ownerId = config._ownerId
        c.customerId = this.props.navigation.getParam("customerId")
        c.categoryId = this.props.navigation.getParam("categoryId")
        this.state = { item: c, isDateTimePickerVisible: false };
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
                <View style={{

                    flexDirection: 'row'
                }}>
                    <View style={[styles.containerInput, { flex: 1, }]}>
                        <FloatLabelTextInput
                            placeholder={"Code"}
                            keyboardType={"default"}
                            maxLength={5}
                            onChangeTextValue={(value) => {
                                const { item } = this.state
                                item.code = value
                                this.setState({ item: item });
                            }}
                            value={item.code}
                        />
                    </View>
                    <View style={[styles.containerInput,
                    {
                        flex: 4,
                        borderLeftWidth: 1,
                        paddingLeft: 8,
                    }]}>
                        <FloatLabelTextInput
                            placeholder={"title"}
                            keyboardType={"default"}
                            maxLength={30}
                            onChangeTextValue={(value) => {
                                const { item } = this.state
                                item.title = value
                                this.setState({ item: item });
                            }}
                            value={item.title}
                        />
                    </View>
                </View>
                <View style={styles.containerInput}>
                    <FloatLabelTextInput
                        placeholder={"Subtitle"}
                        keyboardType={"default"}
                        maxLength={30}
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
                        placeholder={"Due Date"}
                        onFocus={() => {
                            this.setState({ isDateTimePickerVisible: true })
                        }}
                        onChangeTextValue={(value) => {
                            const { item } = this.state
                            this.setState({ item: item });
                        }}
                        value={item.dueDate ? item.dueDate.toISOString().substr(0, 10) : ""}
                    />
                    <TouchableOpacity onPress={() => {
                        this.setState({ isDateTimePickerVisible: true })
                    }}>
                    </TouchableOpacity>
                </View>


                <View style={[styles.containerInput, {
                    height: 200,
                }]}>
                    <Text style={
                        {
                            fontSize: item.detail ? 10 : 12,
                            marginTop: 8,
                            
                            fontWeight: item.detail ? "bold" : "normal",
                            color: item.detail ? "#3E93FE" : "#D1D1D5",
                        }
                    }>Detail</Text>
                    <TextInput
                        keyboardType={"default"}
                        multiline={true}
                        numberOfLines={4}
                        maxLength={500}
                        textValueAlignVertical={'top'}
                        onChangeTextValue={(value) => {
                            const { item } = this.state
                            item.detail = value
                            this.setState({ item: item });
                        }}
                        value={item.detail}
                    />
                </View>




                <View style={{ marginTop: 16 }}>
                    <Button
                        onPress={this.handleSaveClick}
                        title="Salvar" />

                </View>


                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={(value) => {

                        const { item } = this.state
                        item.dueDate = value
                        this.setState({ item: item, isDateTimePickerVisible: false });
                    }}
                    onCancel={() => {
                        this.setState({ isDateTimePickerVisible: false })
                    }}
                />

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

