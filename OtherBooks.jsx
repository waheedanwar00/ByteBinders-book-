import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/books/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(4, 10)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Others Books" />
    </div>
  );
};

export default OtherBooks;
