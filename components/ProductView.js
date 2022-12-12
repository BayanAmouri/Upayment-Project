import React from 'react';
import { View , Text , Pressable ,StyleSheet ,Platform } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Card from './Card';


function ProductView({products}) {
    return (
       
        <View style={{flex:1 }}>
            
 
        <Card {...products.item} />
 
       
        </View>
      /*   <View style={{backgroundColor:'green'}}>
         <Ionicons name="md-add-circle-outline" size={24} color="black" />
         </View> */
      

    );
}

export default ProductView;

const styles = StyleSheet.create({
    outerView:{
    flex:1,
    margin:15 ,
    height: 170,
    borderRadius: 9,
    elevation:5,
    backgroundColor: '#eeeeee',
    shadowOffset:{width: 0 ,height:2},
    shadowColor : 'black' ,
    shadowOpacity: 0.3,
    shadowRadius:8,
    overflow: Platform.OS ==='android' ?'hidden' : 'visible'
    
    },
    innerView:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    catButton:
    {
        flex:1
    },
    catButtonPressed:{
        opacity: 0.25
    },
    productName:{
        fontSize:12,
        color: 'white'
    },
    image:{
        width: '100%',
        height: 100
    },
    title:{
        
        backgroundColor:'black',
        padding:5,
        borderRadius: 9,
        elevation:4,
        shadowColor : 'grey' ,
        shadowOpacity: 0.25,
        shadowRadius:8,
        shadowOffset:{width: 0 ,height:2},
       
    }
}
)