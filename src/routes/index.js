import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import {navigationRef} from './RootNav';
import {connect} from 'react-redux';
import ForgotPassword from '../screens/ForgotPasswordScreen/index';
// import ResetPassword from '../screens/ResetPasswordScreen/index';
import SplashScreen from '../screens/SplashScreen';
import IonIcon from 'react-native-vector-icons/Ionicons'
import TabsBar from '../components/TabsComponents';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

export class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoad: true,
      });
    }, 3000);
  }
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {this.state.isLoad ? (
            <></>
          ) : (
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false}}
            />
          )}
          {this.props.user.isLogin ? (
            <>
                <Stack.Screen
                  name="Dashboard"
                  component={TabsBar}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Product"
                  component={ProductScreen}
                  options={({ route,navigation }) => ({ 
                  title: route.params.name,
                  headerLeft : ()=> <IonIcon name={'chevron-back-outline'} size={25} onPress={()=>{navigation.goBack()}}/>,
                  headerStyle: {
                      elevation: 0,
                      shadowOpacity: 0,
                  },
                  headerTitleStyle: {
                    marginLeft : -50,
                    fontFamily : 'Metropolis-Medium',
                    alignSelf: 'center',
                  },})}
                />
                <Stack.Screen
                  name="Shop"
                  component={ProductScreen}
                  options={({ route,navigation }) => ({
                  headerLeft : ()=> <IonIcon name={'chevron-back-outline'} size={25} onPress={()=>{navigation.goBack()}}/>,
                  headerStyle: {
                      elevation: 0,
                      shadowOpacity: 0,
                  },
                  headerTitleStyle: {
                    marginLeft : -50,
                    fontFamily : 'Metropolis-Medium',
                    alignSelf: 'center',
                  },})}
                />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps)(Route);
