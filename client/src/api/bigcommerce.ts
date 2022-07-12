
import axios from 'axios';
export const SERVER_URL = 'http://localhost:3001/dev';

export const getProducts = async () => {
  const result =  await axios.get(`${SERVER_URL}/products`);
  return result.data;
};

interface UpdateProductData {
  id: number;
  data: Partial<Product>
}

export const updateProduct = async ({ id, data }: UpdateProductData) => {
  const cats = await axios.put(`${SERVER_URL}/products/${id}`, data);
  return cats.data;
}

export const bigcommerceApi = {
  getProducts,
  updateProduct
};
