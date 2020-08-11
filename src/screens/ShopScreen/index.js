import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import style from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
import HeaderTitleComponents from '../../components/HeaderTitleComponents'
import { TouchableOpacity } from 'react-native-gesture-handler'
import image from '../../assets/image/banner.png'
import StartComponet from '../../components/StarComponent'
import CardShop from '../../components/CardShopComponent'

class ShopScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={style.header}>
                    <View style={style.topNav}>
                        <IonIcon name={'chevron-back-outline'} size={25}/>
                        <IonIcon name={'search-outline'} size={25}/>
                    </View>
                    <HeaderTitleComponents title={'Women Top'}/>
                    <View style={style.filter}>
                        <TouchableOpacity style={style.action}>
                            <IonIcon name={'filter-outline'} size={25}/>
                            <Text style={{marginLeft : 10}}>Filter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.action}>
                            <IonIcon name={'swap-vertical-outline'} size={25}/>
                            <Text style={{marginLeft : 10}}>Price : Low To Hight</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.action}>
                            <IonIcon name={'filter-outline'} size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.mainContent} >
                    <CardShop></CardShop>
                </View>
            </ScrollView>
        )
    }
}

export default ShopScreen
