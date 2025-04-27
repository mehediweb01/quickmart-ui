import Hero from "@/component/hero";
import Popular from "@/component/popular";
import Products from "@/component/products";
import Testimonials from "@/component/testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Testimonials />
      <Popular />
    </div>
  );
};

export default Home;
