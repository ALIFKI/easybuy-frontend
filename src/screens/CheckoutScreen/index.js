import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import style from './style';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  radio_props1 = [{value: 0}];

  radio_props2 = [{value: 1}];

  render() {
    return (
      <ScrollView style={style.container}>
        <Text style={style.textHeader}>Shiping Address</Text>

        <View style={style.card}>
          <View style={{marginLeft: 20, marginTop: 12}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Jane Joe</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ShipingAddress')
                }>
                <Text style={{marginLeft: 220, color: 'blue'}}>Change</Text>
              </TouchableOpacity>
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

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 40, height: 40, marginTop: 13}}
              source={require('../../image/download.png')}
            />
            <Text style={{marginLeft: 38, marginTop: 29}}>Master Card</Text>
            <RadioForm
              style={{marginLeft: 'auto', marginTop: 19}}
              radio_props={this.radio_props1}
              initial={0}
              buttonColor={'#003399'}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 40, height: 40, marginTop: 13}}
              source={require('../../image/pos_indonesia.png')}
            />
            <Text style={{marginLeft: 38, marginTop: 29}}>
              Kantor Pos Indonesia
            </Text>
            <RadioForm
              style={{marginLeft: 'auto', marginTop: 19}}
              radio_props={this.radio_props2}
              initial={1}
              buttonColor={'#003399'}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 40, height: 40, marginTop: 13}}
              source={require('../../image/logoGopay.jpeg')}
            />
            <Text style={{marginLeft: 38, marginTop: 29}}>Go Pay</Text>
            <RadioForm
              style={{marginLeft: 'auto', marginTop: 19}}
              radio_props={this.radio_props2}
              initial={1}
              buttonColor={'#003399'}
            />
          </View>

          <View style={{marginTop: 40, flexDirection: 'row'}}>
            <Text style={{color: 'gray'}}>Order</Text>
            <Text style={{marginLeft: 'auto', fontWeight: 'bold'}}>30$</Text>
          </View>

          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Text style={{color: 'gray'}}>Delivery</Text>
            <Text style={{marginLeft: 'auto', fontWeight: 'bold'}}>30$</Text>
          </View>

          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <Text style={{color: 'gray'}}>Summary</Text>
            <Text style={{marginLeft: 'auto', fontWeight: 'bold'}}>60$</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Success Screen')}
          style={{
            backgroundColor: '#003399',
            width: '100%',
            height: 50,
            borderRadius: 50,
            marginTop: 40,
            marginBottom: 9,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              marginTop: 10,
            }}>
            Submit Orders
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default CheckoutScreen;
