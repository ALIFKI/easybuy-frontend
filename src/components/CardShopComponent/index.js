import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import image from '../../assets/image/banner.png'
import StartComponet from '../../components/StarComponent'
import style from './style'
class CardShop extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <View style={style.cardProduct}>
                    <Image source={image} style={style.image}/>
                    <View style={style.detail}>
                        <Text style={style.type}>
                            Pull Over
                        </Text>
                        <Text style={style.model}>
                            Manggo
                        </Text>
                        <StartComponet/>
                        <Text style={style.price}>
                            5$
                        </Text>
                    </View>
                </View>
        )
    }
}

export default CardShop
