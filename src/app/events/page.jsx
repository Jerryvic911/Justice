'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import eventData from '../../data/events.data.json';

export default function Events() {
  const [event] = useState(eventData);
  const router = useRouter();

  return (
    <div className='p-8'>
      <div>
        <h1 className='mb-6 text-4xl font-bold'>Events</h1>
        <p className='font-manrope text-lg md:text-xl leading-7'>
          Explore a curated collection of books, guides, and articles focused on gender-based violence, crime prevention, and personal security. Empower yourself with knowledge and find practical resources that can help you stay informed, stay safe, and take action. All materials are available for download or online reading in multiple languages.
        </p>
        <div className="border-black border-2 rounded-lg w-full h-[216px] mb-6">
        </div>
      </div>

      <h2 className='mb-6 text-2xl font-bold'>Upcoming Events</h2>
      <ul className='space-y-6'>
        {event.map((event) => (
          <li
            key={event.id}
            className='rounded-lg border p-4 shadow-md cursor-pointer'
            onClick={() => router.push(`/Events/${event.id}`)}
          >
            <div className='flex'>
              <p className='text-sm font-manrope'>{event.date}</p>
              <div className="border-black border-2 rounded-lg w-[500px] h-[200px] mb-6">
              </div>

              <div className='flex flex-col ml-4'>
                <h2 className='mb-2 text-2xl font-semibold'>{event.title}</h2>
                <h2 className='mb-2 text-2xl font-semibold'>{event.location}</h2>
                <span>
                  {Array.isArray(event.time) ? event.time.join(" - ") : event.time}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
