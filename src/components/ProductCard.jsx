import { imageMap } from "../utils/imageMap";

const ProductCard = ({ product }) => {
  const imageSrc =
    imageMap[product.image] || imageMap.placeholder;

  return (
    <div className="min-w-[240px] bg-white rounded-2xl shadow-sm border hover:shadow-lg transition">
      <img
        src={imageSrc}
        alt={product.name}
        className="h-44 w-full object-cover rounded-t-2xl"
        loading="lazy"
      />

      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-800">
          {product.name}
        </h3>

        <p className="text-orange-600 font-semibold mt-2">
          ₹{product.price} / {product.unit}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
