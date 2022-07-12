import React from 'react';
import ProductCard from '../components/Product';
import { useGetProducts } from '../queries/bigcommerce';

const ProductList = () => {
  const products = useGetProducts();

  if (products.isLoading) {
    return <p>loading...</p>
  } 

  if (products.isSuccess) {
    return (
      <div>
        { products.data.map((product) => <ProductCard key={product.id} data={product}/>)}
      </div>
    )
  }

  return <></>
};

export default ProductList;
