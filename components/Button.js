import React from "react";
import { Pressable, View, Text, StyleSheet, TouchableOpacity } from "react-native";


function Button({ children, onPress, mode, style }) {
     return(
         <View style={style}>
             <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
                 <View style={[styles.button,mode === 'flat' && styles.flat]}>
                     <Text  style={[styles.buttonText,mode === 'flat' && styles.flatText]}>{children}</Text>
                 </View>
             </Pressable>
         </View>
     ) 
   

}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#000000',
        
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    flatText: {
        color: 'white',

    },
    pressed: {
        opacity: 0.75,
        backgroundColor: '#eeeeee',
        borderRadius: 4
    },


  

});