import axios from "axios";

export const createProductRequest = async (product) => {
  return await axios.post('https://palacio-chino-back-production.up.railway.app/api/products', product);
}

export const getProductsRequest = async () => {
  return await axios.get('https://palacio-chino-back-production.up.railway.app/api/products')
}

export const getProductRequest = async (id) => {
  return await axios.get(`https://palacio-chino-back-production.up.railway.app/api/products/${id}`)
}

export const updateProductRequest = async (id, newFields) => {
  return await axios.patch(`https://palacio-chino-back-production.up.railway.app/api/products/${id}`, newFields);
}

export const deleteProductRequest = async (id) => {
  return await axios.delete(`https://palacio-chino-back-production.up.railway.app/api/products/${id}`);
}
