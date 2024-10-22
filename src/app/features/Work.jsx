import React, { useRef, useEffect, useState } from "react"; // Import useRef, useEffect, and useState
import Image from "next/image";
import Update from "./skills-and-updates";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Work = () => {
  const ref = useRef(null); // Create a ref for the Work component
  const [inView, setInView] = useState(false); // State to track if the component is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set inView to true when it comes into view
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="px-4 md:px-9">
      <div ref={ref} className=""> {/* Attach the ref to the outer div */}
      <div className="ml-4 md:ml-10 border-[1px] md:border-[2px] lg:border-[1px] border-black rounded-lg w-full md:w-[70rem] mb-[4rem]"/>
      <h1 className="font-[600] font-popins text-2xl md:text-3xl lg:text-4xl px-4 md:px-9">
              Quick Links
            </h1>
        <motion.div
          initial={{ x: '-100%', opacity: 0 }} // Start off-screen to the left
          animate={inView ? { x: 0, opacity: 1 } : {}} // Slide in when in view
          transition={{ duration: 2 }} // Animation duration
        >

          <div className="px-4 md:px-9">
           

            <div className="mt-10">
              <ul className="flex flex-col md:flex-row gap-10 md:gap-56">
                <Link href="/books">
                  <li>
                    <button className="font-[600] font-popins text-xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-normal flex gap-4">
                      Books
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                    <h2 className="font-[500] font-manrope text-base md:text-lg lg:text-xl">
                      Explore written resources on GBV
                    </h2>
                  </li>
                </Link>
                <Link href="/events">
                  <li>
                    <button className="font-[600] font-popins text-xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-normal flex gap-4">
                      Events
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                    <h2 className="font-[500] font-manrope text-base md:text-lg lg:text-xl">
                      Explore the latest events
                    </h2>
                  </li>
                </Link>
                <Link href="/map">
                  <li>
                    <button className="font-[600] font-popins text-xl md:text-2xl lg:text-3xl leading-tight md:leading-snug lg:leading-normal flex gap-4">
                      Maps
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 mt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                    <h2 className="font-[500] font-manrope text-base md:text-lg lg:text-xl">
                      Share live locations
                    </h2>
                  </li>
                </Link>
              </ul>
            </div>

          
          </div>
        </motion.div>
        <div className="mt-20 px-4 md:px-9">
              <Update />
            </div>
      </div>
    </div>
  );
};

export default Work;
