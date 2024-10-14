import React from "react";
import Link from "next/link";
import Image from "next/image";
import Linkimg1 from "../../../public/Image/Link Img 1.webp"
import Linkimg2 from "../../../public/Image/Link img 2.webp"
import Linkimg3 from "../../../public/Image/Link Img 3.webp"

function LinkImg() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      <div className="md:w-[23vw] w-[85vw] border relative group ">
        <Image src={Linkimg1} alt="" className="object-cover w-full" />
        <Link
          href="/shop"
          className="hover:bg-[#F1EFF2] hover:text-black hover:cursor-pointer text-[#0B1C39] opacity-75 p-4 absolute top-0 w-full h-full transition-all duration-500"
        >
          <h1 className="font-bold text-2xl ">Women</h1>
          <p className="text-sm">Spring 2018</p>
          <div className="underline underline-offset-4 mt-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            SHOP NOW
          </div>
        </Link>
      </div>

      <div className="md:w-[23vw] w-[85vw] border relative group">
        <Image
          src={Linkimg2}
          alt=""
          className="object-cover w-full h-auto"
        />
        <Link
          href="/shop"
          className="hover:bg-[#F1EFF2] hover:text-black hover:cursor-pointer opacity-75 p-4 absolute top-0  w-full h-full transition-all duration-500"
        >
          <h1 className="font-bold text-2xl">Men</h1>
          <p className="text-sm">Spring 2018</p>
          <div className="underline underline-offset-4 mt-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            SHOP NOW
          </div>
        </Link>
      </div>

      <div className="md:w-[23vw] w-[85vw] border relative group">
        <Image
          src={Linkimg3}
          alt=""
          className="object-cover w-full h-auto"
        />
        <Link
          href="./shop"
          className="hover:bg-[#F1EFF2] hover:text-black hover:cursor-pointer opacity-75 p-4 absolute top-0  w-full h-full transition-all duration-500"
        >
          <h1 className="font-bold text-2xl">Accessories</h1>
          <p className="text-sm">Spring 2018</p>
          <div className="underline underline-offset-4 mt-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            SHOP NOW
          </div>
        </Link>
      </div>
    </section>
  );
}

export default LinkImg;
