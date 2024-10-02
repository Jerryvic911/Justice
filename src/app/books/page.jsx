'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import booksData from '../../data/books.data.json';

export default function BooksPage() {
  const [books] = useState(booksData);
  const router = useRouter();

  return (
    <div className=''>
      <h1 className='mb-6 text-4xl font-bold'>Books List</h1>
      <ul className='space-y-6'>
        {books.map((book) => (
          <li
            key={book.id}
            className='rounded-lg border p-4 shadow-md'
            onClick={() => router.push(`/Books/${book.id}`)}
          >
            <h2 className='mb-2 text-2xl font-semibold'>{book.title}</h2>
            <p className='text-lg text-gray-600'>
              <strong>Author:</strong> {book.author}
            </p>
            <p className='mt-2'>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
