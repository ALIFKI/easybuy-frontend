import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  CheckBox,
  TouchableOpacity,
} from 'react-native';
import style from './style';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

class SuccessScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View
          style={{alignItems: 'center', alignContent: 'center', marginTop: 40}}>
          <Image source={require('../../image/image.png')} />
        </View>
        <View style={{marginRight: 12, marginLeft: 12}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              backgroundColor: '#1a53ff',
              height: 50,
              width: '100%',
              borderRadius: 50,
              marginTop: 110,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 19,
                marginTop: 9,
              }}>
              CONTINUE SHOPING
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SuccessScreen;
