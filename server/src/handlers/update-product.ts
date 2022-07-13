import { error, success } from '../helpers/status-codes';
import { bigcommerceApi } from '../api/bigcommerce/base-api';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const updateProduct = async (event: APIGatewayProxyEvent): Promise<APIResponse> => {
  try {
    const data = JSON.parse(event.body ?? '{}');
    const product = await bigcommerceApi.updateProduct(data);

    return success(product);
  } catch (_error) {
    return error(_error);
  }
};
