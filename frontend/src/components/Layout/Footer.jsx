import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import logo from "../../Assets/e1.png";

const Footer = () => {
  return (
    <div className="bg-[#9be2f6] text-black">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7 border-b border-gray-300 bg-[#f2ca8d] shadow-md">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-extrabold md:w-2/5 transition-transform duration-300 transform hover:scale-105 hover:text-[#304f98]">
          <span className="text-[#fb5f5d]">Subscribe</span> us for news, <br />
          events, and offers
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md px-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          />
          <button className="bg-[#56d879] hover:bg-teal-600 transition duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full mt-2 md:mt-0 shadow-lg hover:shadow-xl transform hover:scale-105">
            Submit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={logo}
            alt="Logo"
            className="filter brightness-0 invert w-48 h-auto transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          />
          <p className="mt-4 text-gray-700 font-light">
            The home and elements needed to create beautiful products.
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <AiFillFacebook
              size={30}
              className="cursor-pointer hover:text-blue-700 transition duration-300 transform hover:scale-110"
            />
            <AiOutlineTwitter
              size={30}
              className="cursor-pointer hover:text-blue-500 transition duration-300 transform hover:scale-110"
            />
            <AiFillInstagram
              size={30}
              className="cursor-pointer hover:text-pink-600 transition duration-300 transform hover:scale-110"
            />
            <AiFillYoutube
              size={30}
              className="cursor-pointer hover:text-red-700 transition duration-300 transform hover:scale-110"
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start space-y-2">
          <h2 className="mb-2 font-semibold text-lg text-gray-800">Company</h2>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-800 hover:text-teal-500 duration-300 text-sm cursor-pointer leading-6 transition transform hover:scale-105"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start space-y-2">
          <h2 className="mb-2 font-semibold text-lg text-gray-800">Shop</h2>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-800 hover:text-teal-500 duration-300 text-sm cursor-pointer leading-6 transition transform hover:scale-105"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start space-y-2">
          <h2 className="mb-2 font-semibold text-lg text-gray-800">Support</h2>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-800 hover:text-teal-500 duration-300 text-sm cursor-pointer leading-6 transition transform hover:scale-105"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 text-black text-sm pb-8 border-t border-gray-300">
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span className="text-teal-500 hover:text-teal-600 cursor-pointer transition duration-300">
          Terms · Privacy Policy
        </span>
        <div className="flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment Methods"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
