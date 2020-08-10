import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
export class HeaderTitleComponents extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={style.headerTitle} >
                <View style={style.titleView}>
                    <Text style={style.new}>
                        {this.props.title}
                    </Text>
                    <Text style={style.subtitle}>
                        {this.props.subtitle}
                    </Text>      
                </View>
                <TouchableOpacity
                onPress={
                    this.props.actionPress
                }
                    >
                <Text style={style.viewAll}>
                    {this.props.actionTitle}
                </Text>
                </TouchableOpacity> 
            </View>
        )
    }
}

export default HeaderTitleComponents
