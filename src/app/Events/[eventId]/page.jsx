"use client";
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import eventData from '../../../data/events.data.json';
import Donation from "../../Donate/Donation"


export default function BookDetails({ params }) {
  const [event] = useState(() => {
    return eventData.find(event => event.id === Number(params.eventId))
  });

  return (
    <main className="p-8 h-fit">
      <Navbar />
      <section>
        <h1 className='mb-6 font-bold text-3xl text-gray-800'>{event.title}</h1>
      
        <p className='tracking-wider'>{event.description} <br />
      </p>
      </section>
      <div>
      <Donation/>
      </div>
    </main>
  );
}