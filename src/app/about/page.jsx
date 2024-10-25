"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import PageWrapper from '../components/PageWrapper'; // Make sure to import PageWrapper

const instructions = [
  {
    id: 1,
    title: 'access resources',
    body: 'Browse our library of educational materials, including books, guides, and expert advice on gender-based violence, crime prevention, and safety practices.',
  },
  {
    id: 2,
    title: 'report incidents',
    body: 'Use the SOS Map to report incidents of violence or insecurity, and immediately send your location to authorities and emergency contacts via our emergency button.',
  },
  {
    id: 3,
    title: 'participate in events',
    body: 'Stay updated with local and virtual events aimed at raising awareness, offering support, and fostering community engagement in the fight against gender-based violence.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper> {/* Wrap your content with PageWrapper */}
      <main className='mx-4 mt-10 max-w-7xl sm:mx-6 lg:mx-[100px]'>
        <motion.section 
          className='my-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className='text-4xl font-semibold font-popins leading-tight capitalize'>
              about us
            </h1>
            <span className='font-light font-manrope text-lg leading-relaxed'>
              Get in Touch we are Here to Listen, Help, and Support — Reach Out Today.
            </span>
          </div>
          <div className="mt-3 border-black border-2 rounded-lg w-full h-[216px] mb-6">
          </div>
        </motion.section>
        
        <motion.section 
          className='my-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='text-3xl font-popins font-semibold leading-tight capitalize pb-7'>
            our mission
          </h3>
          <p className='text-lg font-manrope font-medium leading-relaxed pb-10'>
            Our mission at Kirki is to empower individuals and communities in
            Kaduna State by providing accessible tools and resources to prevent,
            report, and resolve cases of gender-based violence, crime, and
            insecurity. We strive to create a safer environment where everyone has
            the support they need to take action, seek help, and contribute to a
            culture of safety and justice.
          </p>
        </motion.section>

        <motion.section 
          className='my-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className='text-3xl font-popins font-semibold capitalize pb-5'>
            how it works
          </h3>
          
          <ul className='space-y-4 pb-9'>
            {instructions.map((instruction) => {
              


              return (
                <motion.li 
                  ref={ref}
                  key={instruction.id} 
                  className='py-2 text-lg font-manrope font-medium' 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: instruction.id * 0.1 }}
                >
                  <span className='font-bold capitalize font-popins'>{instruction.title}:</span> {instruction.body}
                  <hr />
                </motion.li>
              );
            })}
          </ul>
        </motion.section>
      </main>
    </PageWrapper> // Closing the PageWrapper
  );
}
