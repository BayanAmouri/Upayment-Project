import React from 'react';
 
import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function FloatingButton({onPress}){
    SampleFunction=()=>{
 
        Alert.alert("Floating Button Clicked");
   
    }
    return (
 
        <View style={styles.MainContainer}>
   
          <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.TouchableOpacityStyle} >
  
            <Image source={{uri : 'https://cdn-icons-png.flaticon.com/512/61/61183.png'}} 
            
                   style={styles.FloatingButtonStyle} /> 
                  {/* <MaterialIcons name="add-circle-outline" size={50} color="black"  backgroundColor='white'/> */}
          </TouchableOpacity>
   
        </View>
      );

}

export default FloatingButton;


const styles = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : 'white'
    },
   
    TouchableOpacityStyle:{
   
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 80,
    },
   
    FloatingButtonStyle: {
   
      resizeMode: 'contain',
      width: 55,
      height: 55,
    }
  });