import React, { Component } from 'react'
import { Text, View, ScrollView,TouchableOpacity } from 'react-native'
import style from './style'
import SizeRound from '../../components/SizeRound'
import Button from '../../components/ButtonComponent'
export default class FilterScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            color : '',
            size : '',
            category : '',
        }
    }
    _handleSize = ()=>(data)=>{
        console.log(this.state.size)
        if(this.state.size == ''){
            this.setState({
                size : data
            })
        }else{
            this.setState({
                size : this.state.size + '|'+ data
            })
        }
    }
    _handleCategory = ()=>(data)=>{
        console.log(this.state.category)
        if(this.state.size == ''){
            this.setState({
                category : data
            })
        }else{
            if(data == ''){
                this.setState({
                    category : ''
                })
            }
            else{
                this.setState({
                    category : this.state.size + '|'+ data
                })
            }

        }
    }
    _handleColor = (data)=>{
       this.setState({
           color : data
       })
    }
    render() {
        return (
            <>
            <ScrollView>
                <View style={style.content}>
                <View style={style.color}>
                    <Text style={style.TextColor}> Colors </Text>
                    <View style={style.colorControl}>
                        <TouchableOpacity
                        onPress={()=>{this._handleColor('blue')}}
                        style={[style.colorPick,{backgroundColor: 'blue'}]}
                        >
                            <View style={style.selected}>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.colorPick,{backgroundColor: 'red'}]}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.colorPick,{backgroundColor: 'yellow'}]}
                        >
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[style.colorPick,{backgroundColor: 'black'}]}
                        >
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.color}>
                    <Text style={style.TextColor}> Size </Text>
                    <View style={style.SizeControl}>
                        <SizeRound size={'XS'} onChange={this._handleSize()}/>
                        <SizeRound size={'XL'} onChange={this._handleSize()}/>
                        <SizeRound size={'L'} onChange={this._handleSize()}/>
                    </View>
                </View>
                <View style={style.color}>
                    <Text style={style.TextColor}> Category </Text>
                    <View style={style.SizeControl}>
                        <SizeRound cat={'All'} style={{padding : 10}} onChange={this._handleCategory()}/>
                        <SizeRound cat={'Women'} style={{padding : 10}} onChange={this._handleCategory()}/>
                        <SizeRound cat={'Man'} style={{padding : 10}} onChange={this._handleCategory()}/>
                    </View>
                </View>
                </View>
            </ScrollView>
            <View style={style.bottomContent}>
                <View style={style.half}>
                <Button text={'Discard'} onPress={()=>{console.log('press')}} outline={true}/>
                </View>
                <View style={style.half}>
                <Button text={'Apply'} onPress={()=>{this.props.navigation.navigate('All',{data : this.state})}}/>
                </View>
            </View>
            </>
        )
    }
}
