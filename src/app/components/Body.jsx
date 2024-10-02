import React from 'react';
import Navbar from './Navbar';
import './Body.css';
import Work from '../features/Work';
import Image from 'next/image';
import Bodyimage from '../image/Bodyimage.png';

function Body() {
  return (
    <div>
      <div className='min-h-screen bg-[#f4fcfe]'>
        {/* <div className=" sticky">
          <Navbar />
        </div> */}

        <div className='flex flex-col items-center justify-between px-6 py-10 md:flex-row md:px-10 md:py-16 lg:px-16'>
          {/* Left Section */}
          <div className='mt-10 md:mt-0 md:w-1/2'>
            <h3 className='text-[1.5rem] font-bold md:text-2xl lg:text-3xl'>
              Together, we can
            </h3>
            <p className="font-bold text-[40px] md:text-[50px] lg:text-[60px] leading-snug">
              Build a world where <br />{" "}
              <span className="relative bottom-2 md:bottom-4 lg:bottom-8 text-blue-500">
                all youth are safe
              </span>
            </p>
            <button className='h-10 w-32 rounded-full border-2 border-blue-500 bg-transparent text-black transition duration-300 hover:bg-blue-500 hover:text-white'>
              Read more
            </button>
          </div>

          {/* Right Section */}
          <div className='mt-10 flex justify-center md:mt-0 md:w-1/2'>
            <Image
              src={Bodyimage}
              width={500}
              height={500}
              alt='people'
              className='relative bottom-5 left-0 h-[18rem] w-[18rem] object-cover md:h-[30rem] md:w-[30rem] lg:h-[30rem] lg:w-[40rem]'
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
