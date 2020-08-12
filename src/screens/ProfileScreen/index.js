import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <ScrollView style={style.container}>
          <Text style={style.textHeader}>My Profile</Text>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image
              style={{borderRadius: 100, width: 70, height: 70}}
              source={require('../../image/avatar.png')}
            />
            <View style={{marginLeft: 12}}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Mainda Brow
              </Text>
              <Text style={{color: 'gray'}}>MelindaBrow@gmail.com</Text>
              <Text></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 40, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>My Orders</Text>
              <Text style={{color: 'gray', marginTop: 7}}>
                AlReady have 12 Orders
              </Text>
            </View>
            <Icon
              name="angle-right"
              size={28}
              style={{marginLeft: 'auto', marginTop: 8}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 40, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Shipping Address
              </Text>
              <Text style={{color: 'gray', marginTop: 7}}>3 ddresses</Text>
            </View>
            <Icon
              name="angle-right"
              size={28}
              style={{marginLeft: 'auto', marginTop: 8}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 40, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Seetings</Text>
              <Text style={{color: 'gray', marginTop: 7}}>
                Notofication and Password
              </Text>
            </View>
            <Icon
              name="angle-right"
              size={28}
              style={{marginLeft: 'auto', marginTop: 8}}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;
