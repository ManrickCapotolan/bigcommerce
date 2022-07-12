import { BigcommerceApiResult, BigcommerceProduct } from 'types/Bigcommerce';
import { bigcommerceApiInstance } from './base-api';

export const updateProduct = async (id: string, data: BigcommerceProduct) => {
  const product = await bigcommerceApiInstance.put<BigcommerceApiResult<BigcommerceProduct>>(
    `/catalog/products/${id}`,
    data
  );
  return product.data;
};
