import { error, success } from '../helpers/status-codes';
import { bigcommerceApi } from '../api/bigcommerce/base-api';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const updateProduct = async (event: APIGatewayProxyEvent) => {
  try {
    const { productId } = event.pathParameters ?? {};
    const product = await bigcommerceApi.updateProduct(productId, JSON.parse(event.body ?? '{}'));
    return success(product.data);
  } catch (_error) {
    return error(_error);
  }
};
