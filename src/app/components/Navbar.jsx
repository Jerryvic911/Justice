/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import BasicMenu from "./Menu";

function Navbar() {
  return (
    <div className="pt-2 pb-3  top-0 w-full h-[4rem]  ">
      <header className="flex justify-between">
        <div className="head-container ml-[7vh] mt-1 gap-2 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke=" #3b82f6"
            className="size-10 relative top-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill=" #3b82f6"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <Link href="/">
            <h1 className="font-light leading-[17px] text-[25px] pt-3">
              Youth's Safe space
            </h1>
          </Link>
        </div>

        <div className="mr-[14vh] pt-2">
          <ul className="flex font-normal text-lg ">
            <div className="mt-1 flex gap-[2rem] font-Montserrat font-[450] ">
              <Link href="/">
                <li className="hide-list-btn">
                  <button className="hover:underline btn">Home</button>
                </li>
              </Link>
              <Link href="/about">
                <li className="hide-list-btn">
                  <button className="hover:underline">About</button>
                </li>
              </Link>

              <li className="hide-list-btn">
                <BasicMenu />
              </li>

              <Link href="/Donate">
                <li className="hide-list-btn">
                  <button className="hover:underline">Donate</button>
                </li>
              </Link>
              <Link href="/Chatbot">
                <li className="hide-list-btn  relative bottom-2">
                  <button className="hover:underline">
                    <svg
                      className="size-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="#3b82f6"
                        d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"
                      />
                    </svg>
                  </button>
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
