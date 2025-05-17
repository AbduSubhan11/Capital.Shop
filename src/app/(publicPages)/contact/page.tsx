"use client";
import React from "react";
import DelieverDetails from "../../../Components/DelieverDetails";

function Contact() {
  return (
    <section className="max-w-full space-y-20">
      {/* <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 sm:gap-20 mt-10 sm:mt-20 text-center w-full mx-auto">
        <div>
          <svg
            className="h-8 w-8 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <p className="font-bold sm:text-2xl text-xl mt-2">Call Us On</p>
          <p className="text-gray-400 sm:text-2xl text-xl">+923334370902</p>
        </div>

        <div>
          <svg
            className="h-8 w-8 mx-auto "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
            <line x1="8" y1="9" x2="16" y2="9" />
            <line x1="8" y1="13" x2="14" y2="13" />
          </svg>
          <p className="font-bold sm:text-2xl text-xl mt-2">Email</p>
          <p className="text-gray-400 sm:text-2xl text-xl">
            abdusubhan6678@gmail.com
          </p>
        </div>

        <div>
          <svg
            className="h-8 w-8 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="font-bold sm:text-2xl text-xl mt-2">Location</p>
          <p className="text-gray-400 sm:text-2xl text-xl">Karachi,Pakistan</p>
        </div>
      </div> */}

      {/* FORM */}
      <div className="flex justify-center ">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className=" min-w-full space-y-8 md:p-20 p-5 font-serif"
        >
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
            <input
              type="hidden"
              name="access_key"
              value="c4cea03b-f4fe-4951-b90f-1285bd336637"
            />
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              required
              className="border-2 focus:border-black h-10 outline-none pl-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="Email"
              required
              className="border-2 focus:border-black h-10 outline-none pl-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              required
              className="border-2 focus:border-black h-10 w-full outline-none pl-2"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              name="Message"
              required
              className="border-2 focus:border-black min-h-32 w-full outline-none p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="relative inline-block md:px-10 px-8 py-2 text-white border-2 border-black group bg-[#202426] overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#202426]">
              Submit
            </span>
            <span className="absolute inset-0 bg-white transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-bottom "></span>
          </button>

        </form>
      </div>
      <DelieverDetails />
    </section>
  );
}

export default Contact;
