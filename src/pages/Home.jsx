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

  // Single unified gallery showing all products
  const allProducts = products;

  return (
    <main className="pb-10 pt-0 bg-white">
      <Hero />
      <ProductGallery title="Our Products" products={allProducts} />
      <ContactSection />
    </main>
  );
};

export default Home;
