// src/pages/Home.jsx
import Hero from "../components/Hero";
import ProductGallery from "../components/ProductGallery";
import ContactSection from "../components/ContactSection";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading products...</p>
      </div>
    );
  }

  // Split products into two galleries (example logic)
  const gallery1 = products.slice(0, Math.ceil(products.length / 2));
  const gallery2 = products.slice(Math.ceil(products.length / 2));

  return (
    <>
      <Hero />

      <ProductGallery
        title="Construction Essentials"
        products={gallery1}
      />

      <ProductGallery
        title="Building Materials"
        products={gallery2}
      />

      <ContactSection />
    </>
  );
};

export default Home;
