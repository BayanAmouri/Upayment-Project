import React, { useContext } from "react";
import { View, TextInput, Text, StyleSheet,ScrollView, Pressable } from 'react-native';
import { ProductContext } from "../store/context/product-context";
import ProductForm from "../components/ProductForm";
import { storeProduct } from "../utility/http";


function AddProductScreen({route , navigation}) {
    const productCtx =useContext(ProductContext);
     const editedID = route.params?.productId;
    const isEditing = !!editedID;
    const selectedProduct = productCtx.products.find((product) => product.id === editedID); 


  
  

     async function pressAddHandler(productData){
     
        const id = await storeProduct(productData);
        productCtx.addProduct({...productData, id:id}); 
        
        
       navigation.navigate('UPayments Store')
    }

    
    return (
        <View >

        <ProductForm submitLabelHandler={isEditing ? 'Update Product' : 'Add Product'}
                onSubmit={pressAddHandler}
                defaultValues={selectedProduct} />

        </View>
    );
}

export default AddProductScreen;

