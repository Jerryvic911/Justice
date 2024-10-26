import React, { useRef, useEffect, useState } from 'react'; // Import useRef, useEffect, and useState
import { motion } from 'framer-motion';
import './Body.css';
import Work from '../features/Work';
import Image from 'next/image';
import People from '../image/people.png';
import Map from '../image/Map.png';
import Link from 'next/link';

function Body() {
  const ref = useRef(null); // Create a ref for the overview section
  const [inView, setInView] = useState(false); // Create a state to track if the overview is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set inView to true when the element is in view
        } else {
          setInView(false); // Reset inView to false when the element is not in view
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
    <div>
      <div className='mt-'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={Map}
            width={300}
            height={300}
            alt='map'
            className='relative right-[10rem] top-5 float-right ml-14 hidden object-cover md:block'
          />
        </motion.div>

        <div className='px-6 py-5'>
          <div className='ml-3 md:ml-10'>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-bold font-manrope text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[81px] lg:leading-normal"
            >
              Addressing Gender-Based Violence and Insecurity in Kaduna State.
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='w-full font-manrope text-base md:w-[38rem] md:text-lg lg:text-xl'
            >
              Kirki provides accessible tools and resources to combat
              gender-based violence, crime, and insecurity in Kaduna State. Join
              us in making our community safer.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className='mt-2 flex flex-col md:flex-row gap-5 pt-5 capitalize'
            >
              <Link href='/contact'>
                <motion.button
                  className='flex font-manrope h-11 w-[12rem] capitalize rounded-full bg-[#B8F171] pl-8 pt-[8.5px]'
                  whileHover={{ scale: 1.1, rotate: 5 }} // Scale and rotate on hover
                  whileTap={{ scale: 0.95 }} // Scale down when tapped
                >
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
                </motion.button>
              </Link>

              <Link href='/books'>
                <motion.button
                  className='flex font-manrope pl-8 pt-2 capitalize'
                  whileHover={{ scale: 1.1, rotate: -5 }} // Scale and rotate on hover
                  whileTap={{ scale: 0.95 }}
                >
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
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src={People}
                width={600}
                height={600}
                alt='people'
                className='relative mt-10 h-[10rem] w-[70rem] object-cover'
              />
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className='pt-5 font-popins text-2xl font-[600] leading-tight md:text-3xl md:leading-snug lg:text-4xl lg:leading-normal'
              >
                Brief Overview on Kirki
              </motion.h1>
              <motion.div
                ref={ref} // Attach the ref
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}} // Animate when in view
                transition={{ duration: 0.5 }}
                className='ml-0 mt-10 w-full md:ml-[10rem] md:w-[50rem]'
              >
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
              </motion.div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Work />
      </motion.div>
    </div>
  );
}

export default Body;
