import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./Cart.module.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteProduct, resetCart, getTotalPrice } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  if (cart.length === 0) {
    return <p className={classes.cart__empty}>Your shopping cart is empty.</p>
  }

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
              <p className={classes.cart__product_title}>{product.title}</p>
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
          );
        })}
      </div>
      <button className={classes.cart__reset} onClick={resetCart}>
        Reset Cart
      </button>
      <div className={classes.total__wrapper}>
        <h4>Cart Total</h4>
        <div className={classes.total__container}>
          <p>Total</p>
          <p>$ {getTotalPrice()}</p>
        </div>
        <button disabled={!user} className={classes.total__button}>Proceed to checkout</button>
        {!user && <p className={classes.total__info}>Please <Link to="/login">log in</Link> to proceed.</p>}
      </div>
    </div>
  );
};

export default Cart;
