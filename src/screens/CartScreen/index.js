import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import style from './style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HeaderTitleComponents from '../../components/HeaderTitleComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';
import image from '../../assets/image/banner.png';
import StartComponet from '../../components/StarComponent';
import CardShop from '../../components/CardShopComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

class ShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <ScrollView style={{height: 900}}>
        <Icon
          name="search"
          size={23}
          style={{
            marginLeft: 'auto',
            marginRight: 13,
            marginTop: 13,
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
          <Text style={{fontWeight: 'bold', fontSize: 40, marginTop: 70}}>
            My Bag
          </Text>

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
              <Image source={image} style={{width: 100}} />
              <View style={{marginLeft: 9}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Title</Text>
                <View style={{flexDirection: 'row', height: 140}}>
                  <Text style={{color: 'gray'}}>color:</Text>
                  <Text style={{fontSize: 13, marginLeft: 5}}>Grey</Text>
                  <View
                    style={{flexDirection: 'row', zIndex: 5, marginLeft: -62}}>
                    {this.state.count == 1 ? (
                      <TouchableOpacity
                        style={{
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,

                          elevation: 5,
                          marginTop: 40,
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
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,

                          elevation: 5,
                          marginTop: 40,
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
                          }}>
                          -
                        </Text>
                      </TouchableOpacity>
                    )}

                    <TouchableOpacity
                      style={{
                        marginTop: 40,
                        backgroundColor: 'white',
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          marginTop: 10,
                        }}>
                        {this.state.count}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        this.setState({count: this.state.count + 1})
                      }
                      style={{
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        marginLeft: 2,
                        marginTop: 40,
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
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <Text
                style={{
                  marginLeft: 'auto',
                  fontWeight: 'bold',
                  marginTop: 73,
                  marginRight: 12,
                }}>
                30$
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ShopScreen;
