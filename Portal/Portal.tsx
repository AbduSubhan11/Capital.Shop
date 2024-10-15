import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  onClick: boolean;
  setOnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Portal: React.FC<PortalProps> = ({ onClick, setOnClick }) => {
  const data = document.getElementById("portalRoot");

  if (!data) {
    return null;
  }

  return createPortal(
    <div
      className={`bg-black/65 fixed inset-0 z-50 flex justify-center items-center ${
        onClick ? "" : "hidden"
      }`}
      onClick={() => setOnClick(false)}
    >
      <div
        className="bg-[#fafafa] space-y-10 p-5 rounded-2xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-2">
          <h1 className="font-bold text-black md:text-3xl text-xl">
            Welcome to CAPITAL.SHOP
          </h1>
          <h3 className="text-center">Ship Smarter Today</h3>
        </div>

        <div className="space-y-5">
          <div className="flex gap-2 w-full items-center bg-white p-2 hover:shadow-xl duration-300 border hover:border-2 border-gray-400 group delay-200 rounded-md">
            <svg
              className="group-hover:rotate-[360deg] text-gray-900 text-xl duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <path d="M22 6l-10 7L2 6"></path>
            </svg>
            <input
              type="email"
              name="email"
              required
              className="flex-1 focus:outline-none bg-white text-black placeholder:text-black"
              placeholder="Email"
            />
          </div>
          <div className="flex gap-2 w-full items-center bg-white p-2 hover:shadow-xl duration-300 border hover:border-2 border-gray-400 group delay-200 rounded-md">
            <svg
              className=" h-5  group-hover:rotate-[360deg] text-gray-700 text-xl duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              type="password"
              name="Password"
              required
              className="flex-1 focus:outline-none bg-white text-black placeholder:text-black"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex justify-between items-center md:text-[1vw] text-[3.5vw]">
          <div className="flex space-x-2">
            <input type="checkbox" />
            <h1>Remember Me</h1>
          </div>
          <Link href={""} className="text-blue-900">
            Forget Password?
          </Link>
        </div>

        <Link
          href=""
          className="relative flex justify-center items-center md:px-10 px-5 py-2 text-white border-2 border-black group bg-[#202426] overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 text-xl group-hover:text-[#202426]">
            Submit
          </span>
          <span className="absolute inset-0 bg-white transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-bottom "></span>
          <svg
            className="h-8 w-8 relative group-hover:text-[#202426]"
            width="2"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
        </Link>
      </div>
    </div>,
    data
  );
};

export default Portal;
