import { imageMap } from "../utils/imageMap";

const ProductCard = ({ product }) => {
  const imageSrc = imageMap[product.image] || imageMap.placeholder;

  return (
    <article className="group mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white/80 shadow-sm ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/70 hover:ring-orange-100 sm:mx-0 sm:max-w-sm">
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={product.name}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-44 lg:h-48"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-base font-semibold leading-snug text-slate-900 md:text-lg">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {product.unit && (
            <span className="uppercase tracking-[0.18em] text-xs text-slate-400">
              PER {product.unit}
            </span>
          )}
        </p>

        <div className="mt-3 flex items-baseline justify-between gap-2">
          <p className="ml-1 text-lg font-semibold text-orange-600">₹{product.price}</p>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            R.K. TRADERS
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
