import React ,{useState,useEffect} from 'react'
import { View,Text,ScrollView,StatusBar, TouchableOpacity ,Image} from 'react-native'
import {COLOURS,Items} from '../database/Database'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProductCard } from './ProductCard';
import useProducts from '../../hooks/useProducts';

const Home = ({navigation}) => {

  const [products, setProducts] = useProducts();

        
  return (
    <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.white,
    }}>
    <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
        }}>
        <TouchableOpacity>
          <Entypo
            name="shopping-bag"
            style={{
              fontSize: 18,
              color: COLOURS.backgroundMedium,
              padding: 12,
              borderRadius: 10,
              backgroundColor: COLOURS.backgroundLight,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
          <MaterialCommunityIcons
            name="cart"
            style={{
              fontSize: 18,
              color: COLOURS.backgroundMedium,
              padding: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLOURS.backgroundLight,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginBottom: 10,
          padding: 16,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            marginBottom: 10,
          }}>
          Easy Shop
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLOURS.black,
            fontWeight: '400',
            letterSpacing: 1,
            lineHeight: 24,
          }}>
          Our goal is to make shopping easy.
          {'\n'}This shop offers computer related products.
        </Text>
      </View>
      <View
        style={{
          padding: 16,
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
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
              }}>
              Products
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.black,
                fontWeight: '400',
                opacity: 0.5,
                marginLeft: 10,
              }}>
              41
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.blue,
              fontWeight: '400',
            }}>
            SeeAll
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {products.map(data => {
            return <ProductCard data={data} key={data._id} navigation={navigation} />;
          })}
        </View>
      </View>
    </ScrollView>
  </View>
  );
};

export default Home