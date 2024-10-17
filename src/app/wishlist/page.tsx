"use client";
import Image from "next/image";
import React from "react";
import { useWish } from "../../../context/wishlistContext";

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
  const { wishItems, removeFromWish } = useWish();

  const removeWishHandler = (productId: number) => {
    removeFromWish(productId)
  };

  return (
    <section className="space-y-12 py-10">
      <div className="flex flex-col justify-center items-center">
        <svg
          className="h-10 w-8"
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
        <h1 className="text-3xl font-bold">My Wishlist</h1>
      </div>
      <div className="flex justify-center items-center md:px-0 px-3">
        {wishItems.length === 0 ? (
          <div>No Item In Wishlist</div>
        ) : (
          <table className="border-2 border-gray-200 overflow-x-auto ">
            <thead>
              <tr className="bg-[#E5E7EB] h-10 text-center">
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishItems.map((item: Product) => (
                <tr key={item.id}>
                  <td className="md:w-[30vw] md:py-4 border flex justify-center items-center">
                    <Image
                      src={item.images}
                      alt={item.name}
                      className="md:w-[16vw] w-[18vw] md:h-[10vw] h-[16vw]"
                      width={300}
                      height={200}
                    />
                  </td>
                  <td className="w-96 border text-center">{item.name}</td>
                  <td className="w-52 border text-center">{item.price}</td>
                  <td className="w-52 border ">
                    <div className="flex justify-center items-center">
                      <button onClick={()=>removeWishHandler(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-7 h-7 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default Page;
