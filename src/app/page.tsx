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
    <div className="min-h-screen bg-background ">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary shadow-lg rounded-lg pt-6 ">
        <h1 className="col-span-full text-center font-bold text-4xl text-headline bg background">
          Timeless Wisdom from Black Thought Leaders
        </h1>
        <h2 className="col-span-full text-center text-2xl font-bold mb-6 mt-3 text-tertiary">
          Wise Words from <span className="font-bold"> {quote.author} </span>
        </h2>
        <div className="flex flex-col items-center p-3 bg-tertiary rounded-lg shadow-lg drop-shadow-lg">
          <h2>With us from  <span className='text-headline from-secondary-content'>{quote.lifespan}</span></h2>
          <a title='wikiLink' href={quote.wikiLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={quote.img || '/fist.png'}
              alt={quote.author}
              height={300}
              width={300}
              className="border-2 border-headline p-1 bg-tertiary rounded-lg shadow-lg mb-3"
            />
          </a>
          <div className="caption-bottom">
            <h2 className="text-headline text-lg">{quote.author}</h2>
          </div>
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
