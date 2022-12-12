import React from "react";
import {Text} from 'react-native';
import { FlatList} from 'react-native';
import ProductItem from "./ProductItem";

function renderItemHandler(itemData){
    return <ProductItem {...itemData.item} />
}
function ProducsList ({productsList}){
    return(
         <FlatList 
         key={'#'}
         data={productsList}
         renderItem={renderItemHandler}
         keyExtractor={(item)=>item.id}
        numColumns={2}
          />

    );


}

export default ProducsList;