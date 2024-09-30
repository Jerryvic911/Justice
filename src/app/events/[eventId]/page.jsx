'use client';
import { useState } from 'react';
import eventData from '../../../data/events.data.json';
import Donation from '../../donate/Donation';

export default function EventDetails({ params }) {
  const [event] = useState(() => {
    return eventData.find((event) => event.id === Number(params.eventId));
  });

  return (
    <main className='h-fit p-8'>
      <section>
        <h1 className='mb-6 text-3xl font-bold text-gray-800'>{event.title}</h1>

        <p className='tracking-wider'>
          {event.description} <br />
        </p>
      </section>
      <div>
        <Donation />
      </div>
    </main>
  );
}
