import { BigcommerceApiResult, BigcommerceProduct } from 'types/Bigcommerce';
import { bigcommerceApiInstance } from './base-api';

export const getProducts = async (): Promise<BigcommerceProduct[]> => {
  const product = await bigcommerceApiInstance.get<BigcommerceApiResult<BigcommerceProduct[]>>('/catalog/products');
  return product.data.data;
};
