// components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, book) => total + book.price, 0);

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((book) => (
              <li
                key={book._id}
                className="mb-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{book.bookTitle}</h3>
                  <p>By: {book.authorName}</p>
                  <p>Price: ${book.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(book._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">
              Total: ${totalAmount.toFixed(2)}
            </h3>
            <div className="flex mt-4 space-x-4">
              <button
                onClick={clearCart}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
