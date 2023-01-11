import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './componants/screens/Home'
import MyCart from './componants/screens/MyCart';
import ProductInfo from './componants/screens/ProductInfo';
import MyTabs from './componants/screens/TabNavigation';

import Account from './componants/screens/Account';
import { TabNavigator } from 'react-navigation';



const App = () => {

const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
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