import AppSection from "./app/AppSection";
import Hero from "./banner/Hero";
import HomeBanner from "./banner/Banner";
import Categories from "./categories/Categories";
import Products from "./featureProducts/Products";
import Newsletter from "./newsletter/Newsletter";
import PopularProducts from "./populer/PopularProducts";

const Home = () => {
  return (
    <div className="">
      {/* <Hero /> */}
      <HomeBanner/>
      <Products />
      {/* <Newsletter /> */}
      <PopularProducts />
      <Categories />
      <AppSection />
    </div>
  );
};

export default Home;
