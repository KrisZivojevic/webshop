import React from 'react'
import Product from '../Product/Product';

const Cart = (props) => {
  
  return (
    <div>
      <h3>My Products</h3>
      {props.cart.map((product) => {
        return (
          <p style={{marginTop: "80px"}} key={product.id}>{product.title} Quantity: {product.quantity} <button onClick={() => props.deleteProduct(product.id)}>X</button></p>
          // <Product key={product.id} id={product.id} image={product.image} category={product.category} title={product.title} price={product.price} />
        );
      })}
      <button onClick={props.resetCart}>Reset Cart</button>
    </div>
  )
}

export default Cart;