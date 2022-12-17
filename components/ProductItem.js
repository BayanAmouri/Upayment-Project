import React from "react";
import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function ProductItem({ id, description, price, productName, imageURL }) {

    const navigation = useNavigation();
    function pressHandler() {
        navigation.navigate('Detalis Screen', { productId: id })
    }
    function pressEditHandler() {
       
    }

    return (
        <View style={styles.outerView}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.catButton, pressed ? styles.catButtonPressed : null]}
                onPress={pressHandler}>
                <View style={styles.innerView}>

                    <Image style={styles.image} source={{ uri: imageURL }} resizeMode='contain' />

                </View>
                <View style={styles.title}>
                    <Text style={styles.productName}>{productName}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.productName}>${price}</Text>
                        <Pressable android_ripple={{ color: '#ccc' } } style={({pressed})=> pressed && styles.pressed}
                onPress={pressEditHandler}>
                        <SimpleLineIcons name='pencil' size={12} color="yellow" />
                        </Pressable>
                    </View>
                </View>
            </Pressable>

        </View>
    );
}

export default ProductItem;


const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        margin: 7,
        height: 200,
        backgroundColor:'red',
        borderRadius: 9,
        elevation: 5,
        backgroundColor: '#eeeeee',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        
        
    },
    innerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        

    },
    catButton:
    {
        flex: 1,
        
    },
    catButtonPressed: {
        opacity: 0.25
    },
    productName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        width: '100%',
        height: 100,


    },
    title: {
        
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 9,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 20,
        shadowRadius: 15,
        shadowOffset: { width: 2, height: 1 },

    },
    pressed: {
        opacity: 0.75,
        backgroundColor: '#eeeeee',
        borderRadius: 4
    },
}
)

