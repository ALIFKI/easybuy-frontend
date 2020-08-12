import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

export default class ItemList extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            color : null
        }
    }
    render() {
        return (
            <TouchableHighlight 
            underlayColor={'#273AC7'}
            onPress={()=>{this.props.sort(this.props.item)}}
            onPressIn={()=>{this.setState({color : 'white'})}}
            onPressOut={()=>{this.setState({color : null})}}
            style={style.list}
            >
                <View>
                <Text style={[style.item,{color : this.state.color || 'black'}]}> {this.props.item.name} </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const style = StyleSheet.create({
    listSort: {
        marginLeft : -16,
        marginRight : -16,
    },
    list : {
        minHeight : 48,
        padding : 16,
        justifyContent : 'center',
    },
    item : {
        fontFamily : 'Metropolis-Regular',
        fontSize : 16,
    }
})