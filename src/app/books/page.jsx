'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import booksData from '../../data/books.data.json';

// Component for Filter Items
const FilterItem = ({ id, label, checked, onChange }) => (
  <div className="mb-2 flex items-center">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <label htmlFor={id} className="cursor-pointer text-gray-800 font-medium">{label}</label>
  </div>
);

export default function BooksPage() {
  const [books, setBooks] = useState(booksData);
  const [searchFilter, setSearchFilter] = useState('');
  const [languageFilters, setLanguageFilters] = useState({
    english: false,
    hausa: false,
    pidgin: false,
  });
  const [topicFilters, setTopicFilters] = useState({
    safety: false,
    rights: false,
    health: false,
  });
  const [typeFilters, setTypeFilters] = useState({
    ebook: false,
    guide: false,
    article: false,
  });
  const router = useRouter();

  const isBookFiltered = (book) => {
    const { title, author, language, topic, type } = book;
    const isTopicFiltered = !Object.values(topicFilters).includes(true) || (topic && topic.toLowerCase && topicFilters[topic.toLowerCase()]);
    const isLanguageFiltered = !Object.values(languageFilters).includes(true) || (language && Array.isArray(language)
      ? language.some(lang => lang.toLowerCase && languageFilters[lang.toLowerCase()])
      : language && language.toLowerCase && languageFilters[language.toLowerCase()]);
    const isTypeFiltered = !Object.values(typeFilters).includes(true) || (type && Array.isArray(type)
      ? type.some(t => t.toLowerCase && typeFilters[t.toLowerCase()])
      : type && type.toLowerCase && typeFilters[type.toLowerCase()]);
    return (
      (title && title.toLowerCase().includes(searchFilter.toLowerCase()) || author && author.toLowerCase().includes(searchFilter.toLowerCase())) &&
      isLanguageFiltered &&
      isTopicFiltered &&
      isTypeFiltered
    );
  };

  const handleTopicChange = ({ target: { id, checked } }) => {
    setTopicFilters(prev => ({ ...prev, [id]: checked }));
  };

  const handleLanguageChange = ({ target: { id, checked } }) => {
    setLanguageFilters(prev => ({ ...prev, [id]: checked }));
  };

  const handleTypeChange = ({ target: { id, checked } }) => {
    setTypeFilters(prev => ({ ...prev, [id]: checked }));
  };

  console.log('Language Filters:', languageFilters);

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className='mb-6 text-4xl font-bold text-center'>Books List</h1>
      <div className='mb-4 grid grid-cols-2'>
        <h1 className='mt-5'>Filters</h1>
        <input
          type='text'
          placeholder='Search by title or author'
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          className='w-full rounded-md border border-gray-300 p-2 md:p-3 lg:p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='flex flex-col md:flex-row md:space-x-6'>
        {/* Filters Section */}
        <div className="flex flex-col w-full md:w-1/4 space-y-6">
          {/* Topic Filters */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">Filter by Topic</h2>
            {Object.entries(topicFilters).map(([topic, checked]) => (
              <FilterItem
                key={topic}
                id={topic}
                label={topic.charAt(0).toUpperCase() + topic.slice(1)}
                checked={checked}
                onChange={handleTopicChange}
              />
            ))}
          </div>

          {/* Language Filters */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">Filter by Language</h2>
            {Object.entries(languageFilters).map(([language, checked]) => (
              <FilterItem
                key={language}
                id={language}
                label={language.charAt(0).toUpperCase() + language.slice(1)}
                checked={checked}
                onChange={handleLanguageChange}
              />
            ))}
          </div>

          {/* Type Filters */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">Filter by Type</h2>
            {Object.entries(typeFilters).map(([type, checked]) => (
              <FilterItem
                key={type}
                id={type}
                label={type.charAt(0).toUpperCase() + type.slice(1)}
                checked={checked}
                onChange={handleTypeChange}
              />
            ))}
          </div>
        </div>

        {/* Book Cards Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pb-10 flex-1">
          {books.filter(isBookFiltered).map(({ id, title, author, description, language, topic, type }) => (
            <div
              key={id}
              className='bg-white rounded-lg border border-gray-300 p-4 shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg'
              onClick={() => router.push(`/books/${id}`)}
            >
              <h2 className='mb-2 text-lg font-semibold text-blue-700'>Language: {Array.isArray(language) ? language.join(', ') : language}</h2>
              <h2 className='mb-2 text-xl font-semibold text-blue-700'>{title}</h2>
              <p className='text-lg text-gray-600'>
                <strong>Author:</strong> {author}
              </p>
              <p className='mt-2 text-sm lg:text-base'>{description}</p>
              <h2>Topic: {topic}</h2>
              <h2>Type: {Array.isArray(type) ? type.join(', ') : type}</h2>
              <div className='mt-10 grid grid-cols-2 gap-3'>
                <button className='border-black font-semibold border-[1px] h-8 rounded-lg shadow-md'>
                  Read Online
                </button>
                <button className='border-black font-semibold border-[1px] rounded-lg shadow-md'>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
