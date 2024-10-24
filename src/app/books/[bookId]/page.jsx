'use client';
import { useState } from 'react';
import booksData from '../../../data/books.data.json';

export default function BookDetails({ params }) {
  const [book] = useState(() => {
    // Gets the book with an ID that matches the one specified in the URL.
    return booksData.find((book) => book.id === Number(params.bookId));
  });

  return (
    <main className='flex flex-col mt-4 font-manrope mb-6 px-4 md:px-10 lg:px-[10rem]'>
      <div className='w-full'>
        <h1 className='text-[28px] md:text-[35px] font-semibold font-popins mb-4'>Book Details</h1>
      </div>
      <section className='w-full'>
        <h2 className='mb-4 text-[16px] md:text-[18px] font-[500] border-t border-black pt-5 flex'>
          <span className='text-[#707070] text-[18px] md:text-[20px] font-[600] mr-2 md:mr-[14rem] font-popins '>Title:</span>
          {book.title}
        </h2>
        <h2 className='mb-4 text-[16px] md:text-[18px] font-[500] capitalize border-t pt-5 flex w-full border-black'>
          <span className='text-[#707070] text-[18px] md:text-[20px] font-[600] mr-2 md:mr-[13rem] font-popins '>Author:</span> {book.author}
        </h2>
        <p className='border-t border-b text-[16px] md:text-[18px] font-[500] border-black mb-4 pt-5 flex w-full pb-3'>
          <span className='text-[#707070] text-[18px] md:text-[20px] font-[600] mr-2 md:mr-[10rem] font-popins '>Description:</span>
          {book.description}
        </p>

        <h1 className='text-[26px] md:text-[30px] font-semibold mb-4 pt-5 pb-3 font-popins '>Preview</h1>
        <div className='w-full md:w-[1000px] h-auto pt-4 bg-[#F7F4F4] px-4 md:px-9 rounded-lg'>
          <h1 className='mb-4 text-[26px] md:text-[30px] font-[600] font-popins '>{book.preview}</h1>
          <p className='text-justify text-[16px] md:text-[18px] font-[500] h-auto md:h-[100px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            elit quis sapien pharetra eleifend in vitae libero. Nulla et blandit
            sapien. Etiam cursus tellus velit, id vestibulum ipsum mattis id.
            Vivamus consequat mi ac ipsum bibendum, vel dignissim ante pharetra.
            Fusce luctus est consectetur, interdum ipsum et, ultricies nisi.
          </p>
        </div>
        <div className='flex float-right gap-7 pl-10 pt-5'>
  <button className='border-black font-semibold border w-28 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 rounded-lg shadow-md hover:bg-gray-100'>
    Read Online
  </button>
  <button className='border-black font-semibold border w-32 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 rounded-lg shadow-md hover:bg-gray-100'>
    Download PDF
  </button>
</div>

      </section>
    </main>
  );
}
