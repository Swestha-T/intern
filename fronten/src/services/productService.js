import API from "../services/api.js"


//get requests 

export const getProducts=()=>{
    API.get("/products")
}

// post requests
export const createProducts =(product)=>{
    API.post("/products",products)
}
export const updateProducts=(id,product)=>{
    API.put(`/products/${id}`,product)

}
export const deleteProduct=(id)=>{
    API.delete(`/products/${id}`);
}