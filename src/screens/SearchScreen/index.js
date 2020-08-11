import React, { Component } from 'react'
import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Input} from 'galio-framework'
import IonIcon from 'react-native-vector-icons/Ionicons'
import style from './style'
import HeaderTitleComponents from '../../components/HeaderTitleComponents'


export class SearchScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            search : ''
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={style.header}>
                    <View style={style.topNav}>
                        <IonIcon name={'chevron-back-outline'} size={25} style={{marginRight : 20}}/>
                        <TouchableOpacity
                        style={{flex : 1}}
                        onPress={()=>{this.props.navigation.navigate('Search')}}>
                            <Input placeholder="Search" rounded borderless={true} style={style.searchInput} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({search : text})}
                            icon="search"
                            family="fontawesome"
                            left
                            iconSize={24}
                            iconColor="#D4D7DE"/>
                        </TouchableOpacity>
                    </View>
                    <View style={style.mainContent}>
                        <Text style={style.popular}>Popular Search</Text>
                        <View style={style.tooltip}>
                            <View style={style.badge}>
                                <Text style={style.badgeTxt}>Badge</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
