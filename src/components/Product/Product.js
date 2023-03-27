import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/productsService';

const Product = () => {
  const { id } = useParams();

  const productHandler = async (id) => {
    const result = await getProduct(id);
    console.log(result);
  }

  useEffect(() => {
    if (id) {
      productHandler(id);
    }
  }, [id]);

  return (
    <div>Product</div>
  )
}

export default Product