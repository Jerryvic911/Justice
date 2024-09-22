import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text Content */}
        <div className="text-left">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-6">
            Impactful Experience
          </h1>
          <p className="text-blue-400 font-semibold text-lg md:text-xl pb-5 max-w-xs md:max-w-sm">
            We’ve worked on improving the lives of over 25,000 young people
            through direct practice.
          </p>
          <p className="text-gray-700 font-medium text-sm md:text-base pb-6 max-w-md">
            Young people from different backgrounds have a huge impact on us and
            all our activities. They highlight those parts of society that are
            broken, so we can help them in all possible ways to regain hope and
            flourish in life.
          </p>
          <button className="text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 px-6 py-3 rounded-full font-semibold">
            Read more
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Impactful Experience Image"
            width={500}
            height={750}
            className="object-cover w-full h-full max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
