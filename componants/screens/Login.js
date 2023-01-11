import axios from 'axios'
import React from 'react'
import { View,Button,TextInput,StyleSheet,Alert} from 'react-native'

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
      await axios.post('http://192.168.0.3:5000/api/auth/login',{ username, password} )
       .then(res=>{
        if(res){
          console.log({res: res.data});
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
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
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
  }
})