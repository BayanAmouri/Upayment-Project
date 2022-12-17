import React from "react";

import { FlatList, View} from 'react-native';
import ProductItem from "./ProductItem";

function renderItemHandler(itemData){
    return <View style={{width:'50%'}}>
     <ProductItem {...itemData.item} /></View>
}
function ProducsList ({productsList}){
    return(
        
         <FlatList 
         data={productsList}
         renderItem={renderItemHandler}
         keyExtractor={(item)=>item.id}
        numColumns={2}
       
        
          />
         

    );


}

export default ProducsList;