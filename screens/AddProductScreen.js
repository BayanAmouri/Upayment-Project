import React, { useContext } from "react";
import { View, TextInput, Text, StyleSheet,ScrollView, Pressable } from 'react-native';
import { ProductContext } from "../store/context/product-context";
import ProductForm from "../components/ProductForm";


function AddProductScreen({route , navigation}) {
    const productCtx =useContext(ProductContext);
  

    function pressAddHandler(productData){
        productCtx.addProduct(productData);
       // navigation.goBack();
       navigation.navigate('All Products')
    }
    return (
        <View >
            {/* <View >
                <TextInput style={styles.input} placeholder="Product title" />
                <TextInput style={styles.input} placeholder="Price" />
                <TextInput style={styles.input} placeholder="Description" multiline
                    numberOfLines={4} />
                <TextInput style={styles.input} placeholder="Image Link" />
                <Text> Selected Categoty:</Text>
                
            </View>

            <View style={styles.outerContainer}>
                <Pressable onPress={() => { }}
                    style={({ pressed }) => pressed ? { opacity: 0.5 } : {}} android_ripple={{ color: 'white' }}>
                    <View style={styles.buton} >
                        <Text style={styles.buttonTitle}>Add Product</Text>
                    </View>
                </Pressable>
            </View> */}
        <ProductForm onSubmit={pressAddHandler} />

        </View>
    );
}

export default AddProductScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 10,
        margin: 10,
        padding: 5

    },
    outerContainer: {
        backgroundColor: '#000000',

        marginVertical: 50,
        marginHorizontal: 20,
        borderRadius: 16,
        justifyContent:'flex-end'
    },
    buttonTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',


    },
    buton: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'

    },
    pressed: {
        opacity: 0.7
    }



}
);