import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "./redux/slices/cartSlice";
import Link from "next/link";

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const productInCart = cartItems.items.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const buttonText = cartItems.items.find((item) => item.id === product.id)
    ? "View in Cart"
    : "Add to Cart";
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-2">
      <div className="w-52 h-40 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <h3 className="text-xl font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold text-blue-600 mt-2">
        Price: ${product.price}
      </p>
      {productInCart ? (
        <Link href="/carts">
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded mt-4"
            onClick={handleAddToCart}
          >
            {buttonText}
          </button>
        </Link>
      ) : (
        <button
          className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded mt-4"
          onClick={handleAddToCart}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
