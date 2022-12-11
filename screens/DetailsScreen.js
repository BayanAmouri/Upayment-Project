import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function DetailsScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Settee_MET_ADA4354.jpg' }} />
            </View>
            <View style={styles.description}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                    <Text style={styles.productName}>Sofa new</Text>
                    </View>
                    <View >
                    <Text style={styles.price}>89$</Text>
                    </View>
                </View>
                <Text style={styles.productDescription}> description sofa new</Text>
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
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
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

