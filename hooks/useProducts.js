import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "../componants/utils/constants"


function useProducts() {
    const [products, setProducts]= useState([])
   useEffect(()=>{
    const load = async()=>{
      axios.get(`${SERVER_URL}/api/products`,{
        headers: {
          token: `Bearer ${JSON.parse(await AsyncStorage.getItem('accessToken'))}`,
          'Content-Type': 'application/json'
        }
      }).then(res=>{
        setProducts(res.data)
      
      })}
      load();
    },[])
    
    return [products, setProducts]
}

export default useProducts