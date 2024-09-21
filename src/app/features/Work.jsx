
import React from "react";
import "./Work.css";
import Image from "next/image";

const Work = () => {
  return (
    <div>
      <div className="pt-[10rem] grid grid-cols-2">
        <div className="pl-10">
          <h1 className="font-bold text-[3rem] pb-7">Impactful Experience</h1>
          <p className="w-[20rem] pb-7 text-blue-400 font-semibold text-[20px]">
            We’ve worked on improving the lives of over 25,000 young people
            through direct practice.
          </p>
          <p className="w-[25rem] pb-7  font-medium text-[15px]">
            Young people from different backgrounds have a huge impact on us and
            all our activities. They highlight those parts of the society that
            are broken, so we can help them in all possible ways to regain hope
            and flourish in life.
          </p>
          <button className='text-white'>Read more</button>
        </div>
        <Image
          src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Image description"
          width={500}
          height={150}
          className="relative bottom-20 pt-12 object-cover w-[36rem] h-[52rem] max-h-[70vh]"
        />
      </div>
    </div>
  );
};

export default Work;
