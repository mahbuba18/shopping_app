import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React ,{useState}from 'react'
import { TextInput } from 'react-native-paper';


const Login = () => {
  const[agree,setagree]=useState(false);
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainHeader}>
        Login Form
        </Text>
        <Text style={styles.description}>
        </Text>
        <View style={styles.inputContainer}>
         <Text style={styles.labels}> Enter your name</Text>
         <TextInput style={styles.inputStyle}
         autoCapitalize="none"
         autoCorrect={false}/>
        </View>
        <View style={styles.inputContainer}>
         <Text style={styles.labels}> Enter your password</Text>
         <TextInput style={styles.inputStyle}
         autoCapitalize="none"
         autoCorrect={false}
         secureTextEntry={true}/>
        </View>
        
    </View>
  )
};
/*<View style={styles.wrapper}>
           <CheckBox
           value={agree}
            onValueChange={()=>setagree(!agree)}
            color={agree ? "blue":undefined}
           />
           <Text style={styles.wrapperText}>
             I have read and agreed with it.
           </Text>
        </View>
        <TouchableOpacity style={[styles.buttonStyle,
        {
          backgroundColor:agree?"blue":"grey",
        },
       ]}
       disabled={!agree}
       >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> */
const styles = StyleSheet.create({
  maincontainer:{
    height:"100%",
    paddingHorizontal:30,
    paddingTop:30,
    backgroundColor:"white",
  },
  mainHeader:{
    fontSize:25,
    color:"black",
    fontWeight:'500',
    paddingTop:20,
    paddingBottom:15,
    textTransform:"capitalize",
    fontFamily:"bold",
  },
  description:{
    fontSize:20,
    color:"black",
    paddingBottom:20,
    lineHeight:25,
    fontFamily:"regular",
  },
  inputContainer:{
    marginTop:20,
  },
  labels:{
    fontSize:18,
    color:"black",
    marginTop:10,
    marginBottom:5,
    lineHeight:25,
    fontFamily:"regular",
    opacity:0.5,
  },
  inputStyle:{
    borderWidth:1,
    borderColor:"blue",
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:1,
    fontSize:18,
    fontFamily:"regular",
  },
  

})

export default Login