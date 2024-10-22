import React from 'react';
import './Body.css';
import Work from '../features/Work';
import Image from 'next/image';
import People from '../image/people.png';
import Map from '../image/Map.png';
import Link from 'next/link';

function Body() {
  return (
    <div>
      <div className='mt-'>
        <Image
          src={Map}
          width={300}
          height={300}
          alt='map'
          className='relative right-[10rem] top-5 float-right ml-14 hidden object-cover md:block'
        />
        <div className='px-6 py-5'>
          {/* Left Section */}
          <div className='ml-3 md:ml-10'>
            <h1 className="font-bold font-manrope text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[81px] lg:leading-normal">
              Addressing Gender-Based Violence  and Insecurity in Kaduna State.
            </h1>

            <p className='w-full font-manrope text-base md:w-[38rem] md:text-lg lg:text-xl'>
              Kirki provides accessible tools and resources to combat
              gender-based violence, crime, and insecurity in Kaduna State. Join
              us in making our community safer.
            </p>
            <div className='mt-2 flex flex-col md:flex-row gap-5 pt-5 capitalize'>
            <Link href='/contact'>
            <button className='flex font-manrope h-11 w-[12rem] capitalize rounded-full bg-[#B8F171] pl-8 pt-[8.5px]'>
                get more help
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                  />
                </svg>
              </button>
            </Link>
             <Link href='/books'>
             <button className='flex font-manrope pl-8 pt-2 capitalize'>
                Explore books
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                  />
                </svg>
              </button>
             </Link>
            </div>

            <div>
              <Image
                src={People}
                width={600}
                height={600}
                alt='people'
                className='relative mt-10 h-[10rem] w-[70rem] object-cover'
              />
            </div>
            <div>
              <h1 className='pt-5 font-popins text-2xl font-[600] leading-tight md:text-3xl md:leading-snug lg:text-4xl lg:leading-normal'>
                Brief Overview on Kirki
              </h1>
              <div className='ml-0 mt-10 w-full md:ml-[10rem] md:w-[50rem]'>
                <p className='text-justify font-manrope text-base font-[500] md:text-lg lg:text-xl'>
                  Welcome to Kirki, a platform dedicated to empowering survivors
                  of gender-based violence (GBV) and providing essential
                  resources for healing and support. Our mission is to create a
                  safe space where individuals can access educational tools,
                  connect with vital support services, and raise awareness about
                  GBV. Whether you are a survivor, an advocate, or someone
                  seeking to learn, our resources are here to guide you on your
                  journey toward safety and empowerment.
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <div>
        <Work />
      </div>
    </div>
  );
}

export default Body;
