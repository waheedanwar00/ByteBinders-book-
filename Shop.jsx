// Shop.js
import React, { useEffect, useState, useContext } from "react";
import { Card } from "flowbite-react";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async (query = "") => {
    const url = query
      ? `http://localhost:5000/api/books/search?q=${query}`
      : "http://localhost:5000/api/books/all-books";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(searchQuery);
  };

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold">All Books are here</h2>
      <p className="text-center text-lg mt-4">
        Looking for something specific? Use the search below to find your next
        favorite book!
      </p>
      <div className="flex justify-center my-4">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            id="search"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search a book by title or author"
            className="py-2 px-2 rounded-l-sm outline-none border"
          />
          <button
            type="submit"
            className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-sm"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id}>
            {book.imageURL && (
              <img
                src={book.imageURL}
                alt={book.bookTitle || "Book Image"}
                className="h-96 m-1 p-3"
              />
            )}
            <div className="relative group">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2">
                {book.bookTitle
                  ? book.bookTitle.length > 25
                    ? `${book.bookTitle.slice(0, 25)}...`
                    : book.bookTitle
                  : "No Title"}
              </h5>
              {book.bookTitle && (
                <span className="absolute w-auto p-2 m-2 min-w-max left-1/2 transform -translate-x-1/2 bottom-full bg-gray-900 text-white text-xs rounded-md shadow-md text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {book.bookTitle}
                </span>
              )}
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400 p-2">
              {book.bookDescription
                ? book.bookDescription.length > 100
                  ? `${book.bookDescription.slice(0, 100)}...`
                  : book.bookDescription
                : "No Description"}
            </p>
            <button
              className="bg-blue-700 font-semibold text-white py-2 rounded"
              onClick={() => addToCart(book)}
            >
              Add to Cart
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
