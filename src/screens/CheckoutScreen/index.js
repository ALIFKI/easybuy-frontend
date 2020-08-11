import React, {Component} from 'react';
import {Text, View, ScrollView, Image, CheckBox} from 'react-native';
import style from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={style.container}>
        <Text style={style.textHeader}>Shiping Address</Text>

        <View style={style.card}>
          <View style={{marginLeft: 20, marginTop: 12}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Jane Joe</Text>
              <Text style={{marginLeft: 220, color: 'blue'}}>Change</Text>
            </View>
            <View style={{marginTop: 9}}>
              <Text style={{fontSize: 16}}>3 New Bridge Court</Text>
              <Text style={{fontSize: 16}}>
                Chino Hils, CA 9170, Unitad States
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={style.textHeader}>Payment</Text>
          <View
            style={[
              {
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
              },
              props.style,
            ]}>
            {props.selected ? (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: '#000',
                }}
              />
            ) : null}
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 40, height: 40, marginTop: 13}}
              source={require('../../image/download.png')}
            />
            <Text style={{marginLeft: 38, marginTop: 29}}>Master Card</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default CheckoutScreen;
