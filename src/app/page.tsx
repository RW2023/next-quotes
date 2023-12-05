'use client';

import React, { useState } from 'react';
import BlackHistoryQuoteGenerator from '@/components/BlackHistoryQuoteGenerator';
import blackHistoryQuotes from '@/data/blackHistoryQuotes';
import Image from 'next/image';
import QuoteHeading from '@/components/ui/QuoteHeading';

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
      <div className="container mx-auto px-4 md:px-0 p-6 grid grid-cols-1 md:grid-cols-2 gap-2 bg-background shadow-lg rounded-lg">
        <h1 className="col-span-full text-center text-5xl font-bold text-headline">
          Timeless Wisdom from Black Thought Leaders
        </h1>
        <QuoteHeading quoteText="Wise Words from" author={quote.author} />

        <div className="card bordered flex flex-col items-center p-3 bg-tertiary rounded-lg shadow-lg m-1">
          <h2>
            With us from <span className="text-headline">{quote.lifespan}</span>
          </h2>
          <a
            title="wikiLink"
            href={quote.wikiLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={quote.img || '/fist.png'}
              alt={quote.author}
              height={300}
              width={300}
              className="rounded-box border-2 border-headline p-1"
            />
          </a>
          <div className="caption-bottom">
            <h2 className="text-headline text-lg">{quote.author}</h2>
          </div>
          <h2 className="text-tertiary text-lg">{quote.author}</h2>
        </div>
        <div className="card bordered flex flex-col items-center p-3 bg-tertiary rounded-lg shadow-lg m-2">
          <BlackHistoryQuoteGenerator
            quote={quote}
            handleNewQuote={handleNewQuote}
          />
        </div>
      </div>
    </div>
  );
}
