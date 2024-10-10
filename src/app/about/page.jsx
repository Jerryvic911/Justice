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
    <main className='mx-4 mt-10 max-w-7xl sm:mx-6 lg:mx-[100px]'>
      <section className='my-4'>
        <div>
          <h1 className='text-4xl font-semibold font-popins leading-tight capitalize'>
            about us
          </h1>
          <span className='font-light font-manrope text-lg leading-relaxed'>
            Get in Touch we are Here to Listen, Help, and Support — Reach Out Today.
          </span>
        </div>
        <Image
          src={image}
          alt='about us'
          className='h-auto w-full object-contain md:h-[400px]'
        />
      </section>
      <section className='my-4'>
        <h3 className='text-3xl font-popins font-semibold leading-tight capitalize pb-7'>
          our mission
        </h3>
        <p className='text-lg font-manrope font-medium leading-relaxed pb-10'>
          Our mission at Kirki is to empower individuals and communities in
          Kaduna State by providing accessible tools and resources to prevent,
          report, and resolve cases of gender-based violence, crime, and
          insecurity. We strive to create a safer environment where everyone has
          the support they need to take action, seek help, and contribute to a
          culture of safety and justice.
        </p>
      </section>
      <section className='my-4'>
        <h3 className='text-3xl font-popins font-semibold capitalize pb-5'>
          how it works
        </h3>
        <ul className='space-y-4 pb-9'>
          {instructions.map((instruction) => (
            <li key={instruction.id} className='py-2 text-lg font-manrope font-medium'>
              <span className='font-bold capitalize font-popins'>{instruction.title}:</span> {instruction.body}
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
