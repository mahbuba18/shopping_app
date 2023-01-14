import axios from 'axios'
import React from 'react'
import { View,Button,TextInput,StyleSheet,Alert} from 'react-native'
import { Title } from 'react-native-paper'
import { SERVER_URL } from '../utils/constants'

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email} = this.state
    try {
      await axios.post(`${SERVER_URL}/api/auth/signup`,{ username, password, email} )
       .then(res=>{
        if(res){
          Alert.alert("Signup successfull");
        }
       })
      this.setState({username: '', password: '', email: ''});

    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Title>Please Signup</Title>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('email', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
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
  }
})