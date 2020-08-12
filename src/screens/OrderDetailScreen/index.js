import React, { Component } from 'react'
import { View, Text, ScrollView,Image } from 'react-native'
import { connect } from 'react-redux'
import image from '../../assets/image/banner.png'
import style from './style'
import Button from '../../components/ButtonComponent'

class OrderDetailScreen extends Component {

    render() {
        return (
            <>
            <ScrollView>
                <View style={style.content}>
                <View style={style.header}>
                    <View style={style.list}>
                    <Text style={style.text}>Order No N134993120</Text>
                    <Text style={style.accent}>
                        05-12-2019
                    </Text>
                    </View>
                    <View style={style.list}>
                    <Text style={style.accent}>Tracking No <Text style={style.text}>WL128831L9310</Text></Text>
                    <Text style={style.status}>
                       Delivered
                    </Text>
                    </View>
                </View>
                <View style={style.sp}>
                    <Text>Items 3</Text>
                </View>
                <View style={style.listOrder}>
                    {/* Repate */}
                    <View style={style.cardProduct}>
                        <Image source={image} style={style.image}/>
                        <View style={style.detail}>
                            <Text style={style.type}>
                                Pull Over
                            </Text>
                            <Text style={style.model}>
                                Manggo
                            </Text>
                            <View style={style.list}>
                                <View style={style.sizeColor}>
                                    <Text style={style.model}>
                                        Color : 
                                    </Text>
                                    <Text style={style.font}>
                                        Gray
                                    </Text>
                                </View>
                                <View style={style.sizeColor}>
                                    <Text style={style.model}>
                                        Size : 
                                    </Text>
                                    <Text style={style.font}>
                                        XL
                                    </Text>
                                </View>
                            </View>
                            <View style={style.list}>
                                <View style={style.sizeColor}>
                                    <Text style={style.model}>
                                        Units : 
                                    </Text>
                                    <Text style={style.font}>
                                        1
                                    </Text>
                                </View>
                            <Text style={style.price}>
                                5$
                            </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={style.sp}>
                    <Text>Order Information</Text>
                </View>
                <View style={{paddingTop : 20}}>
                    <View style={style.list}>
                        <Text style={[style.accent,{fontSize : 14}]}>Shipping Address :</Text>
                        <Text style={style.text}>
                        3 Newbridge Court ,Chino Hills, 
                            CA 91709, United States
                        </Text>
                    </View>
                    <View style={style.list}>
                        <Text style={[style.accent,{fontSize : 14}]}>Payment Method :</Text>
                        <Text style={style.text}>
                            Payment Met
                        </Text>
                    </View>
                    <View style={style.list}>
                        <Text style={[style.accent,{fontSize : 14}]}>Delivery Order :</Text>
                        <Text style={[style.text,{textAlign : 'left'}]}>
                            FedEx, 3 days, 15$
                        </Text>
                    </View>
                    <View style={style.list}>
                        <Text style={[style.accent,{fontSize : 14}]}>Total Amount :</Text>
                        <Text style={style.text}>
                           $900
                        </Text>
                    </View>
                </View>
                </View>
            </ScrollView>
                <View style={style.bottomContent}>
                    <View style={style.half}>
                    <Button text={'Reorder'} onPress={()=>{console.log('press')}} outline={true}/>
                    </View>
                    <View style={style.half}>
                    <Button text={'Leave Feedback'} onPress={()=>{this.props.navigation.goBack()}}/>
                    </View>
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailScreen)
