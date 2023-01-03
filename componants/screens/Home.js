import React ,{useState,useEffect} from 'react'
import { View,Text,ScrollView,StatusBar, TouchableOpacity ,Image} from 'react-native'
import {COLOURS,Items} from '../database/Database'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == "product") {
        productList.push(Items[index]);
      } else if (Items[index].category == "accessory") {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create an product reusable card

  const ProductCard=({data})=>{
    return(
      <TouchableOpacity
      onPress={()=> navigation.navigate("ProductInfo",{productID:data.id})}
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
          {data.isOff ?(
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
                {data.offPercentage}%
                </Text>
            </View>
          ):null}
          <Image source={data.productImage}
          style={{
            width:'80%',
            height:'80%',
            resizeMode:'contain',
          }}
          />
        </View>
        <Text style={{
          fontSize:12,
          color:COLOURS.black,
          fontWeight:'600',
          marginBottom:2,
        }}>
          {data.productName}
        </Text>
        {data.category=='accessory' ? (
          data.isAvailable ? (
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
        }}>Price: {data.productPrice} Taka</Text>
      </TouchableOpacity>
    )
  }
        
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
      
          <View style={{
            marginBottom:10,
            padding:16,
          }}>
            <Text style={{
              fontSize:26,
              color:COLOURS.black,
              fontWeight:'500',
              letterSpacing:1,
              lineHeight:24,

            }}>
              M Online Shop
            </Text>
            <Text style={{
              fontSize:14,
              color:COLOURS.black,
              fontWeight:'400',
              letterSpacing:1,
              marginBottom:10,
             }}>
              This shop offers unique products with discount.
            </Text>
          </View>
        <View style={{
          padding:16,
        }}>
        <View 
           style={{
            
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
          }}>
            <View style={{
              flexDirection:'row',
              alignItems:'center',
            }}>
              <Text style={{
                fontSize:18,
                color:COLOURS.black,
                fontWeight:'500',
                letterSpacing:1,
              }}>Products</Text>
              
            </View>
          </View>
          <View style={{
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
          }}>
            {
              products.map((data)=>{
                return<ProductCard data={data} key={data.id}/> 
              })
            }
           </View> 
          </View>
          <View style={{
          padding:16,
        }}>
        <View 
           style={{
            
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
          }}>
            <View style={{
              flexDirection:'row',
              alignItems:'center',
            }}>
              <Text style={{
                fontSize:18,
                color:COLOURS.black,
                fontWeight:'500',
                letterSpacing:1,
              }}>
                Accessories
                </Text>
             </View>
            
          </View>
          <View style={{
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
          }}>
            {
              accessory.map((data)=>{
                return<ProductCard data={data} key={data.id}/> 
              })
            }
           </View> 
          </View>
          
        </ScrollView>
      </View>
  );
};

export default Home