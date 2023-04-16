import { useEffect, useState } from "react";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../../api/productsService";
import classes from "./Home.module.css";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

    const productsHandler = async () => {
    const result = await getProducts();
    setProducts(result);
  };
  const categoriesHandler = async () => {
    const result = await getCategories();
    setCategories(result);
  };
  const productsByCategoryHandler = async (category) => {
    const result = await getProductsByCategory(category);
    console.log(result);
    setProducts(result);
  };

  useEffect(() => {
    productsHandler();
    categoriesHandler();
  }, []);

  return (
    <div className={`max-width ${classes.products__container}`}>
      <ul className={classes.categories__list}>
        <li className={classes.categories__item} onClick={productsHandler}>
          all
        </li>
        {categories.map((category) => {
          return (
            <li
              key={category}
              className={classes.categories__item}
              onClick={() => productsByCategoryHandler(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Home;
