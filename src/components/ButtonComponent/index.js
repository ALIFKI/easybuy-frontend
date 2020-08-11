import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class Button extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            {
                this.props.outline ? (
                    <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{
                    display : 'flex',
                    flexDirection : 'column',
                    justifyContent : 'center',
                    alignItems : 'center',
                    backgroundColor: '#fff',
                    borderWidth : 1,
                    height: 45,
                    width: '100%',
                    borderRadius: 100,
                    // marginTop: 20,
                    }}>
                        <Text style={{textAlign: 'center',color: 'black',
                    paddingLeft : 30,paddingRight : 30}}>
                           { this.props.text }
                        </Text>
                </TouchableOpacity>
                ): (
                    <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{
                    display : 'flex',
                    flexDirection : 'column',
                    justifyContent : 'center',
                    alignItems : 'center',
                    backgroundColor: '#273AC7',
                    height: 45,
                    width: '100%',
                    borderRadius: 100,
                    // marginTop: 20,
                    }}>
                        <Text style={{textAlign: 'center',color: 'white',
                    paddingLeft : 30,paddingRight : 30}}>
                           { this.props.text }
                        </Text>
                </TouchableOpacity>
                )
            }
            </>
        )
    }
}

export default Button
