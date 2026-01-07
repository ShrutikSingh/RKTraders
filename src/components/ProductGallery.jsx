import { useEffect, useState } from "react";
import { getProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGallery = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-semibold mb-8">
        <span className="text-orange-600">{title}</span>
      </h2>

      <div className="flex gap-8 overflow-x-auto scrollbar-hide">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
