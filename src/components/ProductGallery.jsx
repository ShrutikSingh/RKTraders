import ProductCard from "./ProductCard";

const ProductGallery = ({ title, products }) => {
  return (
    <section className="py-10 px-6 md:px-12">
      
      <h2 className="text-2xl font-bold text-orange-700 mb-4">
        {title}
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductGallery;
