import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/';
import {connect} from 'react-redux';
import {ForgotPassword} from '../../redux/actions/auth';
export class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValidate: new Animated.Value(0),
      emailValidateRegex: new Animated.Value(0),
      borderColor: 'white',
    };
  }

  handleRegister() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === '') {
      Animated.timing(this.state.emailValidate, {
        toValue: 1,
      }).start();
    } else if (reg.test(this.state.email) == false) {
      Animated.timing(this.state.emailValidate, {
        toValue: 0,
      }).start();
      Animated.timing(this.state.emailValidateRegex, {
        toValue: 1,
      }).start();
    } else {
      var data = {
        email : this.state.email
      }
      this.props.ForgotPassword(data).then((res)=>{
        console.log(res)
        Alert.alert(
          'Done !',
          'OTP has been send Check Your email',
          [
            {text : 'OK' , onPress: ()=>{
               this.props.navigation.navigate('Otp',{email : this.state.email, type : 1})
            }}
          ],
          {cancelable: false}
        )
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
  render() {
    return (
      <ScrollView style={{height: 500}}>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="angle-left"
              coloe="black"
              style={{marginTop: 20}}
              size={30}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 32, marginTop: 30}}>
            Forgot Password
          </Text>

          <View style={{marginTop: 50}}>
            <Text>
              Please enter your email address. You will receiver a OTP to
              create a new password via email
            </Text>
            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Email"
                onChangeText={(text) => this.setState({email: text})}
                value={this.email}
              />
            </View>
          </View>

          <Animated.View
            style={[
              styles.fadingContainer,
              {
                opacity: this.state.emailValidate, // Bind opacity to animated value
              },
            ]}>
            <Text style={{textAlign: 'center', color: 'red', marginTop: 4}}>
              Email is required
            </Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.fadingContainer,
              {
                opacity: this.state.emailValidateRegex, // Bind opacity to animated value
              },
            ]}>
            <Text style={{textAlign: 'center', color: 'red', marginTop: -18}}>
              Not valid email address, sould be your@email.com
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
              SEND
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProp = {ForgotPassword};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(ForgotPasswordScreen);
