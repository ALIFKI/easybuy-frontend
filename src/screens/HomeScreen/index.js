import React, { Component } from 'react'
import { Text, View, Image, FlatList, ScrollView,TouchableOpacity } from 'react-native'
import style from './style'
import image from '../../assets/image/banner.png'
import {Card} from 'galio-framework'
import ProductWrapper from '../../components/ProductWrapper'
import HeaderTitleComponents from '../../components/HeaderTitleComponents'


class HomeScreen extends Component {
    constructor(){
        super()
        this.state = {
            data : [
                {
                    imageUrl : "https://images-na.ssl-images-amazon.com/images/I/51gHME-uBsL._AC_.jpg",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://upload.wikimedia.org/wikipedia/en/c/c6/On_Stranger_Tides_Poster.jpg",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1590471773/ymv145q4thcorvgt0i5u.jpg",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
            ]
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={style.bannerContent}>
                    <Image source={image}/>
                    <Text style={[style.title]}>Street Clothes</Text>
                </View>
                <View style={style.content}>
                    <HeaderTitleComponents 
                        title={'New'} 
                        subtitle={"you've never seen it before"} 
                        actionTitle={'View all'} 
                        actionPress={()=>{console.log('e')}}/>
                    <ProductWrapper data={this.state.data}/>
                    <HeaderTitleComponents 
                        title={'Popular'} 
                        subtitle={"you've never seen it before"} 
                        actionTitle={'View all'} 
                        actionPress={()=>{console.log('e')}}/>
                    <ProductWrapper data={this.state.data}/>
                </View>
            </ScrollView>
        )
    }
}

export default HomeScreen
