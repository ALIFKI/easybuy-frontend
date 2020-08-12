import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/';
import { connect } from 'react-redux'
import Axios from 'axios';
import {API_URL} from '@env'

export class OtpScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        otp: '',
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
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let regex = /^[0-9][A-Za-z0-9 -]*$/
      if (this.state.otp === '') {
        // ====================================================
        // hide alert name
        Animated.timing(this.state.nameValidate, {
          toValue: 0,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomName: -14, marginTopName: 1});
        // =====================================================
        // show alert email
        Animated.timing(this.state.emailValidate, {
          toValue: 1,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomEmail: 4, marginTopEmail: 3});
      } else if (regex.test(this.state.otp) === false) {
        // ======================================================
        // hide alert name
        Animated.timing(this.state.nameValidate, {
          toValue: 0,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomName: -14, marginTopName: 1});
        // ======================================================
        // hide alert email
        Animated.timing(this.state.emailValidate, {
          toValue: 0,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomEmail: -14, marginTopEmail: 1});
        // =======================================================
        // show alert emailRegex
        Animated.timing(this.state.emailValidateRegex, {
          toValue: 1,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomEmailRegex: 4, marginTopEmailRegex: 2});
      } else if (this.state.password === '') {
        // ======================================================
        // hide alert name
        Animated.timing(this.state.nameValidate, {
          toValue: 0,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomName: -14, marginTopName: 1});
        // ======================================================
        // hide alert email
        Animated.timing(this.state.emailValidate, {
          toValue: 0,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomEmail: -14, marginTopEmail: 1});
        // ======================================================
        // hide alert emailRegex
        Animated.timing(this.state.emailValidateRegex, {
          toValue: 0,
          useNativeDriver : false
        }).start();
        this.setState({marginBottomEmailRegex: -14, marginTopEmailRegex: 1});
        // ======================================================
        // show password
        Animated.timing(this.state.passwordValidate, {
          toValue: 1,
          useNativeDriver : false
        }).start();
      } else {
        Axios({
          method : 'POST',
          url : `${API_URL}auth/activation`,
          data : {
            email : this.props.route.params.email,
            code : this.state.otp
          }
        }).then((res)=>{
          Alert.alert(
            'Done !!',
            'Actiovation Success!! Lets Login',
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('Login') }
            ],
            { cancelable: false }
          );
        }).catch((err)=>{
          console.log(err.response.data)
          Alert.alert(
            'Oopss!!',
            err.response.data.data,
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
        })
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
              Insert Your OTP
            </Text>
            <View style={{marginTop: 50}}>
              <View style={styles.boxShadow}>
                <TextInput
                  style={{
                    width: '100%',
                    height: 40,
                    marginTop: 14,
                    marginLeft: 14,
                  }}
                  placeholder="OTP"
                  onChangeText={(text) => this.setState({otp: text})}
                  value={this.email}
                />
              </View>
              {/* validate email */}
              <Animated.View
                style={[
                  styles.fadingContainer,
                  {
                    marginLeft: 11,
                    opacity: this.state.emailValidate,
                    marginBottom: this.state.marginBottomEmail,
                    marginTop: this.state.marginTopEmail,
                  },
                ]}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                  OTP is Required
                </Text>
              </Animated.View>
              <Animated.View
                style={[
                  styles.fadingContainer,
                  {
                    marginLeft: 11,
                    opacity: this.state.emailValidateRegex,
                    marginBottom: this.state.marginBottomEmailRegex,
                    marginTop: this.state.marginTopEmailRegex,
                  },
                ]}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                  Otp not valid
                </Text>
              </Animated.View>
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
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen)
