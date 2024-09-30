"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import booksData from '../../data/books.data.json';

export default function BooksPage() {
  const [books] = useState(booksData);
  const router = useRouter();

  return (
    <div className="">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Books List</h1>
      <ul className="space-y-6">
        {books.map((book) => (
          <li key={book.id} className="border p-4 rounded-lg shadow-md"
          onClick={() => router.push(`/Books/${book.id}`)}>
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="text-lg text-gray-600"><strong>Author:</strong> {book.author}</p>
            <p className="mt-2">{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
