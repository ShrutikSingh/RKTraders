import ProductCard from "./ProductCard";

const ProductGallery = ({ title, products }) => {
  if (!products?.length) return null;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 mt-12 md:mt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
              Our products
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-500">
            Carefully curated materials to ensure strength, durability, and a
            refined finish for your construction projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
