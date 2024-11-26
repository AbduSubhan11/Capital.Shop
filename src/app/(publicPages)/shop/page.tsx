"use client";
import React, { useEffect, useState } from "react";
import ProductsData from "../../../../ProductsData";
import Link from "next/link";
import Image from "next/image";
import { useWish } from "../../../../context/wishlistContext";

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

function Cards() {
  const [allData, setAllData] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const { addToWish } = useWish();

  const WishBtnHandler = (product: Product) => {
    addToWish(product);
  };

  useEffect(() => {
    const filterData = ProductsData.filter((product) => product !== undefined);
    setAllData(filterData);
  }, []);

  return (
    <>
      <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:p-20  ">
        <div className="min-w-full md:p-0 p-5">
          <h1 className="font-bold md:text-3xl text-xl ">PRODUCT OVERVIEW</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 sm:p-0 p-5 ">
          {/* SEARCH INPUT */}
          <form className="form relative ">
            <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
              <svg
                className="h-6 w-8 text-black "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              className="input w-[100%] bg-gray-200 text-black px-12 py-3 border-2 border-white focus:outline-none focus:border-[#232F3E] placeholder-gray-400 transition-all duration-300"
              placeholder="Search..."
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              type="text"
            />
            <button
              type="reset"
              className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-gray-700"
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
          </form>

          {/* FILTER OPTIONS */}
          <select
            onChange={(e) => setFilterCategory(e.target.value)}
            className=" outline-none h-12 pl-2 bg-gray-200"
          >
            <option value="" hidden>
              Filter by Category
            </option>
            <option value="">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Footwear">Footwear</option>
            <option value="Watches">Watches</option>
            <option value="Accessories">Accessories</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
      </div>

      {/* CARD CONTAINER   */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-32 md:p-20 p-10 overflow-hidden">
        {allData
          .filter((searchproduct) =>
            searchproduct.name.toLowerCase().includes(searchValue)
          )
          .filter((filtCategory) =>
            filtCategory.category.includes(filterCategory)
          )
          .map((product) => (
            <div key={product.id} className="space-y-3 h-72">
              <Link
                href={`/product/${product.id}`}
                className="h-[70%] w-1 hover:scale-105 cursor-pointer transition-all duration-300 "
              >
                <Image
                  src={product.images}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
              </Link>
              <div className="h-[30%] relative">
                <div className="flex justify-between">
                  <h1>{product.name}</h1>
                  <svg
                    onClick={() => WishBtnHandler(product)}
                    className="h-7 w-10 hover:cursor-pointer hover:fill-red-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" />{" "}
                    <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                  </svg>
                </div>
                <h2 className="font-bold">${product.price}</h2>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Cards;
