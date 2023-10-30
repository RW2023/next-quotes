/* eslint-disable @next/next/no-img-element */
// Import necessary libraries and components
'use client';
import React, { useState } from 'react';
import BlackHistoryQuoteGenerator from '@/components/BlackHistoryQuoteGenerator';
import blackHistoryQuotes from '@/data/blackHistoryQuotes'; // Adjust the import path as needed

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
    <div className='grid-cols-2 '>
      <div className="flex flex-col">
        <h1 className="text-center text-headline text-xl p-2 mx-0  m-auto uppercase">
          random quotes
        </h1>
        <div>
          <img
            src={
              quote.img ||
              '/speech.png'
            }
            alt="mlk"
            height={400}
            width={400}
            className="m-auto p-1 mb-4 border-2 border-headline rounded-lg shadow-lg"
          />
        </div>
        <BlackHistoryQuoteGenerator
          quote={quote}
          handleNewQuote={handleNewQuote}
        />
      </div>
    </div>
  )
}