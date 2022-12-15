import React from 'react';
import { TextInput, StyleSheet, View ,Text} from 'react-native';



function Input({label , textInputConfig , style }) {
    const inputStyle = [styles.input];      //to add multiline style to the input
    
    if(textInputConfig && textInputConfig.multiline){
        inputStyle.push(styles.inputMultiLine)
    }
    return(
        
        <View style={[styles.inputContainer,style]}>
            
            <TextInput placeholder={label} {...textInputConfig} style={inputStyle}/>
        </View>
    );
}



export default Input;

const styles = StyleSheet.create({
   
    inputContainer: {
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 10,
        margin: 10,
        padding: 5

    },
    label:{
        fontSize:12,
       color:'grey',
        marginBottom:1
    },
    input:{
        
        padding:6,
        borderRadius: 6,
        fontSize: 14
    },
    inputMultiLine:{
        minHeight:100,
        textAlignVertical:'top'
    }

});
