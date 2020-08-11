import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'

export default class FilterBtn extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style={style.action}
            onPress={this.props.onPress}>
                    <IonIcon name={this.props.icon} size={25}/>
                    {
                        this.props.text !== ''? (<Text style={{marginLeft : 10}}> {this.props.text} </Text>
                            ): (
                                <></>
                            )
                    }
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    action : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : 'center'
    },
})
