import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  removeFromCart,
  clearCart,
} from "../components/redux/slices/cartSlice";
import Modal from "react-modal";

const Checkout: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFinish = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      dispatch(clearCart());
      setIsModalOpen(false);
    }, 3000);
  };

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      {cartItems.items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.items.map((item: any) => (
            <li
              key={item.id}
              className="mb-4 border-b border-gray-200 pb-4 flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{item.title}</span>
              <span>${item.price}</span>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.items.length > 0 && (
        <>
          <button
            onClick={handleFinish}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            Finish
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Finish Confirmation"
            className={
              "fixed flex flex-col items-center justify-center h-screen w-full bg-white rounded-lg"
            }
          >
            <h3 className="text-2xl font-semibold mb-4">
              Thank you for your purchase!
            </h3>
            <p>Your payment has been completed.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Close
            </button>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Checkout;
