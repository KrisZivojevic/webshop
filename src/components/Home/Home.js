import { useEffect, useState } from "react";
import { getProducts } from "../../api/productsService";
import classes from "./Home.module.css";
import Product from "../Product/Product";

const Home = () => {
  //  TODO: move this to Products component
  const [products, setProducts] = useState([]);

  const productsHandler = async () => {
    const result = await getProducts();
    console.log(result);
    setProducts(result);
  };

  useEffect(() => {
    productsHandler();
  }, []);

  return (
    <div className={`max-width ${classes.products__container}`}>
      {products.map((product) => {
        return (
          <Product key={product.id} id={product.id} image={product.image} category={product.category} title={product.title} price={product.price} />
        );
      })}
    </div>
  );
};

export default Home;
