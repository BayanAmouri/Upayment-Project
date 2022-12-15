import React, { useReducer } from "react";
import { createContext } from "react";




export const ProductContext = createContext({
    products: [],
    addProduct: ({productName,description,price,imageURL}) => {},
    setProduct: (products) =>{}
});

function productReducer(state,action){
    switch(action.type){
        case 'ADD':
          return [action.paylod, ...state]
            /* const id = new Date().toString() + Math.random().toString();
           return [{...action.payload,id:id},...state]  */
        case 'SET' :
            const inverted = action.payload.reverse();
            return inverted;
        default:
            return state;
    }
}

function ProductContextProvider ({children}){
    const [productState , dispatch] = useReducer(productReducer,[]);
    function addProduct(productData){
        dispatch({type: 'ADD' , payload: productData})
    }
    function setProduct(products){
        dispatch({type: 'SET',payload:products})
    }

    const value ={
        products: productState,
        addProduct: addProduct,
        setProduct: setProduct
    }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export default ProductContextProvider;