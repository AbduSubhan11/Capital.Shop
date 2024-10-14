import Image from "next/image";
import Link from "next/link";
import React from "react";
import aboutImg from "../../../public/Image/about img.webp"

function About() {
  return (
    <section className="space-y-10 w-full py-16">
      <h1 className="text-center text-4xl font-bold ">
        Redefining Your Shopping Experience with Quality, Style, and
        Convenience.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-items-center w-full ">
        <div className="sm:w-[50%] md:h-[80%]">
          <Image
            src={aboutImg}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-5">
          <p className="leading-loose">
            Welcome to Capital Shop, your one-stop shop for clothes, premium
            watches, lifestyle accessories footwear. We are dedicated to
            providing high-quality products that reflect style, craftsmanship,
            and affordability. At Capital Shop, our mission is to make shopping
            easy, enjoyable, and accessible. We carefully curate our collection
            to bring you the latest trends and timeless classics, ensuring that
            every piece you purchase enhances your personal style and everyday
            life. Founded in 1997, Capital Shop has grown into a trusted online
            destination for those who value convenience, selection, and
            unbeatable prices. Whether you are searching for the latest trends
            or timeless classics, we are here to help you find exactly what you
            need.
          </p>
          <Link href="/shop">
            <button className="bg-black text-white px-7 py-3 mt-10 hover:bg-gray-200 hover:text-[#0b1c39] hover:border border-[#0b1c39] transition-colors duration-500">
              Explore Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
