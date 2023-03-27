import { useEffect } from "react";
import { getProducts } from "../../api/productsService";

const Home = () => {
  //  TODO: move this to Products component
  const productsHandler = async () => {
    const result = await getProducts();
    console.log(result);
  }

  useEffect(() => {
    productsHandler();
  }, []);
  return (
    <div>Home page</div>
  )
}

export default Home;