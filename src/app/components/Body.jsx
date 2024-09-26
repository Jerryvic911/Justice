import React from "react";
import Navbar from "./Navbar";
import "./Body.css";
import Work from "../features/Work";
import Image from "next/image";
import Bodyimage from "../image/Bodyimage.png";

function Body() {
  return (
    <div>
      <div className="bg-[#f4fcfe] min-h-screen">
        <div className=" sticky">
          <Navbar />
        </div>

        <div className="px-6 md:px-10 lg:px-16 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="mt-10 md:mt-0 md:w-1/2">
            <h3 className="font-bold text-[1.5rem] md:text-2xl lg:text-3xl">
              Together, we can
            </h3>
            <p className="font-bold text-[40px] md:text-[50px] lg:text-[60px] leading-snug">
              Build a world where <br />{" "}
              <span className="relative bottom-2 md:bottom-4 lg:bottom-8 text-blue-500">
                all youth are safe
              </span>
            </p>
            <button className="text-black h-10 w-32 bg-transparent border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Read more
            </button>
          </div>

          {/* Right Section */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <Image
              src={Bodyimage}
              width={500}
              height={500}
              alt="people"
              className="object-cover w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[30rem] relative bottom-5 left-0"
            />
          </div>
        </div>
      </div>

      <div>
        <Work />
      </div>
    </div>
  );
}

export default Body;
