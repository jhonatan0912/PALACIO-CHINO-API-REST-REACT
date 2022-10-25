import React from 'react'
import { useProduct } from "../context/ProductProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { deleteProduct } = useProduct()
  const navigate = useNavigate()

  return (
    <div >
      <h2>{product.name}</h2>
      <img loading='lazy' src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <div className="button-container">
        <button onClick={() => navigate(`/edit/${product.id}`)} >
          Edit
        </button>
        <button onClick={() => deleteProduct(product.id)}>
          Delete
        </button>
      </div>
    </div >
  )
}

export default ProductCard