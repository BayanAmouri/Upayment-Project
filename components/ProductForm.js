import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from 'react-native';
import Input from "./Input";
import Button from "./Button";

function ProductForm({ onSubmit, submitLabelHandler, defaultValues }) {
    const [labelIsShown, setLabelIsShowen] = useState(false);
    const [inputValue, setInputValue] = useState({
        productName: { value: defaultValues ? defaultValues.productName : '', isValid: true },
        description: { value: defaultValues ? defaultValues.description : '', isValid: true },
        price: { value: defaultValues ? defaultValues.price.toString() : '', isValid: true },
        imageURL: { value: defaultValues ? defaultValues.imageURL : '', isValid: true },
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {

        setInputValue((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }

        })
        setLabelIsShowen(true);
    }

    function submitHandler() {
        const productData = {
            productName: inputValue.productName.value,
            description: inputValue.description.value,
            price: +inputValue.price.value,
            imageURL: inputValue.imageURL.value

        };

        const productNameIsValid = productData.productName.trim().length > 0;
        const descriptionIsValid = productData.description.trim().length > 0;
        const priceIsValid = !isNaN(productData.price) && productData.price > 0;
        const imageURLIsValid = productData.imageURL.trim().length > 0



        if (!priceIsValid || !productNameIsValid || !descriptionIsValid || !imageURLIsValid) {
            //Alert.alert('Invalid Input', 'Please check your Input');
            setInputValue((curInputValues) => {
                return {
                    productName: { value: curInputValues.productName.value, isValid: productNameIsValid },
                    description: { value: curInputValues.description.value, isValid: descriptionIsValid },
                    price: { value: curInputValues.price.value, isValid: priceIsValid },
                    imageURL: { value: curInputValues.imageURL.value, isValid: imageURLIsValid },

                }
            });
            return;
        }

        onSubmit(productData)



    }

    const formIsValid =
        !inputValue.productName.isValid ||
        !inputValue.description.isValid ||
        !inputValue.price.isValid ||
        !inputValue.imageURL.isValid;

    return (
        <View  >
            <View style={styles.form}>

                {labelIsShown ? <Text styles={{ color: '#eee' }}>   Product title</Text> : null}
                <Input label='Product title' textInputConfig={{

                    onChangeText: inputChangeHandler.bind(this, 'productName'),
                    value: inputValue.productName.value
                }} />
                {labelIsShown ? <Text styles={{ color: '#eee' }}>   Price</Text> : null}
                <Input label='price' textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'price'),
                    value: inputValue.price.value
                }} />

                {labelIsShown ? <Text styles={{ color: '#eee' }}>   Description</Text> : null}
                <Input label='Description' textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputValue.description.value
                }} />

                <Input label='image Link' textInputConfig={{

                    onChangeText: inputChangeHandler.bind(this, 'imageURL'),
                    value: inputValue.imageURL.value
                }} />
                {formIsValid && (<Text>Invalid Input - Please Check your Data </Text>)}
                <Text style={styles.catText}>Selected Category:</Text>
            </View>
            <View s>
                
                <View style={styles.buttonContainer}>
                    <Button onPress={submitHandler} style={styles.buttonStyle}>{submitLabelHandler}</Button>

                </View>
            </View>
        </View>
    )

}

export default ProductForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 50,
        

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 20
    },
    inputRowView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    buttonStyle: {
        minWidth: 120,
        marginHorizontal: 8,


    },
    catText: {
        marginVertical: 3,
        marginHorizontal: 10,
        fontSize: 16
    }

})