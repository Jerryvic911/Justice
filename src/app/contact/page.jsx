"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import PageWrapper from '../components/PageWrapper'; // Import the PageWrapper

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <PageWrapper>
      <main className='mx-auto w-[90%] md:w-[85%]'>
        <section className='my-6'>
          <div className='mb-5 w-full py-3 md:py-0 md:text-left'>
            <motion.h1 
              className='py-2 font-popins font-[600] text-[40px] capitalize tracking-wide md:text-[40px]'
              initial={{ opacity: 0, y: -20 }} // Start from above
              animate={{ opacity: 1, y: 0 }} // Fade in
              transition={{ duration: 0.5 }} // Animation duration
            >
              contact us
            </motion.h1>
            <motion.span 
              className='md:text-[20px] font-manrope text-[20px] font-light tracking-wider'
              initial={{ opacity: 0, y: -20 }} // Start from above
              animate={{ opacity: 1, y: 0 }} // Fade in
              transition={{ duration: 0.5, delay: 0.4 }} // With delay
            >
              Get in Touch We are Here to Listen, Help, and Support — Reach Out Today.
            </motion.span>
          </div>
          <Image
            src='https://images.pexels.com/photos/2789781/pexels-photo-2789781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='FAQ image'
            width={500}
            height={500}
            className='object-auto h-auto w-full object-center md:h-[300px]'
          />
        </section>
        <section className='my-6'>
          <div className='mb-5'>
            <motion.h3 
              className='text-[30px] font-popins font-[600] tracking-wide md:text-[30px]'
              initial={{ opacity: 0, y: -20 }} // Start from above
              animate={{ opacity: 1, y: 0 }} // Fade in
              transition={{ duration: 0.5, delay: 0.6 }} // With delay
            >
              Send us a message
            </motion.h3>
            <motion.span 
              className='text-[20px] font-manrope font-[500] tracking-wider md:text-[20px]'
              initial={{ opacity: 0, y: -20 }} // Start from above
              animate={{ opacity: 1, y: 0 }} // Fade in
              transition={{ duration: 0.5, delay: 0.8 }} // With delay
            >
              Fill the form and our team will get back to you as quickly as we can.
            </motion.span>
          </div>
          <motion.form 
            className='flex flex-col'
            initial={{ opacity: 0 }} // Start hidden
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.5, delay: 1 }} // With delay
          >
            <div className='grid-cols-3 grid-rows-5 gap-6 p-1 md:grid'>
              {['name', 'email', 'subject', 'phone', 'message'].map((field, idx) => {
               
                const delay = idx * 0.2; // Staggered delay

                return (
                  <motion.div
                    key={field}
                    ref={ref} // Attach the ref to the input container
                    className='mb-5 flex flex-col md:mb-0'
                    initial={{ opacity: 0, x: 100 }} // Start from the right
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate based on view
                    transition={{ duration: 0.5, delay }} // Stagger the appearance
                  >
                    <label
                      htmlFor={field}
                      className='mb-2 font-manrope inline-block text-[20px] font-[500] tracking-wide md:text-[20px]'
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === 'message' ? (
                      <textarea
                        placeholder={`Write Your ${field.charAt(0).toUpperCase() + field.slice(1)} Here`}
                        id={field}
                        className='h-[200px] rounded-md border border-gray-900 p-2 md:h-full'
                      ></textarea>
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        placeholder={`Enter Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        id={field}
                        className='rounded-md border border-gray-900 p-2'
                      />
                    )}
                  </motion.div>
                );
              })}
              {/* Image displayed to the side of large screens */}
              <Image
                src='https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='call us'
                width={200}
                height={200}
                className='object-auto col-start-3 col-end-4 row-span-full hidden h-full w-full rounded-md md:block'
              />
            </div>
            <div className='my-6 flex flex-col items-center justify-between md:w-[60%] md:flex-row'>
              <div>
                <input
                  type='radio'
                  id='agree'
                />
                <label htmlFor='agree' className='text-[20px] font-manrope font-[500] '>
                  {' '}
                  I agree to Terms of Service and Privacy Policy.
                </label>
              </div>
              <button className='mt-2 text-[20px] font-[500] font-manrope h-[50px] w-[40%] rounded-full bg-gray-900 text-white md:mt-0 md:w-[20%]'>
                Submit
              </button>
            </div>
          </motion.form>
        </section>
      </main>
    </PageWrapper> // Closing the PageWrapper
  );
}
