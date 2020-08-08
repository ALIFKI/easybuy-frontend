import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import { navigationRef } from './RootNav';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

export class Route extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <NavigationContainer  ref={navigationRef}>
            <Stack.Navigator>
                {
                    this.props.user.isLogin ? (
                        <>
                        </>
                    ) : (
                        <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}} />
                        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown : false}} />
                        </>
                    )
                }
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = state=>({
    user : state.auth 
})

export default connect(mapStateToProps)(Route)
