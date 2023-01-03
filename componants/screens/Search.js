import React from 'react'
import { View,TextInput,Text,StyleSheet } from 'react-native'
import SearchBar from '../database/searchBar'

const Search=()=> {
  return (
    <View style={styles.container}>
      <SearchBar/>
    </View>
    
  )
}
export default Search;
const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
})
