import axios from "axios";

export const createProductRequest = async (product) => {
  return await axios.post('http://localhost:5173/', product);
}

export const getProductsRequest = async () => {
  return await axios.get('http://localhost:5173/')
}

export const getProductRequest = async (id) => {
  return await axios.get(`http://localhost:5173/${id}`)
}

export const updateProductRequest = async (id, newFields) => {
  return await axios.patch(`http://localhost:5173/${id}`, newFields);
}

export const deleteProductRequest = async (id) => {
  return await axios.delete(`http://localhost:5173/${id}`);
}
