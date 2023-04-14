import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { getProduct } from "./api/productsService";

const App = () => {
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
    const existingCartItem = cart.find((item) => item.id === id);
    if (existingCartItem) {
      const incrementExistingCartItem = {
        ...existingCartItem,
        quantity: ++existingCartItem.quantity,
      };
      setCart((prevCart) => [...prevCart.filter((item) => item.id !== id), incrementExistingCartItem]);
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

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              deleteProduct={deleteProduct}
              resetCart={resetCart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
