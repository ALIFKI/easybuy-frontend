import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import image from '../../assets/image/banner.png'
import StartComponet from '../../components/StarComponent'
import style from './style'
import {API_URL} from '@env'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as RootNavigation from '../../routes/RootNav';

class CardShop extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let maxlimit = 17
        return (
                <TouchableOpacity
                onPress={()=>{ RootNavigation.navigate('Product', this.props.data);}} style={style.cardProduct}>
                    <Image source={{uri: API_URL + 'img/' + this.props.data.image}} style={style.image}/>
                    <View style={style.detail}>
                        <Text style={[style.type,{maxWidth : '70%'}]}>
                        {this.props.data.name.length > maxlimit
                        ? this.props.data.name.substring(0, maxlimit - 3) + '...'
                        : this.props.data.name}
                        </Text>
                        <Text style={style.model}>
                        {this.props.data.brand.length > maxlimit
                        ? this.props.data.brand.substring(0, maxlimit - 3) + '...'
                        : this.props.data.brand}
                        </Text>
                        <StartComponet star={this.props.data.rating}/>
                        <Text style={style.price}>
                            {this.props.data.price}$
                        </Text>
                    </View>
                </TouchableOpacity>
        )
    }
}

export default CardShop
