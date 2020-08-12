import React, {Component} from 'react';
import {Text, View, ScrollView, Image, CheckBox} from 'react-native';
import style from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

class ShipingAdrress extends Component {
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
        <View style={style.card}>
          <View style={{marginLeft: 20, marginTop: 12}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Jane Joe</Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Change Address')
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

        <View style={style.button}>
          <Text style={{textAlign: 'center', fontSize: 20, marginTop: 15}}>
            ADD NEW ADDRESS
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default ShipingAdrress;
