import React from "react";
import Link from "next/link";
import heroesImg from "../../public/Image/heroes pic.jpg"
import Image from "next/image";

function HeroSection() {
  return (
    <section
      className="grid md:grid-cols-2 bg-[#f5f5f5] text-[#020817] max-w-full overflow-hidden"
      id="heroes"
    >
      <div className=" md:py-28 py-12 md:px-10 px-5 min-w-[50%] space-y-5">
        <div>
          <h1 className="md:text-5xl text-3xl font-bold" id="HeroesHeading">
            Shop the best, live better. Where quality meets convenience, and
            every purchase brings you closer to the life you want.
          </h1>
        </div>
        <div>
          <h1 className="text-xl" id="HeroesPara">
            Discover endless possibilities. From essentials to indulgences, we
            bring the world of shopping to your doorstep.
          </h1>
        </div>
        <div>
          <Link
            href="/shop"
            className="bg-[#020817] text-white px-7 py-3 w-fit hover:bg-gray-200 hover:text-[#0b1c39] hover:border border-[#0b1c39] transition-colors duration-500"
            id="HeroesBtn"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="min-w-[50%]">
        <Image src={heroesImg} alt="" className="object-cover w-full h-auto" />
      </div>
    </section>
  );
}

export default HeroSection;
