import React from 'react'
import {FaEdit} from "react-icons/fa"

const ProductList = ({products, onDelete, onEdit}) => {


   


  return (
    <>
    

   { products.map((product)=>(
   
        <div  className='card'>
            <h2> product name </h2>
            <h2>product price</h2>
            <div>
            <button   >
                <FaEdit />
            </button>
            <button  ><FaTrash /></button>
            </div>

        </div>
    )}

   
      
    </>
  )
}

export default ProductList