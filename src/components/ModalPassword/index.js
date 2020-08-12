import React, { Component } from 'react'
import { Text, View, Modal, Alert, Image, SectionList, TouchableHighlight,TouchableOpacity, TextInput } from 'react-native'
import style from './style'
import btn from '../../assets/image/btnnav.png'
import ItemList from '../ItemList'
import Button from '../ButtonComponent'


export default class ModalPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            color : null
        }
    }
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={this.props.onClose}
            >
                <View style={style.content}>
                    <View style={style.modal}>
                        <View style={style.main}>
                            <View style={style.header}>
                                <Image source={btn} />
                                <Text style={style.sortBy}>Password Change</Text>
                            </View>
                            <View style={style.boxShadow}>
                                <TextInput
                                    style={{
                                    width: '100%',
                                    height: 40,
                                    marginTop: 14,
                                    marginLeft: 14,
                                    }}
                                    placeholder="Old Password"
                                    onChangeText={(text) => this.props.onChangeTextOldPass(text)}
                                    value={this.state.password}
                                    secureTextEntry
                                />
                            </View>
                            <View style={style.boxShadow}>
                                <TextInput
                                    style={{
                                    width: '100%',
                                    height: 40,
                                    marginTop: 14,
                                    marginLeft: 14,
                                    }}
                                    placeholder="New Password"
                                    onChangeText={(text) => this.props.onChangeTextNewPass(text)}
                                    value={this.state.password}
                                    secureTextEntry
                                />
                            </View>
                            <View style={{
                                paddingTop : 20
                            }}>
                            <Button text={'SAVE PASSWORD'} onPress={this.props.onSave}/>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}
