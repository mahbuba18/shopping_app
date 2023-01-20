import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './componants/screens/Home'
import MyCart from './componants/screens/MyCart';
import ProductInfo from './componants/screens/Product';
import MyTabs from './componants/screens/TabNavigation';

import Account from './componants/screens/Account';
import { TabNavigator } from 'react-navigation';
import Login from './componants/screens/Login';
import SignUp from './componants/screens/Signup';
import Product from './componants/screens/Product';
import { ProductCard } from './componants/screens/ProductCard';
import EmailCheck from './componants/screens/EmailCheck';
import CheckOut from './componants/screens/Checkout';



const App = () => {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Bottom'
          screenOptions={{
            headerShown:false,
          }}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='MyCart' component={MyCart}/>
            <Stack.Screen name='Product' component={Product}/>
            <Stack.Screen name='EmailCheck' component={EmailCheck}/>
            <Stack.Screen name='CheckOut' component={CheckOut}/>
            <Stack.Screen name='ProductCard' component={ProductCard}/>
            <Stack.Screen name='Bottom' component={MyTabs}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App








/*
<Stack.Navigator
     initialRouteName='Bottom'
      screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MyCart' component={MyCart}/>
        <Stack.Screen name='ProductInfo' component={ProductInfo}/>
        <Stack.Screen name='Bottom' component={MyTabs}/>

        
      </Stack.Navigator>
 <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyCart" component={MyCart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
 <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MyCart' component={MyCart}/>
        <Stack.Screen name='ProductInfo' component={ProductInfo}/>
        
      </Stack.Navigator> */