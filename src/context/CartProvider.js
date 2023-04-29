import { useState } from "react";
import { CartContext } from "./CartContext";
import { getProduct } from "../api/productsService";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const deleteProduct = (id) => {
    const result = cart.filter((item) => item.id !== id);
    setCart(result);
  };

  const resetCart = () => {
    setCart([]);
  };

  const addToCart = async (id) => {
    // check if item exists in cart
    const existingCartItem = cart.find((item) => item.id == id);
    if (existingCartItem) {
      const incrementExistingCartItem = {
        ...existingCartItem,
        quantity: ++existingCartItem.quantity,
      };
      setCart((prevCart) => [
        ...prevCart.filter((item) => item.id != id),
        incrementExistingCartItem,
      ]);
    }
    if (!existingCartItem) {
      const newCartItem = await getProduct(id);
      // add quantity to newCartItem
      const cartItemWithQuantity = {
        ...newCartItem,
        quantity: 1,
      };
      setCart((prevCart) => [...prevCart, cartItemWithQuantity]);
    }
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => (total += product.quantity * product.price));
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteProduct, resetCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
