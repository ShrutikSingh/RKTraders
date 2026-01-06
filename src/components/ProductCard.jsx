const ProductCard = ({ product }) => {
    return (
      <div className="min-w-[240px] bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">

        
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover"
        />
  
        <div className="p-5">
          <h3 className="text-lg font-medium text-gray-800">
            {product.name}
          </h3>
          <p className="text-orange-600 font-semibold mt-2">
            {product.price}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  