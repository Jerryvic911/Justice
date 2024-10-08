'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
// import BasicMenu from './Menu';

const links = [
  {
    id: 1,
    url: '/',
    name: 'home',
  },
  {
    id: 2,
    url: '/about',
    name: 'about',
  },
  {
    id: 3,
    url: '/books',
    name: 'books',
  },
  {
    id: 4,
    url: '/events',
    name: 'events',
  },
  {
    id: 5,
    url: '/contact',
    name: 'contact',
  },
  {
    id: 5,
    url: '/Map',
    name: 'Map',
  },
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
      <nav className='mb-1 flex flex-col px-2 py-4 shadow md:flex-row md:justify-between md:px-6'>
        <div className='flex w-full items-center justify-between md:w-1/4 md:justify-start'>
          {/* Logo */}
          <Link href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              // stroke='#3b82f6'
              className='inline-block h-8 w-8 -translate-y-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='#3b82f6'
                className='w-full object-cover'
                d='M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z'
              />
            </svg>
            <h1 className='inline-block text-[22px] font-medium md:text-[25px]'>
              Kirki
            </h1>
          </Link>

          {/* Hamburger Icon - only displays on small screens

          I nested it within the div to make it much easier to style
          */}
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
          {links.map((link) => (
            <li
              key={link.id}
              className='capitalize tracking-wide transition-all delay-700 hover:underline'
            >
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}

          {/**CHATBOT LINK

              TODO: Remove it from Navbar and place it as a hover button on the main page.
               */}
          {/* <li>
                <Link
                  href='/Chatbot'
                  className='flex items-center hover:underline'
                >
                  <svg
                    className='mr-1 h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 512'
                  >
                    <path
                      fill='#3b82f6'
                      d='M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z'
                    />
                  </svg>
                  Chatbot
                </Link>
              </li> */}
        </ul>

        {/* Donate Button */}
        <div
          className={`${isOpen ? 'flex' : 'hidden'} w-full items-center justify-center md:flex md:w-1/4`}
        >
          <Link
            href='/donate'
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
