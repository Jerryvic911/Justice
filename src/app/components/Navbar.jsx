'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const links = [
  { id: 1, url: '/', name: 'home' },
  { id: 2, url: '/about', name: 'about' },
  { id: 3, url: '/books', name: 'books' },
  { id: 4, url: '/events', name: 'events' },
  { id: 5, url: '/contact', name: 'contact' },
  { id: 6, url: '/map', name: 'map' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Section */}
      <nav className='mb-1 flex flex-col font-manrope px-2 py-4 shadow md:flex-row md:justify-between md:px-6'>
        <div className='flex w-full items-center justify-between md:w-1/4 md:justify-start'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <motion.svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              className='inline-block h-8 w-8 -translate-y-1'
              initial={{ opacity: 0, y: -50 }} // Start position
              animate={{ opacity: 1, y: 0 }} // Animate to position
              transition={{ duration: 0.8 }} // Duration
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='#3b82f6'
                d='M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z'
              />
            </motion.svg>
            <motion.h1
              className='inline-block text-[22px] font-medium font-popins md:text-[25px]'
              initial={{ opacity: 0, y: -50 }} // Start position
              animate={{ opacity: 1, y: 0 }} // Animate to position
              transition={{ duration: 0.8 }} // Duration
            >
              Kirki
            </motion.h1>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-blue-500 focus:outline-none md:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-around gap-7 py-4 text-lg font-medium md:flex md:w-1/3 md:flex-row md:py-0`}
        >
          {links.map((link, index) => (
            <motion.li
              key={link.id}
              className='capitalize tracking-wide transition-all delay-700 hover:underline'
              initial={{ opacity: 0, y: -20 }} // Start position
              animate={isOpen ? { opacity: 1, y: -20 } : { opacity: 5, y: 6 }} // Animate to position
              transition={{ duration: 1, delay: index * 0.2 }} // Staggered delay 
            >
              <Link href={link.url} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Donate Button */}
        <div
          className={`${isOpen ? 'flex' : 'hidden'} w-full items-center justify-center md:flex md:w-1/4`}
        >
          <Link
            href='/donate'
            onClick={() => setIsOpen(false)}
            className='flex h-[40px] w-[60%] items-center justify-center rounded-full border border-solid border-black bg-[#B8F171] text-black transition-colors ease-in-out md:w-1/3 md:bg-transparent md:text-black md:hover:bg-[#B8F171] md:hover:text-black'
          >
            Donate
          </Link>
        </div>
      </nav>

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 z-10 rounded-full bg-blue-500 p-3 text-white shadow-lg transition duration-300 hover:bg-blue-600'
        >
          ↑Top
        </button>
      )}
    </>
  );
}

export default Navbar;
