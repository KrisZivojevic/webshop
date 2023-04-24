import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./Cart.module.css";

const Cart = () => {
  const { cart, deleteProduct, resetCart } = useContext(CartContext);

  return (
    <div className={classes.cart__wrapper}>
      <h3>My Products</h3>
      <div className={classes.cart__header}>
        <p></p>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p></p>
      </div>
      <div className={classes.cart__products_container}>
        {cart.map((product) => {
          return (
            <div className={classes.cart__product_container} key={product.id}>
              <img
                src={product?.image}
                alt="product"
                className={classes.cart__image}
              />
              <p>{product.title}</p>
              <p>$ {product.price}</p>
              <p>{product.quantity}</p>
              <div className={classes.cart__button_wrapper}>
                <button
                  className={classes.cart__button}
                  onClick={() => deleteProduct(product.id)}
                >
                  X
                </button>
              </div>
            </div>
            // <Product key={product.id} id={product.id} image={product.image} category={product.category} title={product.title} price={product.price} />
          );
        })}
      </div>
      <button className={classes.cart__reset} onClick={resetCart}>Reset Cart</button>
    </div>
  );
};

export default Cart;
