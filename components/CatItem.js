import React, { useState } from "react";
import { View ,Text ,Pressable,StyleSheet } from "react-native";

function CatItem( {id,catName }){
    const [pressed,setpressed] = useState(false)
    function pressHandler(){
        setpressed(!pressed)
    }
    return(
        
        <View >
            <Pressable onPress={pressHandler}>
                <View style={[styles.container,pressed  && styles.pressedContainer]}>
                <Text style={[styles.text,pressed  && styles.pressedText]}>{catName}</Text>
                </View>
            </Pressable>
        </View>
        
    
    )
}

export default CatItem;

const styles = StyleSheet.create({
   container:{
    borderWidth:1,
    borderRadius:6,
    backgroundColor:'#eeeeee',
    padding:10,
    margin:5

   },
   pressedContainer:{
    borderWidth:1,
    borderRadius:6,
    backgroundColor:'#000',
    padding:10,
    margin:5

   },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 14,
        fontWeight:'bold'
    },
    pressedText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight:'bold'
    },
    
    pressed: {
       
        backgroundColor: '#000',
       
    },


  

});