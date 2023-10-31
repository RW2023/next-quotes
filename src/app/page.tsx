/* eslint-disable @next/next/no-img-element */
// Import necessary libraries and components
// File: src/pages/index.tsx
'use client';

import React, { useState } from 'react';
import BlackHistoryQuoteGenerator from '@/components/BlackHistoryQuoteGenerator';
import blackHistoryQuotes from '@/data/blackHistoryQuotes';

export default function Home() {
  const [quote, setQuote] = useState(generateRandomQuote());

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * blackHistoryQuotes.length);
    return blackHistoryQuotes[randomIndex];
  }

  const handleNewQuote = () => {
    setQuote(generateRandomQuote());
  };

  return (
    <div className="container mx-auto min-h-screen p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1 className="col-span-full text-center mb-4">Quotes</h1>
      <div className="flex flex-col items-center">
        <img
          src={quote.img || '/speech.png'}
          alt="mlk"
          height={600}
          width={600}
          className="m-auto p-1 mb-4 border-2 border-headline rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center">
        <BlackHistoryQuoteGenerator
          quote={quote}
          handleNewQuote={handleNewQuote}
        />
      </div>
    </div>
  );
}
