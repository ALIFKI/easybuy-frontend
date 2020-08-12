import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  CheckBox,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import style from './style';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import axios from 'axios';

class ChangeAddreessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address_as: '',
      fullname: '',
      address: '',
      city: '',
      zip_code: '',
      telp: '',
    }
  }

  radio_props1 = [{value: 0}];

  radio_props2 = [{value: 1}];

  upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('address_as', this.state.address_as);
    formData.append('fullname', this.state.fullname);
    fomtData.append('address', this.state.address);
    formData.append('city', this.state.city);
    formData.append('zip_code', this.state.zip_code);
    formData.append('telp', this.state.telp);
    axios({
      method: 'PUT',
      url: 'http://localhost:3000/address',
      data: formData,
      header: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => {
      console.log('Update success')
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <ScrollView style={style.container}>
        <View style={style.card}>
          <View
            style={{
              marginTop: 10,

              width: '100%',
            }}>
            <View style={{marginRight: 10, marginLeft: 10}}>
              <Text>Save address as</Text>

              <TextInput
                style={{
                  borderBottomWidth: 2,
                  borderColor: 'black',
                  width: '100%',
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                marginTop: 23,
                marginBottom: 20,
                marginRight: 10,
                marginLeft: 10,
              }}>
              <Text>Recepinet's Name</Text>

              <TextInput
                style={{
                  borderBottomWidth: 2,
                  borderColor: 'black',
                  width: '100%',
                  height: 30,
                }}
              />
            </View>
          </View>
        </View>
        <View style={style.card}>
          <View
            style={{
              marginTop: 10,

              width: '100%',
            }}>
            <View style={{marginRight: 10, marginLeft: 10, marginBottom: 30}}>
              <Text>Address</Text>

              <TextInput
                style={{
                  borderBottomWidth: 2,
                  borderColor: 'black',
                  width: '100%',
                  height: 30,
                }}
              />
            </View>
            <View style={{marginRight: 10, marginLeft: 10}}>
              <Text>City Or Subbdistrict</Text>

              <TextInput
                style={{
                  borderBottomWidth: 2,
                  borderColor: 'black',
                  width: '100%',
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                marginTop: 23,
                marginBottom: 20,
                marginRight: 10,
                marginLeft: 10,
              }}>
              <Text>Postal Code</Text>

              <TextInput
                style={{
                  borderBottomWidth: 2,
                  borderColor: 'black',
                  width: '100%',
                  height: 30,
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Add Shipping Address')}
          style={{
            width: '100%',
            backgroundColor: '#0033cc',
            height: 50,
            marginTop: 30,
            borderRadius: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',

              marginTop: 9,
              fontSize: 20,
            }}>
            SAVE ADDRESS
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default ChangeAddreessScreen;
