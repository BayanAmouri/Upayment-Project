import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllProductsScreen from './screens/AllProductsScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddProductScreen from './screens/AddProductScreen';
import ProductContextProvider from './store/context/product-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductContextProvider>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='UPayments Store' component={AllProductsScreen}/>
      <Stack.Screen name='Detalis Screen' component={DetailsScreen}/>
      <Stack.Screen name='Manage Product' component={AddProductScreen} />
    </Stack.Navigator>
   </NavigationContainer>
   </ProductContextProvider>
  );
}


