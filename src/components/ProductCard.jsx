import { imageMap } from "../utils/imageMap";

const ProductCard = ({ product }) => {
  return (
    <div className="min-w-[240px] bg-white rounded-2xl shadow-sm border hover:shadow-lg transition">
      <img
        src={imageMap[product.image]}
        alt={product.name}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-orange-600 font-semibold mt-2">
          ₹{product.price} / {product.unit}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
