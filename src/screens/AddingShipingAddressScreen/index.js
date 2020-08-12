import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/auth';
class AddingShipingAddressScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      nameValidate: new Animated.Value(0),
      emailValidate: new Animated.Value(0),
      emailValidateRegex: new Animated.Value(0),
      passwordValidate: new Animated.Value(0),
      marginBottomName: -14,
      marginTopName: 1,
      marginBottomEmail: -14,
      marginTopEmail: 1,
      marginBottomEmailRegex: -14,
      marginTopEmailRegex: 1,
      marginBottomPassword: -14,
      marginTopPassword: 1,
    };
  }

  handleRegister() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === '') {
      // ====================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // =====================================================
      // show alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomEmail: 4, marginTopEmail: 3});
    } else if (reg.test(this.state.email) === false) {
      // ======================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // ======================================================
      // hide alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomEmail: -14, marginTopEmail: 1});
      // =======================================================
      // show alert emailRegex
      Animated.timing(this.state.emailValidateRegex, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomEmailRegex: 4, marginTopEmailRegex: 2});
    } else if (this.state.password === '') {
      // ======================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // ======================================================
      // hide alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomEmail: -14, marginTopEmail: 1});
      // ======================================================
      // hide alert emailRegex
      Animated.timing(this.state.emailValidateRegex, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      this.setState({marginBottomEmailRegex: -14, marginTopEmailRegex: 1});
      // ======================================================
      // show password
      Animated.timing(this.state.passwordValidate, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    } else {
    }
  }
  render() {
    return (
      <ScrollView style={{height: 500}}>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <View style={{marginTop: 20}}>
            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Full Name"
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>
            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Address
                "
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>
            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="OTY"
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>

            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="State/Province/Region"
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>

            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Country"
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>

            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Zip Code"
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.handleRegister()}
            style={{
              backgroundColor: '#003cb3',
              height: 45,
              width: '100%',
              borderRadius: 100,
              marginTop: 20,
            }}>
            <Text style={{textAlign: 'center', marginTop: 14, color: 'white'}}>
              SAVE ADDRESS
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProp = {register};

export default connect(null, mapDispatchToProp)(AddingShipingAddressScreen);
