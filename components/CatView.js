import React from "react";
import { View ,Text ,Pressable,StyleSheet, FlatList } from "react-native";
import CatItem from "./CatItem";

const CatList = [
    {
        id: 0,
        catName: 'All'   
    },
    {
      id: 1,
      catName: 'womens-clothings'   
    },
    {
        id: 2,
        catName: 'Mens-clothings'   
    },
    {
        id: 3,
        catName: 'Accessories'   
    },
    {
        id: 4,
        catName: 'Furnitures'   
    },
    {
        id: 5,
        catName: 'Elecetronics'   
    }
]
function renderItemHandler(itemData){
    return <CatItem {...itemData.item} />
}

function CatView( ){
    return(
        
        <FlatList
        data={CatList}
        renderItem={renderItemHandler}
        keyExtractor={(item)=>item.id}
        horizontal
        />
       
    )
}

export default CatView;
