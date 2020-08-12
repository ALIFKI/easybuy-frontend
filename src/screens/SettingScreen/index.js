import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import style from './style'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderTitleComponents from '../../components/HeaderTitleComponents'
import IonIcon from 'react-native-vector-icons/Ionicons'
import ModalPassword from '../../components/ModalPassword'
export default class SettingScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            birthday : '',
            password : '12321321',
            oldPassword : '',
            newPassword : '',
            visible : false
        }
    }
    _ontext = ()=>(text)=>{
        console.log(text)
        this.setState({
            oldPassword : text
        })
    }
    _onNew = ()=>(text)=>{
        console.log(text)
        this.setState({
            newPassword : text
        })
    }
    _onSave = ()=>{
        console.log(this.state)
    }
    render() {
        return (
            <ScrollView>
                <View style={style.header}>
                    <View style={style.topNav}>
                        <IonIcon name={'chevron-back-outline'} size={25}/>
                        <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate('Search')}}>
                            <IonIcon name={'search-outline'} size={25}/>
                        </TouchableOpacity>
                    </View>
                    <HeaderTitleComponents title={'Settings'}/>
                </View>
                <View style={style.content}>
                    <Text style={style.text}>Personal Information</Text>
                    <View style={style.boxShadow}>
                        <TextInput
                            style={{
                            width: '100%',
                            height: 40,
                            marginTop: 14,
                            marginLeft: 14,
                            }}
                            placeholder="Fullname"
                            onChangeText={(text) => this.setState({name: text})}
                            value={this.state.name}
                        />
                    </View>
                    <View style={style.boxShadow}>
                        <TextInput
                            style={{
                            width: '100%',
                            height: 40,
                            marginTop: 14,
                            marginLeft: 14,
                            }}
                            placeholder="BirthDay"
                            onChangeText={(text) => this.setState({birthday: text})}
                            value={this.state.birthday}
                        />
                    </View>
                    <View style={style.sp}>
                    <Text style={style.text}>Password</Text><Text style={style.change} onPress={()=>{
                        this.setState({
                            visible : true
                        })
                    }}>Change</Text>
                    </View>
                    <View style={style.boxShadow}>
                        <TextInput
                            style={{
                            width: '100%',
                            height: 40,
                            marginTop: 14,
                            marginLeft: 14,
                            }}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                            secureTextEntry
                        />
                    </View>
                    <View style={style.sp}>
                    <Text style={style.text}>Notification</Text><Text style={style.change}></Text>
                    </View>
                </View>
                <ModalPassword visible={this.state.visible} onClose={()=>{this.setState({visible : false})}} 
                onChangeTextOldPass={this._ontext()}
                onChangeTextNewPass={this._onNew()}
                onSave={this._onSave}
                />
            </ScrollView>
        )
    }
}
