import React, { useReducer } from "react";
import { createContext } from "react";




const Dummy_Data = [
    {
        id: 'e1',
        productName: 'sofa new',
        description: 'new sofa new sofa new sofa',
        price: 98,
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Settee_MET_ADA4354.jpg'

    },
    {
        id: 'e2',
        productName: 'iphone 13 pro max',
        description: 'iphone 13 pro max iphone 13 pro max',
        price: 53,
        imageURL: 'c'

    },
    {
        id: 'e3',
        productName: 'MacBook pro M1 512g',
        description: 'MacBook pro M1 512g MacBook pro M1 512g ',
        price: 23,
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Late_2016_MacBook_Pro.jpg'

    },
    {
        id: 'e4',
        productName: 'Denim jean',
        description: 'Denim jean Denim jean ',
        price: 33,
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg'

    },
    {
        id: 'e5',
        productName: 'sofa new',
        description: 'new sofa new sofa new sofa',
        price: 98,
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Settee_MET_ADA4354.jpg'

    },
    {
        id: 'e6',
        productName: 'iphone 13 pro max',
        description: 'iphone 13 pro max iphone 13 pro max',
        price: 53,
        imageURL: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg'

    },
    
    

]

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