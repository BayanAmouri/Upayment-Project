import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const Input = props => {
    return(

            <TextInput {...props}  style={{...styles.inputConatiner, ...props.style}} />

    )

};

const styles = StyleSheet.create({
    inputConatiner: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 20
    }

});

export default Input;
