import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import style from './style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HeaderTitleComponents from '../../components/HeaderTitleComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';
import image from '../../assets/image/banner.png';
import Componet from '../../components/StarComponent';
import CardShop from '../../components/CardShopComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Popover from 'react-native-popover-view';
import {connect} from 'react-redux';
import {myCart} from '../../redux/actions/cart';
import {API_URL} from '@env';

class ShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      listCartItem: [],
    };
  }
  handleMyCart = () => {
    const token = this.props.user.auth.token;
    this.props
      .myCart(token)
      .then((res) => {
        console.log(res.value.data.data);
        this.setState({
          listCartItem: res.value.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    this.handleMyCart();
  };
  render() {
    const {listCartItem} = this.state;
    const maxlimit = 17;
    let amount = 0;
    listCartItem.map((item, key) => {
      console.log(item);
      amount += item.total;
    });
    return (
      <View>
        <ScrollView style={{height: 400}}>
          <Icon
            name="search"
            size={23}
            style={{
              marginLeft: 'auto',
              marginRight: 13,
              marginTop: 11,
              fontWeight: 'normal',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}
          />
          <View style={{marginLeft: 10, marginRight: 10}}>
            <Text
              style={{
                fontSize: 35,
                marginTop: 70,
                marginBottom: 13,
                fontFamily: 'Poppins-SemiBold',
              }}>
              My Bag
            </Text>
            {listCartItem.map((item,key) => (
              <View key={key}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 120,
                    marginTop: 12,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{uri: API_URL + 'img/' + item.image}}
                      style={{width: 100}}
                    />
                    <View style={{marginLeft: 9}}>
                      <Text
                        style={{
                          fontSize: 20,
                          marginTop: 5,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        {item.name.length > maxlimit
                          ? item.name.substring(0, maxlimit - 3) + '...'
                          : item.name}
                      </Text>
                      <View style={{flexDirection: 'row', height: 140}}>
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'gray',
                            fontFamily: 'Poppins-Medium',
                          }}>
                          color:
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            marginLeft: 5,
                            fontFamily: 'Poppins-Medium',
                          }}>
                          {item.color}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            zIndex: 5,
                            marginLeft: -80,
                            // paddingBottom: -20,
                            // marginBottom: 100,
                          }}>
                          {/* {this.state.count == 1 ? (
                            <TouchableOpacity
                              style={{
                                shadowColor: '#000',
                                shadowOffset: {
                                  width: 0,
                                  height: 2,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 3.84,

                                elevation: 5,
                                marginTop: 30,
                                backgroundColor: 'white',
                                width: 40,
                                height: 40,
                                borderRadius: 50,
                                // nBottom: 30,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  textAlign: 'center',
                                  marginTop: 2,
                                  fontSize: 26,
                                }}>
                                -
                              </Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({count: this.state.count - 1})
                              }
                              style={{
                                shadowColor: '#000',
                                shadowOffset: {
                                  width: 1,
                                  height: 2,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 3.84,

                                elevation: 5,
                                marginTop: 30,
                                backgroundColor: 'white',
                                width: 40,
                                height: 40,
                                borderRadius: 50,
                              }}>
                              <Text
                                style={{
                                  color: 'grey',
                                  textAlign: 'center',
                                  marginTop: 2,
                                  fontSize: 26,
                                  fontFamily: 'Poppins-Medium',
                                }}>
                                -
                              </Text>
                            </TouchableOpacity>
                          )} */}

                          <TouchableOpacity
                            style={{
                              marginTop: 30,
                              backgroundColor: 'white',
                              width: 40,
                              height: 40,
                              borderRadius: 50,
                            }}>
                            <Text
                              style={{
                                textAlign: 'center',
                                marginTop: 10,
                                fontFamily: 'Poppins-Medium',
                              }}>
                              {item.qty}
                            </Text>
                          </TouchableOpacity>

                          {/* <TouchableOpacity
                            onPress={() =>
                              this.setState({count: this.state.count + 1})
                            }
                            style={{
                              shadowColor: '#000',
                              shadowOffset: {
                                width: 0,
                                height: 2,
                              },
                              shadowOpacity: 0.5,
                              shadowRadius: 3.84,

                              elevation: 5,
                              marginLeft: 2,
                              marginTop: 30,
                              backgroundColor: 'white',
                              width: 40,
                              height: 40,
                              borderRadius: 50,
                            }}>
                            <Text
                              style={{
                                color: 'grey',
                                textAlign: 'center',
                                marginTop: 2,
                                fontSize: 26,
                                fontFamily: 'Poppins-Medium',
                              }}>
                              +
                            </Text>
                          </TouchableOpacity> */}
                        </View>
                      </View>
                    </View>

                    <Text
                      style={{
                        marginLeft: 'auto',
                        marginTop: 80,
                        marginRight: 12,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 16,
                      }}>
                      ${item.total}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            width: '100%',
            position: 'absolute',
            marginTop: '120%',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 17,
              color: 'gray',
              fontFamily: 'Poppins-Medium',
              marginLeft: 20,
            }}>
            Total Amount:
          </Text>
          <Text
            style={{
              marginLeft: 'auto',
              marginRight: 20,
              fontSize: 22,
              fontFamily: 'Poppins-SemiBold',
            }}>
            ${amount}
          </Text>
        </View>

        <View
          style={{
            borderRadius: 50,
            marginTop: 520,
            backgroundColor: '#0000b3',
            height: 45,
            width: '90%',
            marginLeft: 20,
            position: 'absolute',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CheckOut')}
            style={{
              borderRadius: 30,
              width: '100%',
              backgroundColor: '#0000b3',
              // height: 50,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                marginTop: 13,
                fontFamily: 'Poppins-Medium',
              }}>
              CHECK OUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProp = {myCart};
export default connect(mapStateToProps, mapDispatchToProp)(ShopScreen);
