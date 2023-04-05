import { useEffect, useState } from "react";
import { getProducts } from "../../api/productsService";
import classes from "./Home.module.css";

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
    <div className={classes.products__container}>
      {products.map((product) => {
        return (
          <div className={classes.product__wrapper} key={product.id}>
            <img src={product.image} alt="product" className={classes.product__image} />
            <div className={classes.product__description}>
              <p className={classes.product__category}>{product.category}</p>
              <h4 className={classes.product__title}>{product.title}</h4>
              <p className={classes.product__price}>{product.price} $</p>
              <button className={classes.product__button}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
