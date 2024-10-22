"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../../../context/cartContext";
import { useWish } from "../../../context/wishlistContext";

function NavBar() {
  // const [isPortal, setIsPortal] = useState(false);
  const pathname = usePathname();
  const [isHamburger, setIsHamburger] = useState(false);
  const {cartItems} = useCart()
  const {wishItems}  =useWish()

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };
  const toggleMenu = () => {
    setIsHamburger(false);
  };

  return (
    <nav className="flex md:p-5 p-4 justify-between items-center max-w-full z-20 sticky top-0 border-b-2 bg-[#FFFFFF]">
      {/* NAV HEADING         */}
      <div>
        <h1 className="font-bold font-sans text-3xl">CAPITAL.SHOP</h1>
      </div>
      {/* NAV LINKS       */}
      <div
        className={`md:space-x-6 font-semibold text-xl ${
          isHamburger
            ? "flex flex-col right-0 top-0 h-screen w-52 py-20 px-5 absolute space-y-5 border bg-white"
            : "md:flex hidden"
        }`}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className={`hover:text-[#898989] hover:underline underline-offset-4 ${
            pathname === "/" ? "text-[#898989] underline" : ""
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/shop"
          onClick={toggleMenu}
          className={`hover:text-[#898989] hover:underline underline-offset-4 ${
            pathname === "/shop" ? "text-[#898989] underline" : " "
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          Shop
        </Link>
        <Link
          href="/about"
          onClick={toggleMenu}
          className={`hover:text-[#898989] hover:underline underline-offset-4 ${
            pathname === "/about" ? "text-[#898989] underline" : " "
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={toggleMenu}
          className={`hover:text-[#898989] hover:underline underline-offset-4 ${
            pathname === "/contact" ? "text-[#898989] underline" : " "
          } ${isHamburger ? "border-b-2" : ""}`}
        >
          Contact
        </Link>
      </div>

      {/* SEARCH CONTACT CART DIV       */}
      <div
        className={`relativ flex justify-center items-center md:space-x-2 ${
          isHamburger ? "top-[330px]" : ""
        }`}
      >
        {/* SIGN IN ICON         */}
        <Link
          href=""
          // onClick={() => setIsPortal(true)}
          className={`relative ${isHamburger ? "top-[330px]" : ""}`}
        >
          <svg
            className="h-6 w-8 hover:text-[#898989]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
        {/* <Portal onClick={isPortal} setOnClick={setIsPortal} /> */}

        {/* HEART ICON */}
        <Link
          href="/wishlist"
          onClick={toggleMenu}
          className={`relative ${isHamburger ? "top-[330px]" : ""}`}
        >
          <div className="bg-[#03AB95] text-white rounded-[50%] h-5 w-5 absolute bottom-4 right-0 flex justify-center items-center ">
            {wishItems.length}
          </div>
          <svg
            className="h-6 w-8 hover:text-[#898989]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
          </svg>
        </Link>

        {/* CART ICON         */}
        <Link
          href="/cart"
          className={`relative ${isHamburger ? "top-[330px]" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bg-[#03AB95] text-white rounded-[50%] h-5 w-5 absolute bottom-4 right-0 flex justify-center items-center text-sm ">
            {cartItems.length}
          </div>
          <svg
            className="h-6 w-8 hover:text-[#898989]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
      </div>

      {/* HAMBURGER */}
      <div className="md:hidden z-20">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
