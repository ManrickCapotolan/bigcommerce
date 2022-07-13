import { BigcommerceApiResult, BigcommerceProduct } from 'types/Bigcommerce';
import { bigcommerceApiInstance } from './base-api';

export const updateProduct = async (data: BigcommerceProduct[]): Promise<BigcommerceProduct[]> => {
  const product = await bigcommerceApiInstance.put<BigcommerceApiResult<BigcommerceProduct[]>>(
    '/catalog/products',
    data
  );

  return product.data.data;
};
