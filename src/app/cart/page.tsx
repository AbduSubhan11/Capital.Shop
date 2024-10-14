"use client";
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  brand: string;
  stock: number;
  description: string;
  rating: number;
  images: string;
};

function Page() {
  const [remove, setRemove] = useState<number>();
  const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
  const otherCartData = cartData.filter((filter: Product) => filter.id !== remove);
  localStorage.setItem("cart", JSON.stringify(otherCartData));
 
  return (
    <section className="md:flex justify-center py-10 md:px-10 px-5 md:space-y-0 space-y-10">
      {/* left */}
      <div className="md:w-[80vw] md:p-5 md:space-y-10 space-y-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold font-serif md:text-[2vw] text-[5vw]">
            Shopping Cart
          </h1>
          <h1 className="font-bold text-[#74787B]">
            <span>{cartData.length}</span> items
          </h1>
        </div>
        {cartData.length === 0 ? (
          <div className="text-center md:pt-20 pt-10">No Item In Cart</div>
        ) : (
          <div>
            {cartData.map((pro: Product) => (
              <div
                className="flex justify-between border-t border-gray-300 py-5"
                key={pro.id}
              >
                <div className="flex ">
                  <img
                    src={pro.images}
                    alt=""
                    className="md:w-[16vw] w-[18vw] md:h-[10vw] h-[16vw]"
                  />
                  <div className="md:w-96 w-52 flex flex-col justify-center items-center truncate">
                    <h1 className="md:text-[1vw] text-[4vw] text-[#8C8E90] font-bold">
                      {pro.category}
                    </h1>
                    <h1 className="md:text-[1vw] text-[3vw] font-bold">
                      {pro.name}
                    </h1>
                  </div>
                </div>
                <div className="w-32 md:text-[1vw] text-[4vw] font-bold flex justify-center items-center">
                  ${pro.price}
                </div>
                <div className="w-32 flex justify-center items-center">
                  <button type="reset" onClick={() => setRemove(pro.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* right */}
      <div className="bg-[#E5E7EB] min-w-[20vw] px-5 py-10 h-[50%] space-y-5">
        <h1 className="text-[#4C4C4C] font-bold text-xl">Summary</h1>
        <div className="border-t border-b py-5 space-y-5 border-gray-400">
          <div className="flex justify-between text-1xl font-bold text-[#4C4C4C]">
            <h1>ITEMS {cartData.length}</h1>
            <h1>
              $
              {cartData
                .map((item: Product) => item.price)
                .reduce((acc: number, ini: number) => acc + ini, 0)}
            </h1>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-[#4C4C4C]">SHIPPING</h1>
            <input
              type="text"
              placeholder="Shipping"
              className="pl-2 outline-none h-8 max-w-[90%]"
            />
            <h1 className="font-bold text-[#4C4C4C]">GIVE CODE</h1>
            <input
              type="text"
              placeholder="Enter your code"
              className="pl-2 outline-none h-8 max-w-[90%]"
            />
          </div>
        </div>
        {/* TOTAL PRICE */}
        <div className="flex justify-between font-bold text-[#4C4C4C]">
          <h1>TOTAL PRICE</h1>
          <h1>
            $
            {cartData
              .map((item: Product) => item.price)
              .reduce((acc: number, ini: number) => acc + ini, 0)}
          </h1>
        </div>
        <button className="relative inline-block w-full px-3 py-2 font- text-white border-2 border-black group bg-[#202426] overflow-hidden">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#202426]">
            CHECKOUT
          </span>
          <span className="absolute inset-0 bg-white transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-bottom "></span>
        </button>
      </div>
    </section>
  );
}

export default Page;
