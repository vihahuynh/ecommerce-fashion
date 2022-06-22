import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Products from "../components/Products";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <Products filters={{}} />
    </Layout>
  );
};

export default Home;
