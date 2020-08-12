import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import logo from '../../assets/image/big.png'
import style from './style'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={style.content}>
                {/* <Text style={style.logo}> Logo </Text> */}
                <Image source={logo} style={{height : 90,width : 90}} />
            </View>
        )
    }
}
