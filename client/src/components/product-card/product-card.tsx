import { FormEvent, useEffect } from 'react';
import { useUpdateProducts } from '../../hooks/bigcommerce';

import './product-card.css';

interface ProductCardProps {
  data: Product;
  disabled: boolean;
  handlePropertyChange(property: string, value: string | number): void;
}

const ProductCard = ({ data, disabled, handlePropertyChange }: ProductCardProps) => {
  const updateProduct = useUpdateProducts();

  useEffect(() => {
    if (disabled) {
      updateProduct.reset();
    }
  }, [disabled]);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value, type } = e.currentTarget;
    handlePropertyChange(name, type === 'number' ? Number(value) : value);
  }

  const handleClick = () => {
    updateProduct.mutate({
      data: [data]
    })
  }

  const disableField = disabled || updateProduct.isLoading;

  return (
    <div className='product-card'>
      <h3 className='product-card__heading'>{ data.name }</h3>
      <div className='product-card__content'>
        <div className='product-property'>
          <label>
            <span className='product-property__label'>Price:</span>
            <input name='price' type="number" value={data.price} onChange={handleChange} disabled={disableField}/>
          </label>
        </div>
        <div className='product-property'>
          <label>
            <span className='product-property__label'>Quantity:</span>
            <input name='inventory_level' type="number" value={data.inventory_level} onChange={handleChange} disabled={disableField}/>
          </label>
        </div>
        <button onClick={handleClick} disabled={disableField}>Update</button>
      </div>
      {
        updateProduct.isSuccess && <p className='product-card__footnote'>Success!</p>
      }
    </div>
  )
};

export default ProductCard;