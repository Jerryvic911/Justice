"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import eventData from '../../data/events.data.json';

export default function BooksPage() {
  const [event] = useState(eventData);
  const router = useRouter();

  return (
    <div className="p-8">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Events</h1>
      <ul className="space-y-6">
        {event.map((event) => (
          <li key={event.id} className="border p-4 rounded-lg shadow-md"
          onClick={() => router.push(`/Events/${event.id}`)}>
            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
            <p className="mt-2">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
