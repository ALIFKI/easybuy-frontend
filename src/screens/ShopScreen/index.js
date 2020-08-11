import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import style from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
import HeaderTitleComponents from '../../components/HeaderTitleComponents'
import { TouchableOpacity } from 'react-native-gesture-handler'
import image from '../../assets/image/banner.png'
import StartComponet from '../../components/StarComponent'
import CardShop from '../../components/CardShopComponent'
import ModalSort from '../../components/ModalSort'
import FilterBtn from '../../components/FilterBtn'

class ShopScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            ModalSort : false
        }
    }
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
                        <FilterBtn text={'Filter'} icon={'filter-outline'}/>
                        <FilterBtn text={'Price : Low To Hight'} icon={'swap-vertical-outline'} onPress={()=>{this.setState({ModalSort:true})}}/>
                        <FilterBtn text={''} icon={'filter-outline'}/>
                    </View>
                </View>
                <View style={style.mainContent} >
                    <CardShop></CardShop>
                </View>
                {/* Components */}
                <ModalSort visible={this.state.ModalSort} onClose={()=>{this.setState({
                    ModalSort : false
                })}}/>
            </ScrollView>
        )
    }
}

export default ShopScreen
