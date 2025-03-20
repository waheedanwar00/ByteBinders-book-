import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBarsStaggered,
  FaBlog,
  FaXmark,
  FaCartShopping,
} from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalAmount = cart.reduce((total, book) => {
    const price = parseFloat(book.price) || 0;
    return total + price;
  }, 0);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-amber-400" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-10">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            ByteBinders
          </Link>

          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Menu toggle button for small devices */}
          <button
            className="md:hidden text-2xl text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
          </button>

          {/* Add to cart */}
          <div className="flex justify-end items-center text-base gap-10">
            <div className="relative">
              <button onClick={toggleCart} className="relative">
                <FaCartShopping className="w-6 h-6 text-black hover:text-blue-700" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20">
                  <h3 className="text-lg font-bold mb-2">Cart Details</h3>
                  {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    <ul>
                      {cart.map((book) => (
                        <li
                          key={book._id}
                          className="mb-2 flex justify-between items-center"
                        >
                          <div>
                            <h4 className="text-sm font-semibold">
                              {book.bookTitle}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {book.authorName}
                            </p>
                            <p className="text-sm font-bold">${book.price}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(book._id)}
                            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {cart.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-bold">
                        Total: ${totalAmount.toFixed(2)}
                      </h4>
                      <div className="flex mt-2 space-x-2">
                        <button
                          onClick={clearCart}
                          className="bg-gray-500 text-white px-3 py-1 rounded text-xs"
                        >
                          Clear Cart
                        </button>
                        <Link
                          to="/checkout"
                          className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                          onClick={() => setIsCartOpen(false)}
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
        <div
          className={`md:hidden space-y-5 px-3 mt-4 py-6 bg-blue-700 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
