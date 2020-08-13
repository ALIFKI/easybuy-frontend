import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '@env';
import {connect} from 'react-redux';
import {myOrderList} from '../../redux/actions/order';
import {myAddressList} from '../../redux/actions/address';
import {logout} from '../../redux/actions/auth';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [],
      addressList: [],
    };
  }
  handleMyOrderList = () => {
    const token = this.props.user.auth.token;
    this.props
      .myOrderList(token)
      .then((res) => {
        this.setState({
          orderList: res.value.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  handleMyAddressList = () => {
    const token = this.props.user.auth.token;
    const user_id = this.props.user.auth.id;
    this.props
      .myAddressList(token, user_id)
      .then((res) => {
        this.setState({
          addressList: res.value.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  handleLogout = () => {
    this.props.logout().then(() => {
      this.props.navigation.replace('');
    });
  };
  componentDidMount = () => {
    this.handleMyOrderList();
    this.handleMyAddressList();
  };
  render() {
    const {id, name, email, image} = this.props.user.auth;
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          marginRight: 13,
        }}>
        <ScrollView style={style.container}>
          <Text style={style.textHeader}>My Profile</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{borderRadius: 100, width: 70, height: 70}}
              source={{uri: API_URL + 'img/' + image}}
            />
            <View style={{marginLeft: 12}}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>{name}</Text>
              <Text style={{color: 'gray'}}>{email}</Text>
              <Text />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MyOrder')}
            style={{marginTop: 40, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>My Orders</Text>
              <Text style={{color: 'gray', marginTop: 7}}>
                Already have {this.state.orderList.length} Orders
              </Text>
            </View>
            <Icon
              name="angle-right"
              size={28}
              style={{marginLeft: 'auto', marginTop: 8}}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={
            ()=>{this.props.navigation.navigate('ShipingAddress')}
          }
          style={{marginTop: 40, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Shipping Address
              </Text>
              <Text style={{color: 'gray', marginTop: 7}}>
                {this.state.addressList.length} addresses
              </Text>
            </View>
            <Icon
              name="angle-right"
              size={28}
              style={{marginLeft: 'auto', marginTop: 8}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Setting');
            }}
            style={{marginTop: 40, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Settings</Text>
              <Text style={{color: 'gray', marginTop: 7}}>
                Notification and Password
              </Text>
            </View>
            <Icon
              name="angle-right"
              size={28}
              style={{marginLeft: 'auto', marginTop: 8}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleLogout}
            style={{marginTop: 40, flexDirection: 'row'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Logout</Text>
            </View>
            <Icon
              name="angle-right"
              size={28}
              style={{marginLeft: 'auto', marginTop: 8}}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProp = {myOrderList, myAddressList, logout};
export default connect(mapStateToProps, mapDispatchToProp)(ProfileScreen);
