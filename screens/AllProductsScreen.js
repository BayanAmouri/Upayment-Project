import React from "react";
import { View, FlatList, Pressable } from "react-native";
import ProductView from "../components/ProductView";
import { Ionicons } from '@expo/vector-icons';

const Dummy_Data = [
    {
        id: 'e1',
        productName: 'sofa new',
        description: 'new sofa new sofa new sofa',
        price: 98,
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Settee_MET_ADA4354.jpg'

    },
    {
        id: 'e2',
        productName: 'iphone 13 pro max',
        description: 'iphone 13 pro max iphone 13 pro max',
        price: 53,
        imageURL: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg'

    },
    {
        id: 'e3',
        productName: 'MacBook pro M1 512g',
        description: 'MacBook pro M1 512g MacBook pro M1 512g ',
        price: 23,
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Late_2016_MacBook_Pro.jpg'

    },
    {
        id: 'e4',
        productName: 'Denim jean',
        description: 'Denim jean Denim jean ',
        price: 33,
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg'

    },
]

function AllProductsScreen({ navigation }) {


    function pressHandler(itemData) {
        navigation.navigate('Detalis Screen', { categoryId: itemData.item.id })
    }
    function RenderItemFunc(itemData) {
        return <ProductView title={itemData.item.productName} price={itemData.item.price} imgUrl={itemData.item.imageURL}
            onPress={pressHandler.bind(this, itemData)} />
    }
    return (
        <View style={{flex:1}}>
            <FlatList
                data={Dummy_Data}
                keyExtractor={(item) => { item.id }}
                renderItem={RenderItemFunc}
                numColumns={2}
            />
            <View style={{  justifyContent: 'flex-end', flexDirection:'row' ,margin:15}}>
                <Pressable onPress={() => navigation.navigate('Add Product')}>
                <Ionicons name="md-add-circle-outline" size={50} color="black" />
                </Pressable>
            </View>
        </View>

    );

}

export default AllProductsScreen;