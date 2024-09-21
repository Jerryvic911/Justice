import React from "react";
import Navbar from "./Navbar";
import "./Body.css";
import Work from "../features/Work";
import Image from "next/image";
import Bodyimage from "../image/Bodyimage.png"

function Body() {
  return (
    <div>
      <div className=" bg-[#f4fcfe] h-screen">
        <div className="">
          <div className="">
            <Navbar />
          </div>
        </div>

        <div className="pl-10 mt-[3rem] flex">
         <div className="mt-10">
         <h3 className="font-bold text-[1.5rem]">Together, we can</h3>
          <p className="font-bold text-[60px]">
            Build a world where <br /> <span className="relative bottom-8 text-blue-500">all youth are safe</span>
          </p>
          <button className="text-black h-10 w-24 bg-transparent border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">Read more</button>
         </div>
         <div>
            <Image
            src={Bodyimage}
            width={500}
            height={500}
            alt="people"
            className=" object-cover w-[40rem] h-[30rem] relative bottom-5 left-"/>
          </div>
         
        </div>
       
      </div>

      <div className="">
        <Work />
        {/* bg-gradient-to-br to-[#191970] via-[#191970]/90 from-[#809fff]/100 */}
      </div>
      {/* <div className="text-white h-[58rem] ">
        <About />
      </div> */}
    </div>
  );
}

export default Body;
