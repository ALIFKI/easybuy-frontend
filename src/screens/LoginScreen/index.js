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
export class LoginScreen extends Component {
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
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // =====================================================
      // show alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 1,
      }).start();
      this.setState({marginBottomEmail: 4, marginTopEmail: 3});
    } else if (reg.test(this.state.email) === false) {
      // ======================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // ======================================================
      // hide alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomEmail: -14, marginTopEmail: 1});
      // =======================================================
      // show alert emailRegex
      Animated.timing(this.state.emailValidateRegex, {
        toValue: 1,
      }).start();
      this.setState({marginBottomEmailRegex: 4, marginTopEmailRegex: 2});
    } else if (this.state.password === '') {
      // ======================================================
      // hide alert name
      Animated.timing(this.state.nameValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomName: -14, marginTopName: 1});
      // ======================================================
      // hide alert email
      Animated.timing(this.state.emailValidate, {
        toValue: 0,
      }).start();
      this.setState({marginBottomEmail: -14, marginTopEmail: 1});
      // ======================================================
      // hide alert emailRegex
      Animated.timing(this.state.emailValidateRegex, {
        toValue: 0,
      }).start();
      this.setState({marginBottomEmailRegex: -14, marginTopEmailRegex: 1});
      // ======================================================
      // show password
      Animated.timing(this.state.passwordValidate, {
        toValue: 1,
      }).start();
    } else {
    }
    render() {
        return (
            <View>
                <Text> LoginScreen </Text>
                <Button title={"Dashboard"} onPress={()=>{this.props.navigation.navigate('Dashboard')}}></Button>
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
                Email is required
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
                Email not valid
              </Text>
            </Animated.View>
            <View style={styles.boxShadow}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  marginTop: 14,
                  marginLeft: 14,
                }}
                placeholder="Password"
                onChangeText={(text) => this.setState({password: text})}
                value={this.password}
              />
            </View>
            {/* validate password */}
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  marginTop: 8,
                  marginLeft: 11,
                  opacity: this.state.passwordValidate,
                  marginBottom: -11,
                },
              ]}>
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                Password is required
              </Text>
            </Animated.View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            style={{flexDirection: 'row', marginTop: 10, marginLeft: 'auto'}}>
            <Text style={{marginRight: 13, fontSize: 16, marginTop: 2}}>
              Forgot Password?
            </Text>
            <Icon name="long-arrow-right" color="#0044cc" size={30} />
          </TouchableOpacity>
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
              Sign Up
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

export default connect(mapStateToProps, mapDispatchToProp)(LoginScreen);
