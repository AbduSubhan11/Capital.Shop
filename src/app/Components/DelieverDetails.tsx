import React from "react";
import freeShipping from "../../../public/Image/Free Shipping img.png"
import securePayment from "../../../public/Image/Secure Payment img.png"
import Return from "../../../public/Image/Return Back img.png"
import Call from "../../../public/Image/Call Support img.png"
import Image from "next/image";

function DelieverDetails() {
  return (
    <section className=" grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-10 ">

      <div className="md:flex-col flex justify-center items-center " >
        <div className="md:w-[8vw] w-[30vw] ">
          <Image src={freeShipping} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="text-center">
            <h1 className="text-xl font-bold">Free Shipping</h1>
            <p className="text-1xl">On All Order Over $399</p>
        </div>
      </div>

      <div className="md:flex-col flex justify-center items-center ">
        <div className="md:w-[8vw] w-[25vw]"> 
          <Image src={securePayment} alt="" />
        </div>
        <div className="text-center">
            <h1 className="text-xl font-bold">Secure Payment</h1>
            <p className="text-1xl">100% Secure Gurantee</p>
        </div>
      </div>

      <div className="md:flex-col flex justify-center items-center ">
        <div className="md:w-[8vw] w-[25vw]">
          <Image src={Return} alt="" />
        </div>
        <div className="text-center">
            <h1 className="text-xl font-bold">Easy Returns</h1>
            <p className="text-1xl">30 Day Returns Policy</p>
        </div>
      </div>

      <div className="md:flex-col flex justify-center items-center ">
        <div className="md:w-[8vw] w-[25vw]">
          <Image src={Call} alt="" />
        </div>
        <div className="text-center">
            <h1 className="text-xl font-bold">Special Support</h1>
            <p className="text-1xl">24/7 Dedicated Support</p>
        </div>
      </div>

    </section>
  );
}

export default DelieverDetails;
