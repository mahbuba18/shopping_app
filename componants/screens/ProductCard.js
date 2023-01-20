import { Image, Text, TouchableOpacity, View } from "react-native"
import { COLOURS } from "../database/Database"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const ProductCard=({data, navigation})=>{
    return(
      <View
      style={{
        width:'48%',
        marginVertical:14,
      }}
      >
        <View 
        style={{
          width:'100%',
          height:100,
          borderRadius:20,
          backgroundColor:COLOURS.backgroundLight,
          position:'relative',
          justifyContent:'center',
          alignItems:'center',
          marginBottom:8,


        }}>
          {data.isOff?(
            <View style={{
              position:'absolute',
              width:'20%',
              height:'24%',
              backgroundColor:COLOURS.blue,
              top:0,
              left:0,
              borderTopLeftRadius:10,
              borderBottomRightRadius:10,
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Text style={{
                  fontSize:12,
                  color:COLOURS.white,
                  fontWeight:'bold',
                  letterSpacing:1,
              }}>
                {data.offPercentage || 10}%
                </Text>
            </View>
          ):null}
          <Image source={{uri:data?.img}}
          style={{
            width:'800%',
            height:'80%',
            resizeMode:'contain',
          }}
          />
        </View>
        <TouchableOpacity
          onPress={()=> navigation.navigate("Product",{productID: data._id})}
        >
          <Text style={{
            fontSize:12,
            color:COLOURS.black,
            fontWeight:'600',
            marginBottom:2,
          }}>
            {data?.name}
          </Text>
          {data.category? (
            data.inStock? (
            <View 
            style={{
              flexDirection:'row',
              alignItems:'center',
            }}>
              <FontAwesome name="circle" style={{
                fontSize:12,
                marginRight:6,
                color:COLOURS.green,
              }}
              />
              <Text style={{
                fontSize:12,
                color:COLOURS.green,
              }}>
                Available
              </Text>
            </View>
          ):(<View 
            style={{
              flexDirection:'row',
              alignItems:'center',
            }}>
              <FontAwesome name="circle" style={{
                fontSize:12,
                marginRight:6,
                color:COLOURS.red,
              }}
              />
              <Text style={{
                fontSize:12,
                color:COLOURS.red,
              }}>
                Unavailable
              </Text>
            </View>)
          ): null}
          <Text style={{
            color:COLOURS.black,
          }}>Price: {'\u09F3'}{data.price}</Text>
        </TouchableOpacity>
      </View>
    )
  }