import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLOURS, Items} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { SERVER_URL } from '../utils/constants';
import useProducts from '../../hooks/useProducts';

const CheckOut = ({navigation}) => {
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useProducts();
  const [cartProducts, setCartProducts]= useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const load = async() =>{
      axios.get(`${SERVER_URL}/api/carts`,{
        headers: {
          token: `Bearer ${JSON.parse(await AsyncStorage.getItem('accessToken'))}`,
          'Content-Type': 'application/json'
        }
      }).then(res=>setCarts(res.data?.pop().products))
      .catch(err=>console.log(err.message))
    }
    load();
  }, [navigation]);

  useEffect(() => {
      const getCartProducts =(products, carts) => {
            return products?.filter(product=>carts.some(cart=> cart.productId == product._id))
          }
      const result = getCartProducts(products, carts)
      setCartProducts(result)
  },[carts, products])


  //get total price of all items in the cart
  useEffect(()=>{
    const getTotal = (cartProducts, carts) => {
      let total = 0;
      cartProducts?.forEach(cartProduct => carts?.forEach(cart=>{
        if(cartProduct._id == cart.productId){
          total += cartProduct.price * cart.quantity
        }
      }))
      return total;
    };
    const result = getTotal(cartProducts, carts)
    setTotal(result)
    console.log({total})

  },[cartProducts, carts])

 
  //checkout

  const placeOrder = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };

  const renderProducts = (data, index) => {
    const quantity = carts.find(cart=>cart?.productId == data?._id)?.quantity;
    let totalPrice = quantity * data?.price
    console.log({quantity})
    return (
      <View
        key={index}
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* left */}
        <View
          key={index}
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}>
          <Image
            source={{uri:data.img}}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        {/* middle */}
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <TouchableOpacity
             onPress={() => navigation.navigate('Product', {productID: data._id})}
            >
              <Text
                style={{
                  fontSize: 14,
                  maxWidth: '100%',
                  color: COLOURS.black,
                  fontWeight: '600',
                  letterSpacing: 1,
                }}>
                {data.name}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                {'\u09F3'}{data.price}
              </Text>
              <Text>
                (~{'\u09F3'}
                {data.price + data.price / 20})
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* quantity */}
              <Text 
              style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                    Qty:
                </Text>
              <Text>{" "}{quantity}</Text>
            </View>
            <View>
              <Text>{'\u09F3'} {totalPrice}</Text>
            </View>
          </View>
        </View>
        {/* right */}
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{paddingHorizontal: 16}}>
          {cartProducts ? cartProducts.map(renderProducts) : null}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                
                <View>
                  
                </View>
              </View>
              
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                
                <View>
                  
                </View>
              </View>
              
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Information:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                }}>
                Subtotal :
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                {total}.00 {'\u09F3'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                }}>
                Shipping Cost : 
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                {total / 20} {'\u09F3'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                }}>
                Total Price :
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLOURS.black,
                }}>
                {total + total / 20} {'\u09F3'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (total != 0 ? placeOrder() : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            Place Order (Price : {total + total / 20} {'\u09F3'} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOut;
