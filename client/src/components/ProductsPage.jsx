import React from 'react'
import { useEffect, useState } from "react";
import { getProductsRequest } from "./../api/products.api";
import ProductCard from './ProductCard';
import { useProduct } from "../context/ProductProvider";

function ProductsPage() {
  const { products, loadProducts } = useProduct()

  useEffect(() => {
    loadProducts()
  }, []);

  function renderMain() {
    if (products.length === 0) return <h1>No products yet</h1>;

    return products.map(product => (
      <ProductCard product={product} key={product.id} />
    ))

  }

  return (
    <div>
      <h1>Products</h1>
      {renderMain()}
    </div>
  );

}
export default ProductsPage