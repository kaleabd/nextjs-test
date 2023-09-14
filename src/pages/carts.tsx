import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  removeFromCart,
  clearCart,
} from "../components/redux/slices/cartSlice";

const Cart: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const extractedData = cartItems.items.map((item) => ({
    id: item.id,
    title: item.title,
  }));

  const cartItemsArray = cartItems.items;

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
      {cartItemsArray.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {extractedData.map(({ id, title }: any) => (
            <li key={id} className="mb-4 border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{title}</span>
                <button
                  onClick={() => handleRemoveFromCart(id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItemsArray.length > 0 && (
        <button
          onClick={handleClearCart}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
