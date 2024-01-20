import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {

  const addToCartHandler = () => {};
  
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products
      <Link to="/search" className="findmore">More</Link>
      </h1>
      <ProductCard productId="vvbb" photo="https://www.lifewire.com/thmb/WKv1B2Cr8bQS7yhS_btM1HKx5Jc=/850x850/filters:no_upscale():max_bytes(150000):strip_icc()/_hero_horiz_MacBook-Air-M1-2020-Computer-1-030783bfc1ec44f6be220018b3b89239.jpg" name="Macbook" price={100} stock={1} handler={addToCartHandler}/>
    </div>
  )
}

export default Home;