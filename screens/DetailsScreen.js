import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ProductContext } from "../store/context/product-context";

function DetailsScreen({ route ,navigation }) {
    
    const productCtx= useContext(ProductContext);
    const selectedID = route.params?.productId;
    const selectedProduct = productCtx.products.find((product)=>product.id === selectedID) 
   
    return (
        <View style={styles.screen}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: selectedProduct.imageURL }} resizeMode='contain'  />
            </View>
            <View style={styles.description}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                    <Text style={styles.productName}>{selectedProduct.productName}</Text>
                    </View>
                    <View >
                    <Text style={styles.price}>{selectedProduct.price.toString()}$</Text>
                    </View>
                </View>
                <Text style={styles.productDescription}>{selectedProduct.description}</Text>
            </View>
        </View>
    )
}

export default DetailsScreen;




const styles = StyleSheet.create({
    screen: {
        flex: 2,
        margin: 15,
    },
    imageView: {
        flex: 1,
        marginBottom: 15,


    },
    description: {
        flex: 1,
        marginTop: 15,
        borderRadius: 9,
        elevation: 5,
        backgroundColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 1,
        },
        shadowOpacity: 30,
        shadowRadius: 18,
        padding: 10
    },

    image: {
        width: '100%',
        height: '100%',

    },
    productName: {
        fontSize: 18,
        color: 'white',
        fontWeight:'bold'
    },
    price:{
        fontSize: 14,
        color: 'white',
        fontWeight:'bold',
        
    },
    productDescription: {
        fontSize: 10,
        color: 'white',
        marginTop:8
    },
}
)

