'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import eventData from '../../data/events.data.json';

export default function Events() {
  const [event] = useState(eventData);
  const router = useRouter();

  return (
    <div className='p-8'>
      <h1 className='mb-6 text-4xl font-bold'>Events</h1>
      <ul className='space-y-6'>
        {event.map((event) => (
          <li
            key={event.id}
            className='rounded-lg border p-4 shadow-md'
            onClick={() => router.push(`/events/${event.id}`)}
          >
            <h2 className='mb-2 text-2xl font-semibold'>{event.title}</h2>
            <p className='mt-2'>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
