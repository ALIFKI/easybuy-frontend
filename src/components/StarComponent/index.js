import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import style from './style'

export class StartComponet extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const star = [1,2,3,4,5]
        return (
            <View style={style.content}>
                {
                    star.map((row,index)=>{
                        return <IonIcon key={index} name={"star-outline"} size={12} color={'#9B9B9B'}/> 
                    })
                }
                <Text style={style.count}>
                    ({
                        star.length
                    })
                </Text>
            </View>
        )
    }
}

export default StartComponet
