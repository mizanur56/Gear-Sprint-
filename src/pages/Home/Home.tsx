import { CategorySwiper } from "./CategorySwiper/CategorySwiper";
import CompanyFeatures from "./CompanyFeatures/CompanyFeatures";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import HeroBanner from "./HeroBanner/HeroBanner";
import NotifyUs from "./NotifyUs/NotifyUs";
import { TestimonialSlider } from "./TestimonialSlider/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <CategorySwiper />
      <FeaturedProduct />
      <CompanyFeatures />
      <TestimonialSlider />
      <NotifyUs />
    </div>
  );
};

export default Home;
