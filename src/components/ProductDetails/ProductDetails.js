import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/productsService';
import classes from './ProductDetails.module.css'

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const productHandler = async (id) => {
    const result = await getProduct(id);
    setProduct(result);
  }

  useEffect(() => {
    if (id) {
      productHandler(id);
    }
  }, [id]);

  return (
    <div className={`max-width ${classes.details__container}`}>
      <img
          src={product?.image}
          alt="product"
          className={classes.details__image}
        />
        <div className={classes.details__specifications}>
          <p className={classes.details__category}>{product?.category}</p>
          <h2 className={classes.details__title}>{product?.title}</h2>
          <p className={classes.details__price}>{product?.price} $</p>
          <p className={classes.details__description}>{product?.description}</p>
          <button className={classes.details__button}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetails;