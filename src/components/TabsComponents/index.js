import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';
import AwsemIcon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import ShopScreen from '../../screens/ShopScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

export default function TabsBar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#273AC7', // active icon color
        inactiveTintColor: '#E0E0E0', // inactive icon color
        style: {
          backgroundColor: '#FFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 68,
          shadowOpacity: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ion name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ion name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-bag" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Users"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
