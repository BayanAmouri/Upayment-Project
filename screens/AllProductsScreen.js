import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, Pressable } from "react-native";
import { ProductContext } from "../store/context/product-context";
import ProducsList from "../components/ProductsList";
import { getProducts } from "../utility/http";
import FloatingButton from "../components/FloatingButton";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorOverlay from "../components/ErrorOverlay";
import CatView from "../components/CatView";

function AllProductsScreen({ navigation }) {
   const [isFetching,setIsFetching]= useState(true);
    const [error,setError]= useState();
    const productCtx = useContext(ProductContext);
    
         useEffect(()=>{
            async function fetchProducts(){
                setIsFetching(true);
                try{
                const products= await getProducts();
                productCtx.setProduct(products);
                }
                catch(error){
                    setError('could not fetch data!!')
                }
                setIsFetching(false);
            }
            fetchProducts();
        },[])

        function errorHandler(){     
            setError(null)           
        }

        if(error && !isFetching){
            return <ErrorOverlay message={error} onConfirm={errorHandler}/>
        }
       if (isFetching){
        return <LoadingOverlay />
       }
    
    return (
        <View style={{flex:1}}>
            <View>
            <CatView />
            </View>
            
            <View style={{ padding: 10 }}>
                <ProducsList productsList={productCtx.products} />
            </View>
            <View style={{flex:1}}>
               <FloatingButton onPress={() => navigation.navigate('Manage Product')} />
            </View>
           
        </View>
    );
   


}

export default AllProductsScreen;