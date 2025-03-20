import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/books/book/${id}`
        );
        setBook(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex w-[90%] mx-auto  gap-20 flex-col mt-40 lg:flex-row p-4 lg:p-24">
      <div className="lg:w-1/2 flex items-center">
        <img
          src={book.imageURL}
          alt={book.bookTitle}
          className="w-full max-w-md"
        />
      </div>
      <div className=" mt-8 lg:mt-0">
        <h2 className="text-5xl font-bold">{book.bookTitle}</h2>
        <p className="text-xl my-2">Author: {book.authorName}</p>
        <p className="text-xl my-2">Category: {book.category}</p>
        <p className="text-xl">Price: ${book.price}</p>
        <p className="text-lg my-4">{book.bookDescription}</p>
        <a
          href={book.bookPDFURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read the PDF
        </a>
      </div>
    </div>
  );
};

export default BookDetail;
