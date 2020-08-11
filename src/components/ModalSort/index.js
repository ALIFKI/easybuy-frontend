import React, { Component } from 'react'
import { Text, View, Modal, Alert, Image, SectionList, TouchableHighlight,TouchableOpacity } from 'react-native'
import style from './style'
import btn from '../../assets/image/btnnav.png'
import ItemList from '../ItemList'
export default class ModalSort extends Component {
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
                                <Text style={style.sortBy}>Sort By</Text>
                            </View>
                        </View>
                        <SectionList
                        style={style.listSort}
                            sections={[
                                {data: [
                                    {name : 'Popular',value : '1'},
                                    {name : 'News',value : '2'},]},
                            ]}
                            renderItem={({item}) => 
                            <ItemList item={item}/>
                                }
                            keyExtractor={(item, index) => index}
                            />
                    </View>
                </View>
            </Modal>
        )
    }
}
