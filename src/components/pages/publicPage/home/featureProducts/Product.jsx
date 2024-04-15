import PropTypes from "prop-types";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Product = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="md:mb-6 mb-3.5">
      <div className="relative">
        <img
          className="object-cover w-full h-full border rounded-xl"
          src={product.image}
          alt={product.name}
        />
        <div className="absolute md:top-3.5 top-1.5 md:right-3.5 right-1.5">
          {isLiked ? (
            <button
              className="md:text-2xl text-sm  text-rose-600 md:p-2 p-1 rounded-full bg-white flex items-center justify-center"
              onClick={() => setIsLiked(!isLiked)}
            >
              <GoHeartFill />
            </button>
          ) : (
            <button
              className="md:text-2xl text-sm text-rose-600  md:p-2 p-1 rounded-full bg-white flex items-center justify-center"
              onClick={() => setIsLiked(!isLiked)}
            >
              <GoHeart />
            </button>
          )}
        </div>
      </div>
      <div className="md:flex items-center justify-between mt-3">
        <div className="">
          <h3 className="md:text-xl text-lg font-semibold">{product.name}</h3>
          <p className="md:text-sm text-xs">{product.category_name}</p>
        </div>
        <div className="">
          <h2 className="md:text-2xl">${product.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object,
};
