import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllProductsScreen from './screens/AllProductsScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddProductScreen from './screens/AddProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='All Products' component={AllProductsScreen}/>
      <Stack.Screen name='Detalis Screen' component={DetailsScreen}/>
      <Stack.Screen name='Add Product' component={AddProductScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


