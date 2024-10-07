import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="px-4 md:px-9">
      <div className="">
      <div className="ml-4 md:ml-10 border-[1px] md:border-[2px] lg:border-[1px] border-black rounded-lg w-full md:w-[70rem] mb-[6rem]"></div>

        <div className="px-4 md:px-9">
          <h1 className="font-[600] text-2xl md:text-3xl lg:text-4xl">
            Quick Links
          </h1>

          <div className="mt-10">
            <ul className="flex flex-col md:flex-row gap-10 md:gap-56">
              <li>
                <button className="font-[600] text-xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-normal flex gap-4">
                  Books
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
                <h2 className="font-[500] text-base md:text-lg lg:text-xl">
                  Explore written resources on GBV
                </h2>
              </li>
              <li>
                <button className="font-[600] text-xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-normal flex gap-4">
                  Events
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
                <h2 className="font-[500] text-base md:text-lg lg:text-xl">
                  Explore latest events
                </h2>
              </li>
              <li>
                <button className="font-[600] text-xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-normal flex gap-4">
                  Maps
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
                <h2 className="font-[500] text-base md:text-lg lg:text-xl">
                  Share live locations
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
