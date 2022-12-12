import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, TextInput} from 'react-native';
import Input from "./Input";
import Button from "./Button";

function ProductForm({ onSubmit }) {
    const [inputValue, setInputValue] = useState({
        productName: '',
        description: '',
        price: '',
        imageURL: '',

    });

   function inputChangeHandler( enteredValue ,inputIdentifier) {

        setInputValue((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: {  enteredValue }
            }

        })
    }
    

    function submitHandler() {
        const productData = {
            productName: inputValue.productName,
            price: +inputValue.price,
            description: inputValue.description,
            imageURL: inputValue.imageURL


        };
        onSubmit(productData)
    }

    return (
        <View>
            <Input label='Product Title' textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, 'productName'),
                
            }} />
            
            <Input label='Description' textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
               
            }} />
            <Input label='Price' textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangeHandler.bind(this, 'price'),
                
            }}  />
            <Input label='Image Link' textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, 'imageURL'),
                
            }} />


             <Text> Selected Categoty:</Text>

            <Button onPress={submitHandler}>Add Product</Button>
             
        </View>
    );

}

export default ProductForm;



