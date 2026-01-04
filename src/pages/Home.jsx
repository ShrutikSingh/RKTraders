import Hero from "../components/Hero";
import ProductGallery from "../components/ProductGallery";
import ContactSection from "../components/ContactSection";
import {
  productsGallery1,
  productsGallery2,
} from "../data/products";

const Home = () => {
  return (
    <>
      <Hero />

      <ProductGallery
        title="Construction Essentials"
        products={productsGallery1}
      />

      <ProductGallery
        title="Building Materials"
        products={productsGallery2}
      />

      <ContactSection />
    </>
  );
};

export default Home;
