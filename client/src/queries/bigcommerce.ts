import { useQuery, UseQueryResult } from 'react-query';
import { bigcommerceApi } from '../api/bigcommerce';

export const useGetProducts = (): UseQueryResult<Product[]> => {
  return useQuery(['products'], bigcommerceApi.getProducts)
}
