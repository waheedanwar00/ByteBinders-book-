import React from "react";
import {
  FaRocket,
  // FaLightbulb,
  FaUsers,
  // FaPhone,
  // FaEnvelope,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="overflow-hidden bg-white py-8 sm:py-16 flex justify-between items-center">
        <div className="mx-10 max-w-7x1 px-8 lg:px-8">
          <div className="mx-auto grid w-[80%] grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Produce faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About Bytebinders
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Welcome to Bytebinders, where technology meets innovation. We
                  are dedicated to providing top-notch tech solutions that drive
                  success and transform businesses.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className=" font-semibold text-gray-900 flex items-center">
                      <FaRocket className="mr-2 text-indigo-600" />
                      Our Mission :
                    </dt>
                    <p className="inline">
                      At Bytebinders, our mission is to empower businesses with
                      innovative technology solutions. We strive to deliver
                      exceptional services that meet the unique needs of our
                      clients, ensuring their growth and success in the digital
                      age.
                    </p>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 flex items-center">
                      <FaUsers className="mr-2 text-indigo-600" />
                      Our Team :
                    </dt>
                    <dd className="inline">
                      Our team is composed of highly skilled professionals with
                      diverse backgrounds in technology, design, and business.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-700"
                >
                  Schedule a demo
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Product screenshot"
              className="w-[49rem] max-w-[784px] rounded-xl shadow-xl ring-1 ring-gray-400 sm:w-[54rem] md:-ml-4 mt-12 lg:-ml-9"
              width="2432"
              height="1142"
            />
          </div>
        </div>
      </section>
      <div className="bg-gray-50 dark:bg-gray-900" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h2 className="text-4xl font-bold dark:text-gray-100">Contact</h2>
          <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
            Want to contact us? Choose an option below and well be happy to show
            you how we can transform companys web experience.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
          <div>
            <h2 className="text-lg font-bold dark:text-gray-100">Contact Us</h2>
            <p className="max-w-sm mt-4 mb-4 dark:text-gray-400">
              Have something to say? We are here to help. Fill up the form or
              send email or call phone.
            </p>
            <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                ></path>
              </svg>
              <span>14th avenue glory road</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
              <a href="https://mail.google.com/mail/u/0/">
                query@bytebindersbooks.com
              </a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
              <a href="tel:+923XXXXXXXXXX">+92 3XXXXXXXXXX</a>
            </div>
          </div>
          <div>
            <form>
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                name="botcheck"
              />
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  name="name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="false"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  name="message"
                  defaultValue={"                    "}
                />
              </div>
              <button
                to="bytebinderscompany@gmail.com"
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
