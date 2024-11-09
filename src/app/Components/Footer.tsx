"use client";
import Link from "next/link";
import React, { useState } from "react";

function Footer() {
  const [information, setInformation] = useState(false);
  const [categories, setCategories] = useState(false);
  const [help, setHelp] = useState(false);
  const [newsLater, setNewsLater] = useState(false);
  return (
    <footer className="bg-[#F4F4F4] mt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-8 ">
        <div className="space-y-9">
          <div
            className="text-xl font-bold flex items-center justify-between"
            onClick={() => setInformation(!information)}
          >
            INFORMATION
            <svg
              className={`w-8 h-7 md:hidden text-gray-800 transition-transform duration-300 ${
                information ? "rotate-45" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={information ? "M6 18L18 6M6 6l12 " : "M12 4v16M4 12h16"}
              />
            </svg>
          </div>

          <div
            className={`flex flex-col space-y-2 ${
              information ? "" : "md:flex hidden"
            }`}
          >
            <Link
              href="/about"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              About Company
            </Link>
            <Link
              href="/"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Payment Type
            </Link>
            <Link
              href="/"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Refund Policy
            </Link>
            <Link
              href="/"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              World Media Partner
            </Link>
          </div>
        </div>

        <div className="space-y-9">
          <div
            className="text-xl font-bold flex items-center justify-between"
            onClick={() => setCategories(!categories)}
          >
            CATEGORIES
            <svg
              className={`w-8 h-7 md:hidden text-gray-800 transition-transform duration-300 ${
                categories ? "rotate-45" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={categories ? "M6 18L18 6M6 6l12 " : "M12 4v16M4 12h16"}
              />
            </svg>
          </div>
          <div
            className={`flex flex-col space-y-2 ${
              categories ? "" : "md:flex hidden"
            }`}
          >
            <Link
              href="/shop"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Watches
            </Link>
            <Link
              href="/shop"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Sports
            </Link>
            <Link
              href="/shop"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              FootWear
            </Link>
            <Link
              href="/shop"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Electronics
            </Link>
          </div>
        </div>

        <div className="space-y-9">
          <div
            className="text-xl font-bold flex items-center justify-between"
            onClick={() => setHelp(!help)}
          >
            HELP
            <svg
              className={`w-8 h-7 md:hidden text-gray-800 transition-transform duration-300 ${
                help ? "rotate-45" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={help ? "M6 18L18 6M6 6l12 " : "M12 4v16M4 12h16"}
              />
            </svg>
          </div>
          <div
            className={`flex flex-col space-y-2 ${
              help ? "" : "md:flex hidden"
            }`}
          >
            <Link
              href=""
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Track Order
            </Link>
            <Link
              href="/contact"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Contact us
            </Link>
            <Link
              href="/"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              Shipping
            </Link>
            <Link
              href="/contact"
              className="hover:underline underline-offset-4 w-fit hover:text-[#A4A4A4]"
            >
              FAQs
            </Link>
          </div>
        </div>

        <div className="space-y-9">
          <h1
            className="text-xl font-bold flex items-center justify-between"
            onClick={() => setNewsLater(!newsLater)}
          >
            NEWSLETTER
            <svg
              className={`w-8 h-7 md:hidden text-gray-800 transition-transform duration-300 ${
                newsLater ? "rotate-45" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={newsLater ? "M6 18L18 6M6 6l12 " : "M12 4v16M4 12h16"}
              />
            </svg>
          </h1>
          <div
            className={`flex flex-col space-y-4 ${
              newsLater ? "" : "md:flex hidden"
            }`}
          >
            <p>
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <div className="flex gap-2 items-center bg-gray-300 p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-md">
              <svg
                className="group-hover:rotate-[360deg] text-gray-900 text-xl duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
              <input
                type="email"
                name="email"
                className="flex-1 focus:outline-none bg-gray-300 text-black placeholder:text-black"
                placeholder="Email"
              />
            </div>
            <button className="bg-orange-800 text-white rounded-xl w-48 py-2 text-xl">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="text-center p-5">
        <h1>Developed by Abdu Subhan | All rights reserved</h1>
      </div>
    </footer>
  );
}
export default Footer;
