import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'
import style from './style'
import SizeRound from '../../components/SizeRound'
import Button from '../../components/ButtonComponent'
export default class FilterScreen extends Component {
    render() {
        return (
            <>
            <ScrollView>
                <View style={style.content}>
                <View style={style.color}>
                    <Text style={style.TextColor}> Colors </Text>
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
                        <TouchableOpacity
                        style={[style.colorPick,{backgroundColor: '#B82222'}]}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.colorPick,{backgroundColor: '#151867'}]}
                        >
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.color}>
                    <Text style={style.TextColor}> Size </Text>
                    <View style={style.SizeControl}>
                        <SizeRound size={'XS'}/>
                        <SizeRound size={'XL'}/>
                        <SizeRound size={'L'}/>
                    </View>
                </View>
                <View style={style.color}>
                    <Text style={style.TextColor}> Category </Text>
                    <View style={style.SizeControl}>
                        <SizeRound size={'All'} style={{padding : 10}}/>
                        <SizeRound size={'Women'} style={{padding : 10}}/>
                        <SizeRound size={'Man'} style={{padding : 10}}/>
                    </View>
                </View>
                </View>
            </ScrollView>
            <View style={style.bottomContent}>
                <View style={style.half}>
                <Button text={'Discard'} onPress={()=>{console.log('press')}} outline={true}/>
                </View>
                <View style={style.half}>
                <Button text={'Apply'} onPress={()=>{this.props.navigation.goBack()}}/>
                </View>
            </View>
            </>
        )
    }
}
