import { error, success } from '../helpers/status-codes';
import { bigcommerceApi } from '../api/bigcommerce/base-api';

export const getProducts = async (): Promise<APIResponse> => {
  try {
    const products = await bigcommerceApi.getProducts();

    return success(products);
  } catch (_error) {
    return error(_error);
  }
};
