'use client';
import { useState } from 'react';
import booksData from '../../../data/books.data.json';

export default function BookDetails({ params }) {
  const [book] = useState(() => {
    // Gets the book with an ID that matches the one specified in the URL.
    return booksData.find((book) => book.id === Number(params.bookId));
  });

  return (
    <main className='flex flex-col mt-4 mb-6 px-4 md:px-10 lg:px-[10rem]'>
      <div className='w-full'>
        <h1 className='text-[28px] md:text-[35px] font-semibold mb-4'>Book Details</h1>
      </div>
      <section className='w-full'>
        <h2 className='mb-4 text-[16px] md:text-[18px] font-[500] border-t border-black pt-5 flex'>
          <span className='text-[#707070] text-[18px] md:text-[20px] font-[600] mr-2 md:mr-[14rem]'>Title:</span>
          {book.title}
        </h2>
        <h2 className='mb-4 text-[16px] md:text-[18px] font-[500] capitalize border-t pt-5 flex w-full border-black'>
          <span className='text-[#707070] text-[18px] md:text-[20px] font-[600] mr-2 md:mr-[13rem]'>Author:</span> {book.author}
        </h2>
        <p className='border-t border-b text-[16px] md:text-[18px] font-[500] border-black mb-4 pt-5 flex w-full pb-3'>
          <span className='text-[#707070] text-[18px] md:text-[20px] font-[600] mr-2 md:mr-[10rem]'>Description:</span>
          {book.description}
        </p>

        <h1 className='text-[26px] md:text-[30px] font-semibold mb-4 pt-5 pb-3'>Preview</h1>
        <div className='w-full md:w-[1000px] h-auto pt-4 bg-[#F7F4F4] px-4 md:px-9 rounded-lg'>
          <h1 className='mb-4 text-[26px] md:text-[30px] font-[600]'>{book.preview}</h1>
          <p className='text-justify text-[16px] md:text-[18px] font-[500] h-auto md:h-[100px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            elit quis sapien pharetra eleifend in vitae libero. Nulla et blandit
            sapien. Etiam cursus tellus velit, id vestibulum ipsum mattis id.
            Vivamus consequat mi ac ipsum bibendum, vel dignissim ante pharetra.
            Fusce luctus est consectetur, interdum ipsum et, ultricies nisi.
          </p>
        </div>
      </section>
    </main>
  );
}
