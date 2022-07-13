import { useEffect, useState } from 'react';
import ProductCard from '../product-card/product-card';
import { useGetProducts, useUpdateProducts } from '../../hooks/bigcommerce';
import './product-list.css'

interface ProductData {
  [key: string]: Product;
}

const ProductList = () => {
  const [products, setProducts] = useState({} as ProductData);

  const updateProduct = useUpdateProducts();
  const productFetchData = useGetProducts();

  useEffect(() => {
    if (productFetchData.data) {
      const data = productFetchData.data.reduce((acc, cur) => {
        acc[cur.id] = { ...cur };
        return acc;
      }, {} as ProductData);

      setProducts(data);
    }
  }, [productFetchData.data]);

  const handleClick = () => {
    updateProduct.mutate({
      data: Object.values(products)
    })
  }

  const handlePropertyChange = (id: number) => (property: string, value: string | number) => {
    setProducts({
      ...products,
      [id]: {
        ...products[id],
        [property]: value,
      }
    })
  };

  if (productFetchData.isLoading) {
    return <div className='product-list'>
      <p className='product-list__loading'>loading...</p>
    </div>
  } 

  if (productFetchData.isSuccess && Object.keys(products).length) {
    return (
      <div className='product-list'>
        <h1 className='product-list__heading'>Products</h1>
        <div className='product-list__records'>
          {
            productFetchData.data.map((product) => 
              <ProductCard
                key={product.id}
                data={products[product.id]}
                handlePropertyChange={handlePropertyChange(product.id)}
                disabled={updateProduct.isLoading}
              />
            ) 
          }
        </div>
        <button
          onClick={handleClick}
          disabled={updateProduct.isLoading}
          className='product-list__button'
        >
          Bulk update
        </button>
        {
          updateProduct.isSuccess && <p className='product-list__footnote'>Success!</p>
        }
      </div>
    )
  }

  return <></>
};

export default ProductList;
