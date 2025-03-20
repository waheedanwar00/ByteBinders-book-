import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark className="bg-black text-white">
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Books" />
            <Footer.LinkGroup col>
              <Footer.Link href="/shop">Shop</Footer.Link>
              <Footer.Link href="/login">Sell Your Book</Footer.Link>
              <Footer.Link href="/blog">Blog</Footer.Link>
              <Footer.Link href="/about">About Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Customer Service" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">Contact Us</Footer.Link>
              <Footer.Link href="/about">FAQs</Footer.Link>
              <Footer.Link href="/checkout">Shipping & Returns</Footer.Link>
              <Footer.Link href="/checkout">Order Tracking</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
              <Footer.Link href="/terms-conditions">
                Terms & Conditions
              </Footer.Link>
              <Footer.Link href="/licensing">Licensing</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contact Us" />
            <span className="text-gray-500">
              For Complaints and feedback:
              <a href="#">{"   "} query@bytebindersbooks.com</a>
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="ByteBinders™ by Waheed" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com"
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.instagram.com"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.twitter.com"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.github.com"
              icon={BsGithub}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
