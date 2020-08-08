import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {API_URL} from '@env'
import { connect } from 'react-redux'
export class LoginScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text> LoginScreen </Text>
                <Button title={"hello"} onPress={()=>{this.props.navigation.navigate('Register')}}></Button>
            </View>
        )
    }
}

const mapStateToProps = state=>({
    user : state.auth
})

export default connect(mapStateToProps)(LoginScreen)
