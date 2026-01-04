const ProductCard = ({ product }) => {
    return (
      <div className="min-w-[220px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover"
        />
  
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-orange-600 font-bold mt-1">
            {product.price}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  