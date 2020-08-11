import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import style from './style'
import { ScrollView,  } from 'react-native-gesture-handler'
import image from '../../assets/image/banner2.png'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Button from '../../components/ButtonComponent'

class ProductScreen extends Component {
    render() {
        return (
            <>
            <ScrollView>
                <View style={style.bannerContent}>
                    <Image source={image} style={style.image}/>
                </View>
                <View style={style.content}>
                    <View style={style.header}>
                        <View style={style.color}>
                            <Text style={style.textColor}>Color</Text>
                            <View style={style.colorControl}>
                                <TouchableOpacity
                                style={[style.colorPick,{backgroundColor: '#4290D8'}]}
                                >
                                    <View style={style.selected}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={[style.colorPick,{backgroundColor: '#1A1A1A'}]}
                                >
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.size}>
                            <Text style={style.textSize}>Size</Text>
                            <View style={style.sizeControl}>
                                <TouchableOpacity
                                    style={style.plusBtn}
                                >
                                    <IonIcon name={'remove-outline'} size={24}/>
                                </TouchableOpacity>
                                <TextInput style={{width:40,textAlign :'center'}} value="20">
                                </TextInput>
                                <TouchableOpacity
                                    style={style.plusBtn}
                                >
                                    <IonIcon name={'add-outline'} size={24}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={style.detail}>
                        <View style={style.detailTop}>
                            <View>
                                <Text style={style.merk}>H&M</Text>
                                <Text style={style.type}>Short black dress</Text>
                            </View>
                            <Text style={style.detailPrice}>
                                $990
                            </Text>
                        </View>
                        <View>
                            <Text style={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam earum voluptatibus repellat nostrum esse dicta, quasi distinctio harum placeat incidunt ab modi molestias veniam hic ullam. Impedit, quasi fugiat.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={style.bottomContent}>
                <Button text={'ADD TO CART'} onPress={()=>{console.log('press')}}/>
            </View>
            </>
        )
    }
}

export default ProductScreen
