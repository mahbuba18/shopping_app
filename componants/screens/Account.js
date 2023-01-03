import React from 'react'
import { View,Text } from 'react-native'
import { COLOURS } from '../database/Database'

function Account() {

  return (
    <View>
        <Text style={{
          color:COLOURS.black,
        }}>Profile</Text>
    </View>
  )
}

export default Account