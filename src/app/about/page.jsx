import React from 'react';
import Image from 'next/image';
import image from '../image/Bodyimage.png';

const instructions = [
  {
    id: 1,
    title: 'access resources',
    body: 'Browse our library of educational materials, including books, guides, and expert advice on gender-based violence, crime prevention, and safety practices.',
  },
  {
    id: 2,
    title: 'report incidents',
    body: 'Use the SOS Map to report incidents of violence or insecurity, and immediately send your location to authorities and emergency contacts via our emergency button.',
  },
  {
    id: 3,
    title: 'participate in events',
    body: 'Stay updated with local and virtual events aimed at raising awareness, offering support, and fostering community engagement in the fight against gender-based violence.',
  },
];

export default function About() {
  return (
    <main className='mx-auto w-full px-1 md:w-[60%] md:px-0'>
      <section className='my-4 px-2'>
        <div>
          <h1 className='text-lg font-bold capitalize tracking-wider md:text-2xl md:tracking-widest'>
            about us
          </h1>
          <span className='font-lighter text-xs font-extralight capitalize tracking-tight text-gray-500 md:text-sm'>
            Get in Touch we are Here to Listen, Help, and Support — Reach Out
            Today.
          </span>
        </div>
        <Image
          src={image}
          alt='about us'
          className='h-auto w-full object-contain md:h-[400px]'
        />
      </section>
      <section className='my-4 px-2'>
        <h3 className='text-md font-semibold capitalize tracking-wide md:text-xl'>
          our mission
        </h3>
        <p className='text-xs font-extralight tracking-tight text-gray-500 md:text-sm'>
          Our mission at Kirki is to empower individuals and communities in
          Kaduna State by providing accessible tools and resources to prevent,
          report, and resolve cases of gender-based violence, crime, and
          insecurity. We strive to create a safer environment where everyone has
          the support they need to take action, seek help, and contribute to a
          culture of safety and justice.
        </p>
      </section>
      <section className='my-4 px-2'>
        <h3 className='text-md font-semibold capitalize tracking-wide md:text-xl'>
          how it works
        </h3>
        <ul>
          {instructions.map((instruction) => (
            <li
              key={instruction.id}
              className='py-2 text-xs font-extralight lowercase tracking-tight text-gray-500 md:text-sm'
            >
              <span className='font-semibold capitalize'>
                {instruction.title}:
              </span>{' '}
              {instruction.body}
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
