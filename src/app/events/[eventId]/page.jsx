'use client';
import { useState } from 'react';
import eventData from '../../../data/events.data.json';

export default function EventDetails({ params }) {
  const [event] = useState(() => {
    return eventData.find((event) => event.id === Number(params.eventId));
  });

  return (
    <main className='flex flex-col font-manrope  mt-4 mb-6 px-4 md:px-6 lg:px-8 xl:px-[10rem]'>
      <div className='w-full mb-6'>
        <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-semibold mb-2 font-popins '>Event Details</h1>
        <h2 className='text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-popins'>{event.title}</h2>
      </div>
      <section className='w-full'>
        <div className='mb-4 text-[14px] md:text-[16px] lg:text-[18px] font-[500] border-t border-black pt-5 flex flex-col md:flex-row md:items-center'>
          <span className='text-[#707070] font-[600] md:mr-4 font-popins '>Date:</span>
          <span>{event.date}</span>
        </div>
        <div className='mb-4 text-[14px] md:text-[16px] lg:text-[18px] font-[500] border-t border-black pt-5 flex flex-col md:flex-row md:items-center'>
          <span className='text-[#707070] font-[600] md:mr-4 font-popins '>Time:</span>
          <span>{event.time.join(" - ")}</span>
         
        </div>
        <div className='mb-4 text-[14px] md:text-[16px] lg:text-[18px] font-[500] border-t border-black pt-5 flex flex-col md:flex-row md:items-center'>
          <span className='text-[#707070] font-[600] md:mr-4 font-popins '>Location:</span>
          <span>{event.location}</span>
        </div>
        <p className='border-t text-[14px] md:text-[16px] lg:text-[18px] font-[500] border-black mb-4 pt-5 flex flex-col md:flex-row md:items-center'>
          <span className='text-[#707070] font-[600] md:mr-4 font-popins '>Description:</span>
          <span>{event.description}</span>
        </p>
        <div className='mb-4 text-[14px] md:text-[16px] lg:text-[18px] font-[500] border-t border-black pt-5 flex flex-col md:flex-row md:items-center'>
          <span className='text-[#707070] font-[600] md:mr-4 font-popins '>Topics:</span>
          <span>{event.topics.join(' - ')}</span>
        </div>
        <div className='mb-4 text-[14px] md:text-[16px] lg:text-[18px] font-[500] border-t border-b pb-4 border-black pt-5 flex flex-col md:flex-row md:items-center'>
          <span className='text-[#707070] font-[600] md:mr-4 font-popins '>Speakers/Trainers:</span>
          <div className='flex flex-col'>
            <span>{event.speakers}</span>
            <span>{event.speakers1}</span>
          </div>
        </div>
      </section>

      <div className='mt-6'>
        <div>
          <h2 className='text-lg md:text-xl font-semibold font-popins '>Registration Information:</h2>
        </div>
        <button className='w-[150px] h-[40px] mt-3 px-6 py-2 rounded-full text-white bg-[#423F3F]'>Register Now</button>
        <div className='mt-5'>
          <p className='text-[14px] md:text-[16px] font-[500] mb-4 font-popins '>
            Contact for Questions: 
            <span className='ml-1'>
              <a href="mailto:contact@kirki.com" className='text-blue-500'>contact@kirki.com</a>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
