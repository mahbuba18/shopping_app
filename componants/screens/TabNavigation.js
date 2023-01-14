import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import MyCart from './MyCart';
import Account from './Account';
import ProductInfo from './Product';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Signup';
import Login from './Login';
import EmailCheck from './EmailCheck';

const Tab = createMaterialBottomTabNavigator();

const MyTabs=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="blue"
      barStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarLabel:false,
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
     
      {/* <Tab.Screen
        name="MyCart"
        component={MyCart}
        options={{
          tabBarLabel: 'MyCart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Account"
        component={EmailCheck}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;