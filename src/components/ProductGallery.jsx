import ProductCard from "./ProductCard";

const ProductGallery = ({ title, products }) => {
  return (
    <section className="py-16 px-6 md:px-12">
      
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        <span className="text-orange-600">{title}</span>
      </h2>

      <div className="max-w-6xl mx-auto flex gap-8 overflow-x-auto scrollbar-hide pb-6">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductGallery;
