import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class Button extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                backgroundColor: '#273AC7',
                height: 45,
                width: '100%',
                borderRadius: 100,
                marginTop: 20,
                }}>
                    <Text style={{textAlign: 'center', marginTop: 14, color: 'white'}}>
                       { this.props.text }
                    </Text>
            </TouchableOpacity>
            </>
        )
    }
}

export default Button
