import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className=" px-4 lg:px-24 my-10 flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="" className="rounded md:w-9/12" />
      </div>
      <div className="md:w-1/2 space-y-2">
        <h2 className=" text-5xl font-bold my-5 md:w-3/4 leading-snug ">
          Find your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Use the data from users favorite books to generate personalized book
          recommendations. Incorporate a machine learning algorithm to analyze
          their favorites and suggest new books they might enjoy.
        </p>
        {/* stats */}
        <section className="text-gray-700 body-font flex justify-center items-center">
  <div className="container px-9 py-8 mx-auto">
    <div className="flex flex-wrap m-4 text-center">
      <div className="p-4 md:w-[150px]  sm:w-1/2">
        <div className="border-2 border-gray-600 px-4 py-3 rounded-lg transform transition duration-500 hover:scale-110 ">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">1.7K+</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="p-4 md:w-[150px]  sm:w-1/2">
        <div className="border-2 border-gray-600 px-4 py-3 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-8 h-8 mb-1 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">1.3K+</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      
      <div className="p-4 md:w-[150px]  sm:w-1/2">
        <div className="border-2 border-gray-600 px-4 py-3 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-8 h-8 mb-1 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">1.2K+</h2>
          <p className="leading-relaxed">Listings</p>
        </div>
      </div>
    </div>
  </div>
</section>

        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 ">
            Explore More
          </button>
        </Link>
      </div>
    </div>




  

    
  );
};

export default FavBook;
