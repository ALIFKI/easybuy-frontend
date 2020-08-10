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
export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: '',
      password2: '',
      password1Validate: new Animated.Value(0),
      samePassword: new Animated.Value(0),
    };
  }

  handleRegister() {
    if (this.state.password1 == '' || this.state.password2 == '') {
      Animated.timing(this.state.samePassword, {
        toValue: 0,
      }).start();
      Animated.timing(this.state.password1Validate, {
        toValue: 1,
      }).start();
    } else if (this.state.password1 != this.state.password2) {
      Animated.timing(this.state.password1Validate, {
        toValue: 0,
      }).start();
      Animated.timing(this.state.samePassword, {
        toValue: 1,
      }).start();
    }
  }
  render() {
    return (
      <ScrollView style={{height: 500}}>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Icon
              name="angle-left"
              coloe="black"
              style={{marginTop: 20}}
              size={30}
            />
          </TouchableOpacity>

          <Text style={{fontWeight: 'bold', fontSize: 32, marginTop: 30}}>
            Reset Password
          </Text>
          <View style={{marginTop: 50}}>
            <View style={styles.boxShadow}>
              <TextInput
                secureTextEntry={true}
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="New Password"
                onChangeText={(text) => this.setState({password1: text})}
                value={this.email}
              />
            </View>

            <View style={styles.boxShadow}>
              <TextInput
                secureTextEntry={true}
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Confirmation New Password"
                onChangeText={(text) => this.setState({password2: text})}
                value={this.password}
              />
            </View>
            {/* validate password */}
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  opacity: this.state.samePassword,
                },
              ]}>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                passsword is not the same
              </Text>
            </Animated.View>
          </View>

          {/* validate email */}
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                opacity: this.state.password1Validate,
              },
            ]}>
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: -12}}>
              password is required
            </Text>
          </Animated.View>

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
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  register,
});
const mapDispatchToProp = {register};

export default connect(mapStateToProps, mapDispatchToProp)(ResetPassword);
