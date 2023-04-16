import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, deleteProduct, resetCart } = useContext(CartContext);

  return (
    <div>
      <h3>My Products</h3>
      {cart.map((product) => {
        return (
          <p style={{ marginTop: "80px" }} key={product.id}>
            {product.title} Quantity: {product.quantity}{" "}
            <button onClick={() => deleteProduct(product.id)}>X</button>
          </p>
          // <Product key={product.id} id={product.id} image={product.image} category={product.category} title={product.title} price={product.price} />
        );
      })}
      <button onClick={resetCart}>Reset Cart</button>
    </div>
  );
};

export default Cart;
