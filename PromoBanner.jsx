import React, { useState } from "react";
import { Link } from "react-router-dom";
import bookPic from "../assets/awardbooks.png";

const PromoBanner = () => {
  const [promoCode, setPromoCode] = useState("");

  const generatePromoCode = () => {
    const code = `PROMO${Math.floor(1000 + Math.random() * 9000)}`;
    setPromoCode(code);
  };

  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Get Discount on Your Favorite Books
          </h2>
          {promoCode ? (
            <div className="mt-4 text-lg font-semibold text-green-700">
              Your Promo Code: {promoCode}
            </div>
          ) : (
            <button
              onClick={generatePromoCode}
              className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300"
            >
              Get Promo Code
            </button>
          )}
        </div>

        <div>
          <img src={bookPic} alt="Award Books" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
