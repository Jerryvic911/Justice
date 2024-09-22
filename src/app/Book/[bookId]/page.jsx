"use client";

export default function BookDetails({ params }) {
  return (
    <>
      <h1>Book details page</h1>
      <span>Welcome to the book details page for book #{params.bookId}</span>
    </>
  );
}