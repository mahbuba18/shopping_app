import axios from 'axios'
import React from 'react'
import { View,Button,TextInput,StyleSheet,Alert} from 'react-native'
import { Title } from 'react-native-paper'
import { SERVER_URL } from '../utils/constants'

export default class EmailCheck extends React.Component {
  state = {
    email: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  emailCheck = async () => {
    const { email } = this.state
    try {
      await axios.post(`${SERVER_URL}/api/auth/emailcheck`,{ email })
       .then(res=>{
        if(res.data.result){
          this.props.navigation.navigate('Login');
        }
        })
       .catch(err =>{ 
         this.props.navigation.navigate('Signup');
      })
      this.setState({username: '', password: ''});

    } catch (err) {
      console.log('error login: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Title>Check Email First</Title>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          //placeholderTextColor=''
          onChangeText={val => this.onChangeText('email', val)}
        />
        <Button
          title='Submit'
          onPress={this.emailCheck}
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