import React, { Component } from 'react'
import { Text, View, TouchableHighlight, TouchableHighlightBase } from 'react-native'
import style from './style'
export default class SizeRound extends Component {
    constructor(props){
        super(props)
        this.state = {
            bgColor : null,
            border : null,
            textColor : null
        }
    }
    _onPress = ()=>{
        if(this.state.bgColor == null){
            this.setState({
                bgColor : '#273AC7',
                border : 0,
                textColor : 'white'
            })
        }
        else{
            this.setState({
                bgColor : null,
                border : null,
                textColor  : null
            })
        }
    }
    render() {
        return (
            <TouchableHighlight
            onPress={this._onPress}
            style={[style.content,{backgroundColor : this.state.bgColor || 'white', borderWidth : this.state.border || 0.5,},this.props.style]}
            >
                <Text style={{fontFamily : 'Metropolis-Medium',color : this.state.textColor || 'black'}}> {this.props.size} </Text>
            </TouchableHighlight>
        )
    }
}
