"use client"
import { useEffect } from 'react';
import Body from "./components/Body";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <PageWrapper>
          <Body />
    </PageWrapper>
  );
}
