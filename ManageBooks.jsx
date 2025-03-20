import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books/all-books")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched books:", data);
        setAllBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/books/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert("Book is deleted successfully!");
        setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div className="px-4 my-12">
      <div className="flex justify-between">
        <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

        <Link to={`/admin/dashboard/upload-book`}>
          <button className="bg-teal-600 hover:bg-teal-500 rounded px-4 py-2 text-white font-medium flex items-center gap-3">
            Upload Book{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-teal-600 tracking-wider">
                No.
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4  text-teal-600  tracking-wider">
                Book Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4  text-teal-600  tracking-wider">
                Author Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4  text-teal-600  tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4  text-teal-600  tracking-wider">
                Prices
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4  text-teal-600  tracking-wider">
                Edit or Manage
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {allBooks.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-4 whitespace-no-wrap text-center"
                >
                  No books found.
                </td>
              </tr>
            ) : (
              allBooks.map((book, index) => (
                <tr key={book._id}>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm leading-5 text-gray-800">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-800">
                      {book.bookTitle}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-800">
                      {book.authorName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-800">
                      {book.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-800">
                      ${book.price}.00
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap flex gap-5 items-center">
                    <Link
                      className="text-cyan-600 hover:underline"
                      to={`/admin/dashboard/edit-books/${book._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-red-600 px-4 py-1 font-semibold text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
