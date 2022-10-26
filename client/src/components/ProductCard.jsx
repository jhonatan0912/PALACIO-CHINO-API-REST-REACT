import React from 'react'
import { useProduct } from "../context/ProductProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { deleteProduct } = useProduct()
  const navigate = useNavigate()

  return (
    <div className='m-4 p-4 rounded border-2'>
      <div className='w-full h-56'>
        <img className='w-full h-full' loading='lazy' src={product.image} alt={product.name} />
      </div>
      <h2 className='font-bold'> {product.name}</h2 >
      <p>S/{product.price}</p>
      <div className="button-container flex gap-2 justify-center mt-5">
        <button
          onClick={() => navigate(`/edit/${product.id}`)}
          className='px-5 py-2 bg-blue-700 rounded text-white hover:scale-105'>
          Edit
        </button>
        <button
          onClick={() => deleteProduct(product.id)}
          className='px-5 py-2 bg-red-700 rounded text-white hover:scale-105'>
          Delete
        </button>
      </div>
    </div >
  )
}

export default ProductCard