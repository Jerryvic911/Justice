import React from 'react';
import './Body.css';
import Work from '../features/Work';
import Image from 'next/image';
import People from '../image/people.png';
import Map from '../image/Map.png';

function Body() {
  return (
    <div>
      <div className='mt-14'>
        <Image
          src={Map}
          width={300}
          height={300}
          alt='map'
          className='ml-10 top-5 float-right right-[10rem] relative object-cover hidden md:block'
        />
        <div className='px-6 py-10'>

          {/* Left Section */}
          <div className='ml-3 md:ml-10'>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug lg:leading-normal">
              Addressing Gender-Based Violence <br /> and Insecurity in Kaduna State.
            </h1>
          
            <p className='w-full md:w-[38rem] text-base md:text-lg lg:text-xl'>
              Kirki provides accessible tools and resources to combat gender-based violence, crime, and insecurity in Kaduna State. Join us in making our community safer.
            </p>
            <div className='flex gap-5 mt-2 pt-5'>
              <button className='bg-[#B8F171] rounded-full h-11 w-[12rem] flex pl-8 pt-2'>
                get more help
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <button className='flex pl-8 pt-2'>
                Explore books
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
           
            <div>
              <Image
                src={People}
                width={600}
                height={600}
                alt='people'
                className='mt-10 h-[10rem] w-[70rem] object-cover relative'
              />
            </div>
            <div>
              <h1 className='pt-5 font-[600] text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal'>Brief Overview on Kirki</h1>
              <div className='mt-10 ml-0 md:ml-[10rem] w-full md:w-[50rem]'>
                <p className='text-justify font-[500] text-base md:text-lg lg:text-xl'>
                  Welcome to Kirki, a platform dedicated to empowering survivors of gender-based violence (GBV) and providing essential resources for healing and support. Our mission is to create a safe space where individuals can access educational tools, connect with vital support services, and raise awareness about GBV. Whether you are a survivor, an advocate, or someone seeking to learn, our resources are here to guide you on your journey toward safety and empowerment.
                </p>
              </div>
            </div>
          </div>

          
          <div>
          
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
