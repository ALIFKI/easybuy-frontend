import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
class MyOrders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <ScrollView style={style.container}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>My Orders</Text>
          <View style={style.Card}>
            <View style={{marginLeft: 13}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginTop: 12,
                  fontSize: 17,
                }}>
                Order No : 19574.54534
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 12, color: 'gray'}}>
                  Tracking Number:
                </Text>
                <Text
                  style={{fontWeight: 'bold', marginTop: 12, marginLeft: 9}}>
                  2103293.43423
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 12, color: 'gray'}}>Quantity:</Text>
                <Text
                  style={{fontWeight: 'bold', marginTop: 12, marginLeft: 9}}>
                  3
                </Text>
              </View>

              <View style={{flexDirection: 'row', marginRight: 12}}>
                <Text style={{marginTop: 12, color: 'gray'}}>
                  Total Amount:
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 12,
                      marginLeft: 9,
                      width: '57%',
                    }}>
                    39
                  </Text>

                  <Text
                    style={{marginLeft: 'auto', marginTop: 12, color: 'green'}}>
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 12,
                marginTop: 12,
                color: 'gray',
              }}>
              5 jul 2001
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MyOrders;
