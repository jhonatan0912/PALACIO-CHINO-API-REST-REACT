import { useContext, useState } from "react";
import { getProductsRequest, deleteProductRequest, createProductRequest, getProductRequest, updateProductRequest } from "../api/products.api";
import { ProductContext } from "./ProductContext";



export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct mus be used within a ProductContextProvider");
  }
  return context;
}
export const ProductContextProvider = ({ children }) => {

  const [products, setproducts] = useState([]);

  const createProduct = async (product) => {
    try {
      await createProductRequest(product);
      // setproducts([...products, response.data])
    } catch (error) {
      console.log(error);
    }
  }

  const loadProducts = async () => {
    const response = await getProductsRequest()
    setproducts(response.data);
  }

  const getProduct = async (id) => {
    try {
      const response = await getProductRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const updateProduct = async (id, newFields) => {
    try {
      const response = await updateProductRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  const deleteProduct = async (id) => {
    try {
      const response = await deleteProductRequest(id);
      setproducts(products.filter(products => products.id !== id))
    } catch (error) {
      console.log(error);
    }
  }

  return <ProductContext.Provider value={{ products, loadProducts, createProduct, deleteProduct, getProduct, updateProduct }}>{children}</ProductContext.Provider>
}