import React from "react";

function DelieverDetails() {
  return (
    <section className=" grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-10 ">

      <div className="md:flex-col flex justify-center items-center " >
        <div className="md:w-[8vw] w-[30vw] ">
          <img src="./Image/Free Shipping img.png" className="w-full h-auto object-cover" />
        </div>
        <div className="text-center">
            <h1 className="text-xl font-bold">Free Shipping</h1>
            <p className="text-1xl">On All Order Over $399</p>
        </div>
      </div>

      <div className="md:flex-col flex justify-center items-center ">
        <div className="md:w-[8vw] w-[25vw]"> 
          <img src="./Image/Secure Payment img.png" alt="" />
        </div>
        <div className="text-center">
            <h1 className="text-xl font-bold">Secure Payment</h1>
            <p className="text-1xl">100% Secure Gurantee</p>
        </div>
      </div>

      <div className="md:flex-col flex justify-center items-center ">
        <div className="md:w-[8vw] w-[25vw]">
          <img src="./Image/Return Back img.png" alt="" />
        </div>
        <div className="text-center">
            <h1 className="text-xl font-bold">Easy Returns</h1>
            <p className="text-1xl">30 Day Returns Policy</p>
        </div>
      </div>

      <div className="md:flex-col flex justify-center items-center ">
        <div className="md:w-[8vw] w-[25vw]">
          <img src="./Image/Call Support img.png" alt="" />
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
