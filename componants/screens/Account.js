import React from 'react'
import { View,Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { COLOURS } from '../database/Database'
import SignUp from './Signup';
import EmailCheck from './EmailCheck';

const Tab = createMaterialBottomTabNavigator();
const Account=()=> {

  return (
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
  )
}

export default Account