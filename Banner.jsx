import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
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
    <div className="px-4 lg:px-24 bg-gray-300 items-center">
      <div className="flex w-full flex-col md:flex-row justify-around items-center gap-16 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books
            <span className="text-blue-700"> For The Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Are you an author or publisher looking to expand your reach and
            boost sales? ByteBinder is the perfect place for you. Connect with a
            global audience, easily upload and manage your books, benefit from
            competitive commission rates, and promote your titles with our
            effective marketing tools. Enjoy secure transactions and start
            selling in no time. Join ByteBinder today and take your book sales
            to the next level!
          </p>
          <div>
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
              <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
                Search
              </button>
            </form>
          </div>
        </div>
        {/* right side */}
        <div className="w-[750px]">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
