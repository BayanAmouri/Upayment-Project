import React, { useContext } from "react";
import { View, FlatList, Pressable } from "react-native";
import ProductView from "../components/ProductView";
import { Ionicons } from '@expo/vector-icons';
import { ProductContext } from "../store/context/product-context";
import ProducsList from "../components/ProductsList";

function AllProductsScreen({ navigation }) {
    const productCtx = useContext(ProductContext);
    return(
        <View>
        <View style={{padding:10}}>
            <ProducsList productsList={productCtx.products}/>
        </View>
         <View style={{  justifyContent: 'flex-end', flexDirection:'row' ,margin:15}}>
         <Pressable onPress={() => navigation.navigate('Add Product')}>
         <Ionicons name="md-add-circle-outline" size={50} color="black" />
         </Pressable>
     </View>
     </View>
    );
/*
    const productCtx = useContext(ProductContext);
    function pressHandler(itemData) {
        navigation.navigate('Detalis Screen', { productId: itemData.item.id })
    }
    function RenderItemFunc(itemData) {
       // return <ProductView  title={itemData.item.productName} price={itemData.item.price} imgUrl={itemData.item.imageURL}
       //     onPress={pressHandler.bind(this, itemData)} />
       return <ProductView products={productCtx.products}  />
    }
    return (
        <View style={{flex:1}}>
            <FlatList
                data={productCtx.products}
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
    */
   

}

export default AllProductsScreen;