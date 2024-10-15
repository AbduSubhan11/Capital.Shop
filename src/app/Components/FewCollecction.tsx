
import Image from "next/image";
import shirt from "../../../public/Image/shirt collection.webp";
import glasses from "../../../public/Image/sun glasses collection.webp";
import shoes from "../../../public/Image/shoes collection.webp";
import Link from "next/link";

function FewCollecction() {
  return (
    <section className="md:relativ flex flex-col justify-end">
      <div className="md:flex relative p-5 space-y-5">
        <div className="md:w-[30vw] md:ml-[50%]">
          <Image
            src={shirt}
            alt="shirts"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="md:absolute left-[33rem] top-32">
          <h1 className="text-3xl font-bold font-serif">
            Clothing Collections
          </h1>
          <Link href="/shop" className="hover:underline underline-offset-4 ">
            SHOP NOW
          </Link>
        </div>
      </div>

      <div className="md:absolute left-48 p-5 space-y-5 z-10">
        <div className="md:w-[30vw]">
          <Image
            src={glasses}
            alt="glasses"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold font-serif">Accessories</h1>
          <Link href="/shop" className="hover:underline underline-offset-4 ">
            SHOP NOW
          </Link>
        </div>
      </div>

      <div className="md:flex justify-around md:relative pt-20 p-5 space-y-5">
        <div className="md:w-[30vw] md:ml-[35%]">
          <Image
            src={shoes}
            alt="shoes"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:absolute left-[50%] top-40 ">
          <h1 className="text-3xl font-bold font-serif">Shoes Spring</h1>
          <Link href="/shop" className="hover:underline underline-offset-4 ">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FewCollecction;
