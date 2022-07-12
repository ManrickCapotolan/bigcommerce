import axios from 'axios';
import { getProducts } from './get-products';
import { updateProduct } from './update-product';

export const bigcommerceApiInstance = axios.create({
  baseURL: process.env.BIGCOMMERCE_URL,
  headers: {
    'Accept': 'application/json',
    'content-type': 'application/json',
    'X-Auth-Token': process.env.BIGCOMMERCE_ACCESS_TOKEN
  }
});

export const bigcommerceApi = {
  getProducts,
  updateProduct,
};
