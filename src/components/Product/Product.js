import React, { useContext } from "react";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Product = (props) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className={classes.product__wrapper} key={props.id}>
      <Link to={`/products/${props.id}`}>
        <img
          src={props.image}
          alt="product"
          className={classes.product__image}
        />
        <div className={classes.product__description}>
          <p className={classes.product__category}>{props.category}</p>
          <h4 className={classes.product__title}>{props.title}</h4>
          <p className={classes.product__price}>{props.price} $</p>
        </div>
      </Link>
      <button
        className={classes.product__button}
        onClick={() => addToCart(props.id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
