'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import eventData from '../../data/events.data.json';

export default function Events() {
  const [event] = useState(eventData);
  const router = useRouter();

  return (
    <div className='p-4 sm:p-8'>
      <div>
        <h1 className='mb-4 text-3xl sm:text-4xl font-bold'>Events</h1>
        <p className='font-manrope text-base sm:text-lg md:text-xl mb-5 leading-6 md:leading-7'>
          Explore a curated collection of books, guides, and articles focused on gender-based violence, crime prevention, and personal security. Empower yourself with knowledge and find practical resources that can help you stay informed, stay safe, and take action. All materials are available for download or online reading in multiple languages.
        </p>
        <div className="border-black border-2 rounded-lg w-full h-[150px] md:h-[216px] mb-6"></div>
      </div>

      <h2 className='mb-4 text-xl sm:text-2xl font-popins font-bold'>Upcoming Events</h2>
      <ul className='space-y-4 sm:space-y-6'>
        {event.map((event) => (
          <li
            key={event.id}
            className='border-b border-black p-4 cursor-pointer hover:bg-gray-100' // Added hover effect for better UX
            onClick={() => router.push(`/Events/${event.id}`)}
          >
            <div className='flex flex-col sm:flex-row'>
              <div className='flex flex-col pl-2 sm:pl-5 pr-2 sm:pr-5'>
                <p className='text-[24px] sm:text-[30px] font-[500] font-popins text-[#707070]'>{event.shortmonth}</p>
                <h1 className='border-t w-auto border-black text-[32px] sm:text-[40px] font-[500] font-popins'>{event.shortdate}</h1>
              </div>

              <div className="border-black border-2  rounded-lg w-full sm:w-[500px] h-[150px] sm:h-[200px] mb-4 sm:mb-6"></div>

              <div className='flex flex-col ml-0 sm:ml-4 font-manrope'>
                <h2 className='mb-1 text-xl sm:text-2xl font-semibold capitalize font-popins'>{event.title}</h2>
                <h2 className='mb-1 text-[16px] sm:text-[20px] font-[500] text-[#707070]'>{event.location}</h2>
                <span className='md:border-b md:border-black md:w-[30rem] pb-4 sm:pb-7 mt-1 text-[#707070] font-[500] text-[16px] sm:text-[20px]'>
                  {Array.isArray(event.time) ? event.time.join(" - ") : event.time}
                </span>

                <div className='mt-4 sm:mt-7'>
                  <button className='font-[600] font-popins text-[16px] sm:text-[20px] leading-[24px] sm:leading-[37.5px] flex items-center py-2  '>
                    Read more 
                    <span className='ml-2'>&#8594;</span> 
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
