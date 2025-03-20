import React from "react";
import Blog4 from "../assets/unsplashblog7.jpg";
import Blog5 from "../assets/unsplashblog2.jpg";
import Blog6 from "../assets/unsplashblog3.jpg";
import Blog8 from "../assets/unsplashblog6.jpg";

const Blog = () => {
  return (
    <>
      <main className="py-12 mt-20 md:px-20 sm:px-14 px-6">
        <h1 className="text-5xl px-2 py-5 font-semibold sm:flex items-center rounded shadow-md">
     Our Lastest <span className="text-blue-700"> Blog</span>
        </h1>
        <div className="sm:flex items-center shadow-md">
          <div className="md:px-10 sm:px-5">
            <h1 className="text-gray-800 font-bold text-2xl my-2">
              <span className="text-blue-700">ByteBinders</span> Bookstore: A
              Haven for <span className="text-blue-700">Book</span> Lovers
            </h1>
            <p className="text-gray-700 mb-2 md:mb-6">
              Welcome to ByteBinders, your go-to destination for all things
              books! At ByteBinders, we believe in the power of stories to
              transform lives, and we're committed to bringing you the best in
              literature from around the world. Whether you're a lifelong
              bibliophile or just beginning your reading journey, our store
              offers a wide array of books to suit every taste and interest.
            </p>
            <div className="flex justify-between mb-2">
              <span className="font-thin text-sm text-blue-700">
                Jul 14th 2024
              </span>
            </div>
          </div>
          <div>
            <img
              className="bg-cover w-[1180px] h-[300px] rounded py-2"
              src={Blog6}
              alt=""
            />
          </div>
        </div>
        <div className="mt-6 md:flex space-x-6 ">
          <div className="shadow-md ">
            <img src={Blog5} alt="" className="w-[1080px] h-[450px]" />
            <div className="px-4">
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">
                What We Offer
              </h1>
              <p className="text-gray-700 mb-2">
                At ByteBinders, we pride ourselves on our diverse and carefully
                curated selection of books. Our shelves are filled with genres
                ranging from fiction and non-fiction to mystery, science
                fiction, fantasy, horror, and more Whether you're looking for
                the latest bestseller, a timeless classic, or a hidden gem,
                you're sure to find something that captivates you....
              </p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">Jul 14th 20240</span>
                <span className="mb-2 text-gray-800 font-bold">Read more</span>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <img src={Blog4} alt="" className="w-[1080px] h-[450px]" />
            <div className="px-6">
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">
                Our Story
              </h1>
              <p className="text-gray-700 mb-2">
                ByteBinders started as a small, independent bookstore with a
                simple mission: to create a community space where book lovers
                can discover new titles, share their favorite reads, and connect
                with fellow enthusiasts. Over the years, we've grown into a
                beloved local institution, thanks to the support of our loyal
                customers and the dedication of our passionate team.
              </p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">Jul 14th 2024</span>
                <span className="mb-2 text-gray-800 font-bold">Read more</span>
              </div>
            </div>
          </div>
          <div className="shadow-md">
            <img src={Blog8} alt="" className="w-[1080px] h-[450px]" />
            <div className="px-4">
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2">
                Events and Community
              </h1>
              <p className="text-gray-700 mb-2">
                At ByteBinders, we believe that books have the power to bring
                people together. That's why we regularly host events such as
                author signings, book readings, and discussion groups. These
                events provide a wonderful opportunity to meet your favorite
                authors, discuss your latest reads with fellow book lovers, and
                immerse yourself in the literary community.
              </p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">Jul 14th 2024</span>
                <span className="mb-2 text-gray-800 font-bold">Read more</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex items-center shadow-md mt-10">
          <div>
            <img
              className="bg-cover w-[2080px] h-[500px]"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="md:px-10 sh sm:px-5">
            <h1 className="text-gray-800 font-bold text-2xl my-2"><span className="text-blue-700">Visit</span> Us</h1>
            <p className="text-gray-700 mb-2 md:mb-6">
              ByteBinders is more than just a bookstore; it's a community hub
              for book lovers of all ages. Come visit us and explore our cozy
              reading nooks, enjoy a cup of coffee in our café, and find your
              next great read. Whether you're looking to escape into a novel,
              learn something new, or connect with others who share your passion
              for books, ByteBinders is the place to be. Thank you for being a
              part of the ByteBinders community. We look forward to welcoming
              you to our store and sharing the joy of reading with you. Happy
              reading!
            </p>
            <div className="flex justify-between mb-2">
              <span className="font-thin text-sm">Jul 14th 2024</span>
              <span className="sm:block hidden mb-2 text-gray-800 font-bold">
                Read more
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
