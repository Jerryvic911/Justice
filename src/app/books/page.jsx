'use client';
import { useState, useEffect , useRef} from 'react';
import { useRouter } from 'next/navigation';
import booksData from '../../data/books.data.json';
import Image from 'next/image';
import Orange from "../image/Orange.jpg";
import { motion, useInView } from 'framer-motion';
import PageWrapper from '../components/PageWrapper'; // Import the PageWrapper

// Component for Filter Items
const FilterItem = ({ id, label, checked, onChange }) => (
  <div className="mb-2 flex items-center">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="mr-2 h-5 w-5 text-black cursor-pointer rounded-full"
    />
    <label htmlFor={id} className="cursor-pointer text-gray-800 font-medium">{label}</label>
  </div>
);

export default function BooksPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [books, setBooks] = useState(booksData);
  const [searchFilter, setSearchFilter] = useState('');
  const [languageFilters, setLanguageFilters] = useState({
    english: false,
    hausa: false,
    pidgin: false,
  });
  const [topicFilters, setTopicFilters] = useState({
    "gender based violence": false,
    "crime prevention": false,
    security: false,
    "legal Rights": false,
    "mental Health": false,
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

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <PageWrapper> {/* Wrap the content with PageWrapper */}
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className='font-[poppins] text-3xl md:text-4xl mb-4 pt-5 font-[600]'>Books</h1>
        <p className='font-manrope text-lg md:text-xl leading-7'>Explore a curated collection of books, guides, and articles focused on gender-based violence, crime prevention, and personal security. Empower yourself with knowledge and find practical resources that can help you stay informed, stay safe, and take action. All materials are available for download or online reading in multiple languages</p>
        
        <div className='mb-4 mt-5 grid grid-cols-1 md:grid-cols-2'>
          <h1 className='mt-5 font-popins font-[600] text-2xl'>Filters</h1>
          <input
            type='text'
            placeholder='Search'
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className='w-full h-10 mt-5 rounded-md border border-black p-2 shadow-sm'
          />
        </div>

        <div className='flex flex-col md:flex-row md:space-x-6'>
          {/* Filters Section */}
          <motion.div
            className="flex flex-col w-full md:w-1/4 space-y-6"
            initial={{ opacity: 0, scale: 1, x: -100 }} // Slide in from the left
            animate={{ opacity: 1, scale: 1, x: 0 }} // Animation when fully visible
            exit={{ opacity: 0, scale: 1.5, x: -100 }} // Slide out to the left
            transition={{ duration: 0.5 }}
          >
            {/* Topic Filters */}
            <div className="bg-gray-100 font-manrope capitalize p-4 rounded-lg shadow">
              <h2 className="text-xl font-popins font-semibold mb-2">Filter by Topic</h2>
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

            {/* Type Filters */}
            <div className="bg-gray-100 p-4 font-manrope rounded-lg shadow">
              <h2 className="text-xl font-popins font-semibold mb-2">Filter by Type</h2>
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

            {/* Language Filters */}
            <div className="bg-gray-100 p-4 font-manrope  rounded-lg shadow">
              <h2 className="text-xl font-popins font-semibold mb-2">Filter by Language</h2>
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
          </motion.div>

          {/* Book Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex-1 pb-10">
            {books.filter(isBookFiltered).map(({ id, title, description, language, topic, type }) => {
            // Check if the book is in view

              return (
                <motion.div
                  ref={ref} // Attach the ref
                  key={id}
                  className='bg-white w-full max-w-[350px] h-[530px] mx-auto rounded-lg border border-gray-300 p-4 shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col justify-between'
                  onClick={() => router.push(`/books/${id}`)}
                  initial={{ opacity: 0, scale: 0.5, x: 100 }} // Slide in from the right
                  animate={ { opacity: 1, scale: 1, x: 0 } } // Animate when in view
                  exit={{ opacity: 0, scale: 1.5, x: 100 }} // Slide out to the right
                  transition={{ duration: 0.5 }} // Slide-in duration
                >
                  <Image
                    src={Orange}
                    width={300}
                    height={400}
                    alt={title}
                    className='object-cover h-[19rem] w-full rounded-t-lg'
                  />
                  <div className='flex-grow p-2'>
                    <h2 className='text-[20px] mb-2 font-medium font-popins'>{title}</h2>
                    <p className='text-base text-gray-600 font-[400] mb-2 font-manrope'>{description}</p>
                    <div className='mt-3 mb-5 flex text-sm gap-3'>
                      <h2 className='text-sm font-medium font-popins'>Topic: {topic}</h2>
                      <h2 className='text-sm font-popins'>Language: {Array.isArray(language) ? language.join(', ') : language}</h2>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-3 mt-auto'>
                    <button className='border-black font-popins font-semibold border h-8 rounded-lg shadow-md hover:bg-gray-100'>
                      Read Online
                    </button>
                    <button className='border-black font-popins font-semibold border h-8 rounded-lg shadow-md hover:bg-gray-100'>
                      Download
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper> // Closing the PageWrapper
  );
}
