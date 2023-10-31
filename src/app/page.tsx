// File: src/pages/index.tsx

'use client';

import React, { useState } from 'react';
import BlackHistoryQuoteGenerator from '@/components/BlackHistoryQuoteGenerator';
import blackHistoryQuotes from '@/data/blackHistoryQuotes';
import Image from 'next/image';


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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary shadow-lg rounded-lg pt-6">
        <h1 className="col-span-full text-center text-2xl font-bold mb-6 mt-3 text-tertiary">
          Wise Words from Black Thought Leaders
        </h1>
        <div className="flex flex-col items-center p-3 bg-tertiary rounded-lg shadow-lg">
          <h2 className="text-headline text-lg">{quote.author}</h2>
          <Image
            src={quote.img || '/fist.png'}
            alt={quote.author}
            height={300}
            width={300}
            className="border-2 border-headline p-1 bg-tertiary rounded-lg shadow-lg mb-3"
          />
          <h2 className="text-tertiary text-lg">{quote.author}</h2>
        </div>
        <div className="flex flex-col items-center p-3 bg-tertiary rounded-lg shadow-lg">
          <BlackHistoryQuoteGenerator
            quote={quote}
            handleNewQuote={handleNewQuote}
          />
        </div>
      </div>
    </div>
  );
}
