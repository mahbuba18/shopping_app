import axios from 'axios'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View,Button,TextInput,StyleSheet,Alert} from 'react-native'
import { Title } from 'react-native-paper'
import { SERVER_URL } from '../utils/constants'

export default class Login extends React.Component {
  state = {
    username: '', password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  login = async () => {
    const { username, password } = this.state
    try {
      await axios.post(`${SERVER_URL}/api/auth/login`,{ username, password} )
       .then(async(res)=>{
        if(res){
          await AsyncStorage.setItem('accessToken', JSON.stringify(res.data.accessToken) )
          Alert.alert("Login successfull");
        }
       })
       .catch(err =>{ 
        console.log({err})
        Alert.alert(err.message)
      })
      this.setState({username: '', password: ''});

    } catch (err) {
      console.log('error login: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
         <Title>Please Login</Title>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          //placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          //placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Login'
          onPress={this.login}
        />
      </View>
    )
  }
}
 const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})