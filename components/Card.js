import React from "react";
import { View , Text , Pressable ,StyleSheet ,Platform , Image} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function Card({id,name , url ,price1}){

    const navigation = useNavigation();
    function pressHandler(){
        navigation.navigate('Details Screen',{productId:id})
    }
    
    return(
           
    <View style={styles.outerView }>
    <Pressable android_ripple={{color:'#ccc'}} style={({pressed}) => [styles.catButton,pressed ? styles.catButtonPressed : null]}
    onPress={pressHandler}>
        <View style={styles.innerView}>
            
              <Image style={styles.image} source={{uri:url}} resizeMode='contain'   />

        </View>
        <View style={styles.title}>
              <Text style={styles.productName}>{name}</Text>
              <View style={{flexDirection: 'row' , justifyContent:'space-between'}}>
               <Text  style={styles.productName}>${price1}</Text>
               <SimpleLineIcons name='pencil' size={12} color="yellow" />
              </View>
            </View>
    </Pressable>
   
</View>
    );
}

export default Card;



const styles = StyleSheet.create({
    outerView:{
    flex:1,
    margin:7 ,
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
        alignItems:'center',
        
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
        height: 100,
        
        
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

