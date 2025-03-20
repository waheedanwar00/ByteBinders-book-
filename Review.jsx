import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// react icons import
import { FaStar } from "react-icons/fa6";
// import { Avatar } from "flowbite-react";
import proPic1 from "../assets/profile.jpg";
import proPic from "../assets/profile1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Bytebinders excels in delivering a comprehensive and satisfying
                experience for readers, buyers, and sellers. The platform's
                design is clean and intuitive, customer support is responsive
                and helpful, and the overall quality of services offered ensures
                that users can enjoy their literary adventures without any
                hassle. Whether you are a reader looking for your next favorite
                book, a buyer hunting for the best deals, or a seller aiming to
                reach a broad audience, Bytebinders provides the tools and
                support needed to achieve your goals.
              </p>
              <img
                src={proPic}
                alt="Profile"
                className="w-10 mb-4 rounded-full"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, LitHub Ventures Company</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Purchasing books on Bytebinders is straightforward and secure.
                The website's intuitive design ensures that even first-time
                users can navigate the purchasing process with ease. The search
                functionality is robust, offering filters for price range,
                publication date, and customer ratings, which helps in making
                informed purchasing decisions. Bytebinders often features
                special deals and discounts, which are a delight for avid
                readers looking to expand their collection without breaking the
                bank. So visit ByteBinders.
              </p>
              <img
                src={proPic}
                alt="Profile"
                className="w-10 mb-4 rounded-full"
              />
              <h5 className="text-lg font-medium">Linda M. Gojak</h5>
              <p className="text-base">CEO, NovelNest Company</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                For those looking to sell books, Bytebinders provides a
                user-friendly platform that makes the process efficient. The
                platform supports both digital and physical book sales,
                expanding the opportunities for sellers. Bytebinders offers
                valuable tools for tracking sales, managing inventory, and
                communicating with buyers. The fair commission rates and prompt
                payment processing further enhance the selling experience,
                making Bytebinders an attractive option for authors, publishers,
                and independent sellers alike.
              </p>
              <img
                src={proPic}
                alt="Profile"
                className="w-10 mb-4 rounded-full"
              />
              <h5 className="text-lg font-medium">Garo H. Armen</h5>
              <p className="text-base">CEO, BookWave Innovations Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                For those looking to sell books, Bytebinders provides a
                user-friendly platform that makes the process efficient. The
                platform supports both digital and physical book sales,
                expanding the opportunities for sellers. Bytebinders offers
                valuable tools for tracking sales, managing inventory, and
                communicating with buyers. The fair commission rates and prompt
                payment processing further enhance the selling experience,
                making Bytebinders an attractive option for authors, publishers,
                and independent sellers alike.
              </p>
              <img
                src={proPic}
                alt="Profile"
                className="w-10 mb-4 rounded-full"
              />
              <h5 className="text-lg font-medium">Garo H. Armen</h5>
              <p className="text-base">CEO, BookWave Innovations Company</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
