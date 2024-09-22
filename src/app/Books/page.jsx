"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

const booksData = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel set in the Jazz Age.' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A story about racial injustice.' },
  { id: 3, title: '1984', author: 'George Orwell', description: 'A dystopian novel about totalitarianism.' },
  // Add more books here...
];

export default function BooksPage() {
  const [books] = useState(booksData);
  const router = useRouter();

  return (
    <div className="p-8">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Books List</h1>
      <ul className="space-y-6">
        {books.map((book) => (
          <li key={book.id} className="border p-4 rounded-lg shadow-md"
          onClick={() => router.push(`/Book/${book.id}`)}>
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="text-lg text-gray-600"><strong>Author:</strong> {book.author}</p>
            <p className="mt-2">{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
