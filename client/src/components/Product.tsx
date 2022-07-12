import React, { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { bigcommerceApi } from '../api/bigcommerce';

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const [price, setPrice] = useState(data.price);
  const [inventory_level, setInventoryLevel] = useState(data.inventory_level);

  const updateProduct = useMutation(bigcommerceApi.updateProduct, {
    onSettled: (data) => {
      setPrice(data.price);
      setInventoryLevel(data.inventory_level)
    }
  });

  const handleChange = (update: Function) => (e: FormEvent<HTMLInputElement>) => {
    update(e.currentTarget.value);
  }

  const handleClick = () => {
    updateProduct.mutate({
      id: data.id,
      data: {
        ...data,
        price,
        inventory_level
      }
    })
  }

  return (
    <div>
      <h3>{ data.name }</h3>
      <label>
        Price: <input name='price' value={price} onChange={handleChange(setPrice)} disabled={updateProduct.isLoading}/>
      </label>
      <label>
        Quantity: <input name='inventory_level' value={inventory_level} onChange={handleChange(setInventoryLevel)} disabled={updateProduct.isLoading}/>
      </label>
      <button onClick={handleClick} disabled={updateProduct.isLoading}>Update</button>
    </div>
  )
};

export default ProductCard;