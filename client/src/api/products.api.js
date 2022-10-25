import axios from "axios";

export const createProductRequest = async (product) => {
  return await axios.post('http://localhost:3000/api/products', product);
}

export const getProductsRequest = async () => {
  return await axios.get('http://localhost:3000/api/products')
}

export const getProductRequest = async (id) => {
  return await axios.get(`http://localhost:3000/api/products/${id}`)
}

export const updateProductRequest = async (id, newFields) => {
  return await axios.patch(`http://localhost:3000/api/products/${id}`, newFields);
}

export const deleteProductRequest = async (id) => {
  return await axios.delete(`http://localhost:3000/api/products/${id}`);
}
