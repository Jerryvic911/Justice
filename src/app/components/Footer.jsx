import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex h-fit w-full flex-col items-center justify-center bg-[#001733] text-white md:h-[250px]'>
      <div className='mb-4 w-[90%] p-3 md:w-[50%]'>
        <span className='mb-3 inline-block p-2 text-lg font-bold capitalize tracking-widest md:text-xl'>
          Join us in the fight against GBV{' '}
        </span>
        <p className='p-2'>
          Whether you’re a survivor, ally, or advocate, your involvement can
          make a difference. Join us today in empowering survivors and fighting
          GBV
        </p>
      </div>
      <div className='flex w-[90%] justify-center p-2 md:w-[50%] md:justify-start'>
        <Link
          href='/donate'
          className='flex h-[50px] w-[50%] flex-col items-center justify-center rounded-full bg-[#b6f16f] capitalize tracking-wider text-black md:w-[20%]'
        >
          Donate
        </Link>
      </div>
    </footer>
  );
}
