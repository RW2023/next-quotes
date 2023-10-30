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
    <div>
      <h1 className="text-center text-headline text-xl p-2 mx-0">Home</h1>
      <BlackHistoryQuoteGenerator
        quote={quote}
        handleNewQuote={handleNewQuote}
      />
    </div>
  );
}
