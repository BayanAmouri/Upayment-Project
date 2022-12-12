import axios from "axios";


export async function storeProduct(product){
    const response = await axios.post('',product)
     const id = response.data.name   //in the server name faild store the id
     return id;
 }


export async function getProducts(){
    const response = await axios.get('')

    const products = [];

    for (const key in response.data){
        const productObj = {
            id: key,
            productName: response.data[key].productName,
            description: response.data[key].description,
            price: response.data[key].price,
            imageURL: response.data[key].imageURL
           
        };
        products.push(productObj)
    }
    return products;
}
