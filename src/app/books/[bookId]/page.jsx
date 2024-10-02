'use client';
import { useState } from 'react';
import booksData from '../../../data/books.data.json';

export default function BookDetails({ params }) {
  const [book] = useState(() => {
    // Gets the book with an ID that matches the one specified in the URL.
    return booksData.find((book) => book.id === Number(params.bookId));
  });

  return (
    <main className=''>
      <section>
        <h1 className='mb-6 text-3xl font-bold text-gray-800'>{book.title}</h1>
        <span className='mb-6 inline-block font-light capitalize italic'>
          {book.author}
        </span>
        <p className='tracking-wider'>
          {book.description} <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          elit quis sapien pharetra eleifend in vitae libero. Nulla et blandit
          sapien. Etiam cursus tellus velit, id vestibulum ipsum mattis id.
          Vivamus consequat mi ac ipsum bibendum, vel dignissim ante pharetra.
          Fusce luctus est consectetur, interdum ipsum et, ultricies nisi.
          Suspendisse nibh risus, efficitur vel luctus vitae, maximus at elit.
          Cras accumsan libero in dolor commodo volutpat. In eget neque ut lacus
          auctor interdum. Donec sit amet mi non magna molestie porttitor. Ut
          sed augue ac ante tincidunt feugiat. Suspendisse blandit tristique
          ligula, non tempor ex commodo eget. Aliquam bibendum massa tortor, sed
          molestie massa consequat et. Donec lacus mauris, lobortis ac fringilla
          nec, rutrum et lorem. Nam sodales placerat fermentum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc consequat semper
          sapien, sit amet aliquet nisi consectetur quis. Quisque sit amet leo
          ac velit finibus malesuada vestibulum et diam. Mauris vehicula enim
          nunc. Vestibulum congue lacinia nunc vitae eleifend. Ut ornare nisl
          eget quam iaculis facilisis. Vivamus efficitur nunc at velit dapibus,
          non tempus tortor dictum. Curabitur nisi tortor, tempus at nibh eu,
          venenatis commodo nisi. Sed sollicitudin dictum justo, eget semper
          turpis condimentum a. Aenean viverra venenatis tempor. Vivamus id
          sapien eu ante porttitor condimentum ac eleifend urna. Quisque non
          suscipit dui. Sed sit amet aliquet dolor, et facilisis est. Nullam
          laoreet posuere auctor. Donec nibh eros, luctus ut sapien quis, auctor
          auctor massa. Phasellus quis justo lacus. Morbi eget vulputate ante.
          Etiam rutrum nisl purus, eu gravida velit iaculis non. Vestibulum
          faucibus quis justo vitae condimentum. Pellentesque in fermentum ante,
          at interdum tortor. Sed malesuada risus nec ligula ornare, non dapibus
          turpis interdum. Aenean orci purus, consectetur eget mauris ac,
          porttitor eleifend urna. Sed eget bibendum nisi. Sed a efficitur mi.
          Nulla congue ex urna, sit amet dapibus lorem sagittis et. Nullam
          pulvinar ullamcorper tempor. Praesent auctor elit at bibendum cursus.
          Aliquam eget feugiat felis. Etiam egestas laoreet arcu in
          pellentesque. Maecenas condimentum, sapien quis vestibulum efficitur,
          quam urna sodales tortor, vitae iaculis odio risus nec orci. Maecenas
          sollicitudin, lacus eu eleifend euismod, erat libero suscipit quam,
          eget egestas ante risus a tellus. Cras sodales ipsum libero, quis
          vulputate massa mattis id. Donec iaculis ultricies semper. Vestibulum
          sit amet enim facilisis, vulputate libero sit amet, cursus massa.
          Pellentesque et odio sem. Ut varius eros nunc, et rhoncus ante
          dignissim et. Donec et sapien fringilla, malesuada lacus et, placerat
          erat.
        </p>
      </section>
    </main>
  );
}
