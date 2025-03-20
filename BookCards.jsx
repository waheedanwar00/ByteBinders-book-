// BookCards.js
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";

const BookCards = ({ headline, books }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <div className="relative">
                <Link to={`/books/${book._id}`}>
                  <img src={book.imageURL} alt="Book" />
                </Link>
                <button
                  onClick={() => addToCart(book)}
                  className="absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded"
                >
                  <FaCartShopping className="w-4 h-4 text-white" />
                </button>
              </div>
              <div>
                <h3>{book.bookTitle}</h3>
                <p>{book.authorName}</p>
                <p>${book.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
