import React from 'react'
import { useEffect } from "react";
import ProductCard from './ProductCard';
import { useProduct } from "../context/ProductProvider";
import { useAuth0 } from "@auth0/auth0-react";

function ProductsPage() {
  const { products, loadProducts } = useProduct()
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    loadProducts();
  }, []);

  function renderMain() {
    if (products.length === 0) return <h1>No products yet</h1>;

    return products.map(product => (
      <ProductCard product={product} key={product.id} />
    ))

  }

  return (
    <div>
      {
        isAuthenticated ?
          <>
            <h1 className='text-2xl text-center font-bold underline pt-5 lg:text-3xl'>Productos</h1>
            <div className='grid grid-cols-1 justify-center w-6/6 sm:w-4/6 md:grid-cols-2 md:w-5/6 lg:grid-cols-3 xl:w-11/12 xl:grid-cols-4 m-auto text-center'>
              {renderMain()}
            </div>
          </>
          : <h1 className='text-center lg:text-3xl text-red-600 pt-10 font-bold'>Login to management</h1>
      }

    </div>
  );

}
export default ProductsPage